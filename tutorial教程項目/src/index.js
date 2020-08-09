import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const PRODUCTS = [
  {category: '奢侈消費', price: '$49.99', stocked: true, name: '飛機'},
  {category: '奢侈消費', price: '$9.99', stocked: true, name: '遊艇'},
  {category: '奢侈消費', price: '$29.99', stocked: false, name: '豪宅'},
  {category: '個人成就', price: '$99.99', stocked: true, name: '10 kids'},
  {category: '個人成就', price: '$399.99', stocked: false, name: '獨角獸'},
  {category: '個人成就', price: '$199.99', stocked: true, name: '最強body'},
  {category: '個人成就', price: '$999.99', stocked: true, name: 'bpm'}
];


ReactDOM.render(
    <App products={PRODUCTS} />,

  document.getElementById('root')
)
