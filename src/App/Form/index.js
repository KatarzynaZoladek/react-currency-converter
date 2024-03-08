import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";


export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (
        <form className="form" onSubmit={onSubmit}>
            <h1 className="form__header">
                Kalkulator walut
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota PLN: 
                    </span>
                    <input
                        className="form__field"
                        required
                        type="number"
                        min="1"
                        step="any"
                        value={amount}
                        placeholder="Wpisz kwotę w PLN"
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
            </p>
            <label>
                <span className="form__labelText">
                    Przelicz z:
                </span>
                <select
                    className="form__field"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                >

                    {currencies.map((currency => (
                        <option
                            key={currency.short}
                            value={currency.short}
                        >
                            {currency.name}
                        </option>
                    )))}
                </select>
            </label>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <p className="form___info">
                * Przelicznik kursu walut na dzień 18.01.2024.
            </p>

            <Result result={result} />
        </form>
    );
};

export default Form;
