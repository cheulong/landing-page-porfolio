import Colors from 'src/constans/color';
import styled from 'styled-components';

const NavbarListStyle = styled.ul<{ isFooter: boolean }>`
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 1rem;
  margin-top: ${props => (props.isFooter ? '4rem' : null)};
  justify-content: ${props => (props.isFooter ? 'center' : null)};
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
