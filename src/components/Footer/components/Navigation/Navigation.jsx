import { Nav, Navigate, NavList, NavListItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Navigate>
      <NavList>
        <NavListItem>
          <Nav href="#home">Home</Nav>
        </NavListItem>
        <NavListItem>
          <Nav href="#made">How it’s made?</Nav>
        </NavListItem>
        <NavListItem>
          <Nav href="#products">Our products</Nav>
        </NavListItem>
        <NavListItem>
          <Nav href="#top-sellers">Top sellers</Nav>
        </NavListItem>
        <NavListItem>
          <Nav href="#comments">Chocolate is loved</Nav>
        </NavListItem>
      </NavList>
    </Navigate>
  );
};
