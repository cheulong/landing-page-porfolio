import styled from 'styled-components';

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row;
  gap: 1rem;

  a {
    text-decoration: none;
    :visited {
      color: #fff;
    }
    :hover {
      text-decoration: underline;
    }
  }
`;

export { NavbarList };
