import Colors from 'src/constans/color';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  .left {
    flex: 0.5;
    margin: 5rem;
    div {
      margin: 10px 90px;
    }
    img {
      height: 50px;
    }
  }
  .right {
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h3 {
    color: ${Colors.RED};
  }
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 900;
    font-size: 2.5rem;
  }
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

export { Container };
