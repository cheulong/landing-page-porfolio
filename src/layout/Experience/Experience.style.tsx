import Colors from 'src/constans/color';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  margin-top: 5rem;
`;
const ExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0.33;
  font-weight: 900;
  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    color: ${Colors.RED_90};
  }
`;
const DetailtWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  flex: 0.66;

  div {
    background: ${Colors.BLACK_80};
    padding: 1rem;
    width: 320px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      color: ${Colors.RED_90};

      margin-bottom: 1rem;
      margin-top: 1rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 900;
    }
  }
`;
export { Container, ExpWrapper, DetailtWrapper };
