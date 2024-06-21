export default function StartQuiz({ generateQuestionApiUrl }) {
  return (
    <>
      <div>
        <h1 className="title">Quizzical</h1>
        <p className="description">Some description if needed</p>
      </div>
      <div className="form-wrap">
        <label htmlFor="category" className="form-label">
          Select Category:
        </label>
        <select id="category" className="form-select">
          <option value="any" className="form-select-option">
            Any Category
          </option>
          <option value="9" className="form-select-option">
            General Knowledge
          </option>
          <option value="10" className="form-select-option">
            Entertainment: Books
          </option>
          <option value="11" className="form-select-option">
            Entertainment: Film
          </option>
          <option value="12" className="form-select-option">
            Entertainment: Music
          </option>
          <option value="13" className="form-select-option">
            Entertainment: Musicals &amp; Theatres
          </option>
          <option value="14" className="form-select-option">
            Entertainment: Television
          </option>
          <option value="15" className="form-select-option">
            Entertainment: Video Games
          </option>
          <option value="16" className="form-select-option">
            Entertainment: Board Games
          </option>
          <option value="17" className="form-select-option">
            Science &amp; Nature
          </option>
          <option value="18" className="form-select-option">
            Science: Computers
          </option>
          <option value="19" className="form-select-option">
            Science: Mathematics
          </option>
          <option value="20" className="form-select-option">
            Mythology
          </option>
          <option value="21" className="form-select-option">
            Sports
          </option>
          <option value="22" className="form-select-option">
            Geography
          </option>
          <option value="23" className="form-select-option">
            History
          </option>
          <option value="24" className="form-select-option">
            Politics
          </option>
          <option value="25" className="form-select-option">
            Art
          </option>
          <option value="26" className="form-select-option">
            Celebrities
          </option>
          <option value="27" className="form-select-option">
            Animals
          </option>
          <option value="28" className="form-select-option">
            Vehicles
          </option>
          <option value="29" className="form-select-option">
            Entertainment: Comics
          </option>
          <option value="30" className="form-select-option">
            Science: Gadgets
          </option>
          <option value="31" className="form-select-option">
            Entertainment: Japanese Anime &amp; Manga
          </option>
          <option value="32" className="form-select-option">
            Entertainment: Cartoon &amp; Animations
          </option>
        </select>
      </div>
      <div className="form-wrap">
        <label htmlFor="difficulty" className="form-label">
          Select Difficulty:
        </label>
        <select id="difficulty" className="form-select">
          <option value="any" className="form-select-option">
            Any Difficulty
          </option>
          <option value="easy" className="form-select-option">
            Easy
          </option>
          <option value="medium" className="form-select-option">
            Medium
          </option>
          <option value="hard" className="form-select-option">
            Hard
          </option>
        </select>
      </div>
      <button className="button" onClick={generateQuestionApiUrl}>
        Start Quiz
      </button>
    </>
  );
}
