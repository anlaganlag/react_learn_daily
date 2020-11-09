import React, { useState, useContext } from "react";
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";
import { v4 as uuid } from "uuid";

import { ExpenseContext } from "../GlobalState";

export default function Form() {
  const [state, dispatch] = useContext(ExpenseContext);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleName = (event) => {
    console.log("Name ", event.target.value);
    setName(event.target.value);
  };

  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (name !== "" && amount > 0) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: { id: uuid(), name, amount },
      });

      // clean input fields
      setName("");
      setAmount("");
    } else {
      console.log("消费项目和金额不合法..");
    }
  };
  return (
    <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>开支名称</Label>
        <Col sm={4}>
          <Input
            type="text"
            name="name"
            id="expenseName"
            placeholder="开支项目?"
            value={name}
            onChange={handleName}
          />
        </Col>
      </FormGroup>
      <FormGroup className="row">
        <Label for="exampleEmail" sm={2}>
          金额
        </Label>
        <Col sm={4}>
          <Input
            type="number"
            name="amount"
            id="expenseAmount"
            placeholder="￥ 0"
            value={amount}
            onChange={handleAmount}
          />
        </Col>
      </FormGroup>
      <Button type="submit" color="primary">
        添加
      </Button>
    </BTForm>
  );

}
