import { decode } from 'html-entities';
import Answer from './Answer';

export default function Question({ id, difficulty, category, question, answers, selectAnswer, selectedAnswer, process }) {
  return (
    <div className="question">
      <h2 className="question-title">{decode(question)}</h2>
      <p className="question-info">{decode(category)} - {decode(difficulty)}</p>
      <div className="answer-wrap">
        {answers.map((answer) => (
          <Answer
            key={answer.id}
            id={answer.id}
            questionId={id}
            answer={answer.answer}
            correct={answer.correct}
            selectAnswer={selectAnswer}
            selectedAnswer={selectedAnswer}
            process={process}
          />
        ))}
      </div>
    </div>
  );
}
