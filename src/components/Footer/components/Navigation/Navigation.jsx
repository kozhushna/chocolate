import { Nav, Navigate, NavList, NavListItem } from "./Navigation.styled"

export const Navigation = () => {
    return(
        <Navigate>
            <NavList>
                <NavListItem>
                    <Nav href="#made">Home</Nav>
                </NavListItem>
                <NavListItem>
                    <Nav href="#made">How it’s made?</Nav>
                </NavListItem>
                <NavListItem>
                    <Nav href="#products">Our products</Nav>
                </NavListItem>
                <NavListItem>
                    <Nav href="#made">Top sellers</Nav>
                </NavListItem>
                <NavListItem>
                    <Nav href="#made">Chocolate is loved</Nav>
                </NavListItem>
            </NavList>
        </Navigate>
    )
} 