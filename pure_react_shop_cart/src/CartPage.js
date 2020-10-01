import React from "react";
import Item from "./Item"
import PropTypes from "prop-types";


export default function CartPage({ items, onAddOne, onRemoveOne ,value}) {
  value  = value || ""
  return (
    <>
    <ul className="CartPage-items">
      {items.map((item) => (
        <li key={item.id} className="CartPage-item" >
          <Item item={item}>
            <div className="CartItem-controls">
              <button
                className="CartItem-removeOne"
                onClick={() => onRemoveOne(item)}
                >
                {/* {" "} */}
                &ndash;
                {/* {" "} */}
              </button>
              <span className="CartItem-count"> {item.count} </span>
              <button
                className="CartItem-addOne"
                onClick={() => onAddOne(item)}
                >
                {/* {" "} */}
                +
                {/* {" "} */}
              </button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
      {value 
        ?<p style={{textAlign:"right",color:"red"}} >{`總金額:$${value}`}</p>
        :<p>购物车为空</p>
      }
    </>
  );
}
CartPage.propTypes = {
  items: PropTypes.array.isRequired,
  onAddOne: PropTypes.func.isRequired,
  onRemoveOne: PropTypes.func.isRequired,
};
