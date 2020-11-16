import React from 'react';
import { Container } from 'reactstrap';

import { ExpenseContextProvider } from './GlobalState';


import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

export default function App() {
  return (
    <ExpenseContextProvider>
      <Container className="text-center">
        <Header />
        <Form />
        <List />
      </Container>
    </ExpenseContextProvider>
  );
}
