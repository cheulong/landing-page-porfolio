import Colors from 'src/constans/color';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 3rem;
  background: ${Colors.BLACK_90};
  padding: 1rem;
`;

const Left = styled.div``;

const Center = styled.div`
  display: flex;
  flex: 0.2;
  justify-content: space-around;
`;
const Right = styled.div``;
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export { Container, Left, Center, Right, Wrapper };
