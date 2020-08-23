import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0).toLocaleString()

  const expense = ( amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)).toLocaleString() 

  const total = (
    amounts.reduce((a,b)=>a+b,0)
  )
  return (
    <div className="inc-exp-container">
      <div>
        <h4>總盈餘</h4>
        <p className={total<0?'money minus':'money plus'}>￥{total.toLocaleString()}</p>
      </div>
      <div>
        <h4>收入</h4>
        <p className="money plus">￥{income}</p>
      </div>
      <div>
        <h4>開支</h4>
        <p className="money minus">￥{expense}</p>
      </div>

    </div>
  );
};
