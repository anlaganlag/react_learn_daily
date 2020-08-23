import React, {useState, useContext,} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);


  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    }


    addTransaction(newTransaction);
    setAmount(0);
    setText("");
  }

  

  return (
    <>
      <h3>添加收支項目</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">項目</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} autoFocus placeholder="請在這裏輸入收支名稱..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >金額 :</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="請輸入金額..." />
        </div>
        <button className="btn">增加一條記錄</button>
      </form>
    </>
  )
}
