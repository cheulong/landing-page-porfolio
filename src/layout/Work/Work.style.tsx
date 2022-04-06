import Colors from 'src/constans/color';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Box = styled.div`
  background: ${Colors.BLACK_80};
  padding: 1rem;
  height: 350px;
  width: 320px;
  padding: 2rem;
  h3 {
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
  }
  button {
    margin-top: 1.5rem;
    color: ${Colors.RED};
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    text-transform: uppercase;
    width: fit-content;
    &:hover {
      color: ${Colors.RED_90};
    }
  }
  &.middle {
    background: ${Colors.RED};
    button {
      color: ${Colors.WHITE};
      &:hover {
        color: ${Colors.RED_90};
      }
    }
  }
`;

export { Container, Box };
