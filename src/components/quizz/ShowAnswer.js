import Question from './Question';

export default function ShowAnswer({ questions, startNewQuiz }) {
  return (
    <>
      {questions.map((question) => (
        <Question
          key={question.id}
          id={question.id}
          difficulty={question.difficulty}
          category={question.category}
          question={question.question}
          answers={question.answers}
          selectedAnswer={question.selectedAnswer}
          process="result"
        />
      ))}
      <button onClick={startNewQuiz} className="button">Start New Quiz</button>
    </>
  );
}
