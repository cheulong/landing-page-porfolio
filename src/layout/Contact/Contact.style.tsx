import Colors from 'src/constans/color';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  background: ${Colors.BLACK_80};
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    line-height: 3rem;
    margin-bottom: 1rem;
  }
`;

const ContactButton = styled.div`
  flex: 0.5;
  justify-content: center;
  display: flex;
  button {
    color: #fff;
    background: rgb(160, 20, 27, 1);
    background: linear-gradient(90deg, rgba(160, 20, 27, 1) 0%, rgba(191, 23, 36, 1) 100%);
    border: none;
    text-transform: uppercase;
    width: fit-content;
    padding: 0.7rem 1.5rem;
  }
`;
const TextContainer = styled.div`
  flex: 0.5;
`;
export { Container, ContactButton, TextContainer };
