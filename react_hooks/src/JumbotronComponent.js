import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


function JumbotronComponent(props) {
  return (
    <>
    <div>
    <Jumbotron>
      <h1>Hello, GalFond!</h1>           
      <p>I Am A Hero Of Myself</p>
      <p>{props.children}</p>
      <p><Button variant="primary">OK</Button></p>
    </Jumbotron>                                                                                                                                
  </div>
  </>
  );
}
export default JumbotronComponent;