import React, { useState,useRef } from 'react'
import Products from './Products'
import Rating from './Rating'
import { Button } from "react-bootstrap"


export default function App() {
  return (
    <div>
      <h1>
        R hooks
        <Products />
        <Button variant="warning">警告</Button>
        <Button variant="danger">危險</Button>
        <Button >默認</Button>
        <Button variant="primary" disabled >無法選中</Button>
        <Button variant="primary"  >正常</Button>

        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />

      </h1>
    </div>
  );
}