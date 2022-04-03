import Colors from 'src/constans/color';
import styled from 'styled-components';

const NavbarListStyle = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 1rem;

  a {
    text-decoration: none;
    display: flex;
    text-underline-offset: 0.3rem;
    div {
      display: flex;
      align-items: center;
    }
    :visited {
      color: #fff;
    }
    :hover {
      text-decoration: underline;
      text-decoration-color: ${Colors.RED};
    }
  }
`;

export { NavbarListStyle };
