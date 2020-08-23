import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from "uuid/v4";
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
function App() {
  //消费
  const [expenses, setExpenses] = useState(initialExpenses);
  //一笔消费
  const [charge, setCharge] = useState("");
  //一笔消费金额
  const [amount, setAmount] = useState("");
  // 警告
  const [alert, setAlert] = useState({ show: false });
  // 编辑状态
  const [edit, setEdit] = useState(false);
  // 项目id
  const [id, setId] = useState(0);
  useEffect(() => {
    console.log("开始调用useEffect");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  //添加一笔消费
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // 添加一笔消费金额
  const handleAmount = e => {
    let amount = e.target.value;
    amount === "" ? setAmount(amount): setAmount(parseInt(amount));
     
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "消费项目已添加" });
      }
      // 消费项目清空
      setCharge("");
      // 消费项目归零
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `消费项目不能为空且金额需要大于0`
      });
    }
  };
  // handle delete
  const handleDelete = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "消费项目已经移除" });
  };
  //clear all items
  const clearItems = () => {
    setExpenses([]);
  };
  // handle edit
  const handleEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>账单计算器</h1>
      <main className="App">
        <ExpenseForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        总消费金额 :
        <span className="total">
          ￥
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
