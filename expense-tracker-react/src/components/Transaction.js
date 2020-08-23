import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';
  const signName = transaction.amount < 0 ? 'minus' : 'plus'

  return (
    <li className={signName}>
    {transaction.text} 
    <span>{sign}${Math.abs(transaction.amount.toLocalString)}</span>
    <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">刪除</button>
  </li>
  )
}
