import { decode } from 'html-entities';

export default function Answer({ id, questionId, answer, correct, selectAnswer, selectedAnswer, process }) {
  const labelClassName = process === 'result' ? (correct ? 'answer right' : 'answer wrong') : 'answer';

  return (
    <label className={labelClassName} id={id}>
      {decode(answer)}
      <input
        type="radio"
        className="answer-radio"
        value={id}
        name={questionId}
        onChange={() => selectAnswer(questionId, id)}
        checked={selectedAnswer === id}
        disabled={process === 'result'}
      />
    </label>
  );
}
