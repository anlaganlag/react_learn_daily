import React from "react";
const Nav = ({ activeTab, onTabChange ,total,value}) => {
  const itemClass = (tabName) =>
    `App-nav-item ${activeTab === tabName ? "selected" : ""}`;
  value = value 
    ? `$${value}`
    :""
  return (
    <nav className="App-nav">
      <ul>
        <li className={itemClass("items")}>
          <button onClick={() => onTabChange("items")}>產品</button>
        </li>
        <li className={itemClass("cart")}>
          <button onClick={() => onTabChange("cart")}>{`購物車 (${total}) ${value} `}</button>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
