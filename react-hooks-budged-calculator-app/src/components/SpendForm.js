import React from "react";
import { MdSend } from "react-icons/md";
const SpendForm = ({
  charge,//消费项目
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
  edit,
  refCharge
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">消费项目</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="比如 房租.."
            value={charge}
            onChange={handleCharge}
            ref = {refCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">金额</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="比如 1000.."
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "编辑" : "提交"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default SpendForm;
