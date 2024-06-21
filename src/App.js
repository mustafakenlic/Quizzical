import { useEffect, useState, useCallback } from 'react';
import StartQuiz from './components/quizz/StartQuiz';
import ShowQuestion from './components/quizz/ShowQuestion';
import ShowAnswer from './components/quizz/ShowAnswer';
import { nanoid } from 'nanoid';

export default () => {
  const [page, setPage] = useState(
    () => localStorage.getItem('pageState') || ''
  );
  const [questionsUrl, setQuestionsUrl] = useState('');
  const [questions, setQuestions] = useState(
    () => JSON.parse(localStorage.getItem('questions')) || []
  );

  useEffect(() => {
    localStorage.setItem('pageState', page);
  }, [page]);

  const transformData = useCallback((data) => {
    return data.map((item) => {
      const allAnswers = [
        ...item.incorrect_answers.map((answer) => ({
          answer,
          correct: false,
          id: nanoid(),
        })),
        { answer: item.correct_answer, correct: true, id: nanoid() },
      ];

      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

      return {
        id: nanoid(),
        difficulty: item.difficulty,
        category: item.category,
        question: item.question,
        answers: shuffledAnswers,
        selectedAnswer: null,
      };
    });
  }, []);

  const getQuestionsFromApiUrl = useCallback(async () => {
    try {
      const response = await fetch(questionsUrl);
      if (!response.ok) {
        console.error('Network response was not ok');
        return;
      }
      const data = await response.json();
      const formattedQuestions = transformData(data.results);
      setQuestions(formattedQuestions);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  }, [questionsUrl, transformData]);

  useEffect(() => {
    if (questionsUrl) {
      getQuestionsFromApiUrl();
      setQuestionsUrl('');
    }
  }, [questionsUrl, getQuestionsFromApiUrl]);

  useEffect(() => {
    if (questions.length > 0) {
      localStorage.setItem('questions', JSON.stringify(questions));
      setPage('ShowQuestion');
    }
  }, [questions]);

  const generateQuestionApiUrl = () => {
    const category =
      document.getElementById('category').value !== 'any'
        ? `&category=${document.getElementById('category').value}`
        : '';
    const difficulty =
      document.getElementById('difficulty').value !== 'any'
        ? `&difficulty=${document.getElementById('difficulty').value}`
        : '';
    setQuestionsUrl(
      `https://opentdb.com/api.php?amount=5&type=multiple${category}${difficulty}`
    );
  };

  const selectAnswer = (questionID, answerID) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionID
          ? { ...question, selectedAnswer: answerID }
          : question
      )
    );
  };

  const validateAnswers = () =>
    questions.every((question) => question.selectedAnswer !== null);

  const checkAnswers = () => {
    if (validateAnswers()) {
      setPage('ShowAnswer');
    } else {
      alert('Please answer all questions');
    }
  };

  const startNewQuiz = () => {
    setQuestions([]);
    localStorage.removeItem('questions');
    setPage('');
  };

  const renderPageComponent = () => {
    switch (page) {
      case 'ShowQuestion':
        return (
          <ShowQuestion
            questions={questions}
            selectAnswer={selectAnswer}
            checkAnswers={checkAnswers}
          />
        );
      case 'ShowAnswer':
        return <ShowAnswer questions={questions} startNewQuiz={startNewQuiz} />;
      default:
        return <StartQuiz generateQuestionApiUrl={generateQuestionApiUrl} />;
    }
  };

  return (
    <div className="bgshape">
      <main className={page}>{renderPageComponent()}</main>
    </div>
  );
};
