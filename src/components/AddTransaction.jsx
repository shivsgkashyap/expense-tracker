import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  const updateText = (e) => {
    setText(e.target.value);
  };

  const updateAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <section>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Transaction details:</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={updateText}
            placeholder="Please enter details..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <p class="amount-label">
            (enter negative value for expense and positive for income)
          </p>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={updateAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </section>
  );
};

export default AddTransaction;
