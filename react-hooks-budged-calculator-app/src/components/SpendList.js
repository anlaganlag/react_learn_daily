import React from "react";
import SpendItem from "./SpendItem";
import { MdDelete } from "react-icons/md";
const SpendList = ({ spends, handleDelete, handleEdit, clearItems }) => 
    <>
      <ul className="list">
        {spends.map(spend => 
            <SpendItem
              key={spend.id}
              spend = {spend}
              handleDelete = {handleDelete}
              handleEdit = {handleEdit}
            />
          )}
      </ul>
      {spends.length  && (
        <button className="btn" onClick={clearItems}>
          清空消费项目
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>


export default SpendList;
