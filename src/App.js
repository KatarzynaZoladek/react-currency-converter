import './App.css';

function App() {
  return (
    <div>
      <form className="form">
        <h1 className="form__header">Kalkulator walut</h1>
        <p>
          <label>
            <span className="form__labelText"> Kwota *pole obowiązkowe </span>
            <input
              className="form__field"
              required
              type="number"
              min="1"
              step="any"
              value="100"
            />
          </label>
        </p>
        <label>
          <span className="form__labelText"> Przelicz z: </span>
          <select className="form__field" name="currency">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR" selected>EUR</option>
          </select>
        </label>
        <p>
          <button className="form__button">Przelicz!</button>
        </p>
        <p className="form__result">
          Kwota w PLN:
        </p>
        <p className="form___info">
          * Przelicznik kursu walut na dzień 18.01.2024.
        </p>
      </form>
    </div>
  );
}

export default App;
