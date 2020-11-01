import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h4 {
    color: var(--medGrey);
    text-align:left;
    margin:0;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }

  a {
    text-decoration: none;

    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
  a:visited {
      color:red
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: .8em 2em;
`;
