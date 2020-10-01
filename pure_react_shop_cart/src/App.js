import React, { useState } from "react";
import Nav from "./Nav";
import "./App.css";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import { items } from "./static-data";
//summary默認是首個對象..但是這裏指定爲{}
//item爲cur即遍歷對象
//相當於對{}進行賦值操作 summary[k] =v 所有key是id即 0,1,2,...v爲加上了count:v的obj
//即reduce的結果是是{0:obj,1:obj,}的形式..
//最後Object.value就是只要v不要k,變成[v,v,v]
const summarizeCart = (cart) => {
  const groupedItems = cart.reduce((summary, item) => {


    summary[item.id] = summary[item.id] || {
      ...item,
      count : 0
    };
    summary[item.id].count ++ ;
    return summary;
  }, {});
  return Object.values(groupedItems);
};
const totalValue = (cart) => 
  cart?.reduce((amount,cur) => cur.price*cur.count+ amount,0)

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const tmp = [...cart];
        tmp.splice(index, 1);
        return tmp;
      });
    }
  };

  const summerizedCart = summarizeCart(cart)
  const cartValue = totalValue(summerizedCart)
  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} total={cart.length} value = {cartValue}/>
      <main className="App-content">
        <Content
          tab={activeTab}
          onAddToCart={addToCart}
          onRemoveItem={removeItem}
          cart ={summerizedCart}
          value={cartValue}

        />
      </main>
    </div>
  );
};

const Content = ({ tab, onAddToCart, onRemoveItem,cart, value }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return (
        <CartPage
          items={cart}
          onAddOne={onAddToCart}
          onRemoveOne={onRemoveItem}
          value = {value}
        />
      );
  }
};
export default App;
