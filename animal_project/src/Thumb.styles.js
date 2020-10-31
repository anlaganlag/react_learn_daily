import styled from 'styled-components';

export const Wrapper = styled.div`

max-width: var(--maxWidth);
margin: 0 auto;
padding: 0 20px;

h1 {
  color: var(--medGrey);
  text-align:center;

  @media screen and (max-width: 768px) {
    font-size: var(--fontBig);
  }
}
`;

export const Content = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: .8em 2em;
`;

export const Image = styled.img`
  width: 100%;
  // display:relative;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;


  :hover {
    opacity: 0.8;
  }
  

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`

h5{
  display:absolute;

  font-size: var(--fontSmall);
  text-align:center;

  margin:0;

    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }

   small {
    font-size: var(--fontSuperSmall);
    text-align:center;
    opacity:0.45;
    display:block;
    color:red;



    @media screen and (max-width: 720px) {
      display:none
    }
  }
  


  }
`;

