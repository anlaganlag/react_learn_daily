import React, { useState, useEffect,useRef} from "react";
import "./App.css";
import SpendForm from "./components/SpendForm";
import SpendList from "./components/SpendList";
import Notice from "./components/Notice";
import uuid  from 'uuid/v4';
const initialSpends = localStorage.getItem("spends")
  ? JSON.parse(localStorage.getItem("spends"))
  : [];
function App() {
  //消费列表
  const [spends, setSpends] = useState(initialSpends);
  //一笔消费
  const [charge, setCharge] = useState("");
  //一笔消费金额
  const [amount, setAmount] = useState("");
  // 通知
  const [notice, setNotice] = useState({ show: false });
  // 编辑状态bool
  const [edit, setEdit] = useState(false);
  // 项目id用uuid自動生成
  const [id, setId] = useState(0);
  //創建ref容器..後續放入消費項目input元素,實現自動聚焦
  const refCharge = useRef()
  useEffect(() => {
    console.log("调用useEffect(首次调用或spends发生变化)");

    localStorage.setItem("spends", JSON.stringify(spends));
  }, [spends]);
  //添加一笔消费
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  // 添加一笔消费金额
  const handleAmount = e => {
    let amount = e.target.value;
    amount === "" ? setAmount(0): setAmount(parseInt(amount));
  };

  // 提示消息包括类型和文本
  const handleNotice = ({ type, text }) => {
    setNotice({ show: true, type, text });
    setTimeout(() => {
      setNotice({ show: false });
    }, 7000);//只出现七秒
  };
  // 提交消费
  const handleSubmit = e => {
    e.preventDefault();
    if (charge && amount > 0) {
      if (edit) {
        let newSpend = spends.map(item => 
          item.id === id ? { ...item, charge, amount } : item
        );
        setSpends(newSpend);
        setEdit(false);
      } else {
        const newCharge = { id: uuid(), charge, amount };
        setSpends([...spends, newCharge]);
        handleNotice({ type: "success", text: "新的消费项目已添加" });
      }
      // 消费项目清空
      setCharge("");
      // 消费项目归零
      setAmount("");
      refCharge.current.focus();
    } else {
      handleNotice({
        type: "danger",
        text: `消费项目不能为空且金额需要大于0`
      });
    }
  };
  // 删除项目
  const handleDelete = id => {
    setSpends(spends.filter(item => item.id !== id))
    handleNotice({ type: "danger", text: "消费项目已经移除" });
  };
  //清楚所有的项目
  const clearItems = () => {
    setSpends([]);
  };
  // 编辑项目
  const handleEdit = id => {
    let  { charge, amount } = spends.find(item => item.id === id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {notice.show && <Notice type={notice.type} text={notice.text} />}
      <h1>账单计算器</h1>
      <main className="App">
        <SpendForm
          handleSubmit={handleSubmit}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
          refCharge = {refCharge}

        />
        <SpendList
          spends={spends}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        总消费金额 :
        <span className="total">
          ￥
          {spends.reduce((total, cur) => {
            return (total += cur.amount);
          }, 0).toLocaleString()}
        </span>
      </h1>
    </>
  );
}

export default App;
