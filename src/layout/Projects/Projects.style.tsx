import Colors from 'src/constans/color';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 5rem;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    margin-top: 1.5rem;
    color: #fff;
    background: rgb(160, 20, 27, 1);
    background: linear-gradient(90deg, rgba(160, 20, 27, 1) 0%, rgba(191, 23, 36, 1) 100%);
    border: none;
    text-transform: uppercase;
    width: fit-content;
    padding: 0.7rem 1.5rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
const Box = styled.div`
  width: 38vw;
`;
const BoxImage = styled.div`
  padding: 2rem;
  background: ${Colors.BLACK_80};
`;
const BoxBody = styled.div`
h3{
  margin: 0.5rem 0;

}
button {
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
  }}
}
`;
export { Container, TitleContainer, Wrapper, Box, BoxBody, BoxImage };
