import React from 'react';
import './bootstrap.min.css';

import JumbotronComponent from './JumbotronComponent';
import UserForm from './UserForm'


function App() {
  return (
    <>
    <JumbotronComponent>        
      This is a long sentence, and I want to insert content into the 
      jumbotron component from the outside.
    </JumbotronComponent>       
    <UserForm/> 
    </>
  );
}
export default App;