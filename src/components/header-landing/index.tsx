import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Logo} from "../logo";


const StyledHeader = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
`

const StyledWrapper = styled.header `
    border-bottom: 1px solid var(--color-gray);
`



const StyledNavbar = styled.div `
    display: flex;
    align-items: center;
    color: var(--color-white);
`

const StyledNavLink = styled(NavLink) `
    display: flex;
    align-items: center;
    padding-left: 38px;
    color: var(--color-white);
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    &:hover {
      color: var(--color-primary);
    }
`

const ITEMS = [{
    title: "Menu",
    description: "/menu"
},{
    title: "Recipes",
    description: "/recipes"
},{
    title: "Chefs",
    description: "/chefs"
},{
    title: "Contacts",
    description: "/contacts"
} ]



export const HeaderLanding:React.FC = () => {
    return <StyledWrapper>
            <div className="container">
                <StyledHeader>
                        <Logo />
                        <StyledNavbar>
                            {ITEMS.map((item) => { return <div key={item.title}>
                                <StyledNavLink to={item.description}>{item.title}</StyledNavLink>
                            </div>})}
                        </StyledNavbar>
                </StyledHeader>
            </div>
        </StyledWrapper>
}