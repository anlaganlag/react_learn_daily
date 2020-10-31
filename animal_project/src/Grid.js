import React from 'react';
// Styles
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
  <Wrapper>
    <h4>{header}</h4>
    <Content>{children}</Content>
  </Wrapper>
);


export default Grid;
