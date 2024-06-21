import Question from './Question';

export default function ShowQuestion({ questions, selectAnswer, checkAnswers }) {
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
          selectAnswer={selectAnswer}
          selectedAnswer={question.selectedAnswer}
          process="list"
        />
      ))}
      <button onClick={checkAnswers} className="button">Check Answers</button>
    </>
  );
}

