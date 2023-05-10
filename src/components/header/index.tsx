import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledHeader = styled.div `
    background-color: #f8f9fb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px 0 15px;
`

const StyledLogo = styled.p `
    color: #7c7c7c;
    font-weight: bold;
    font-size: 25px;
`
const StyledNavLink = styled(NavLink) `
      color: #646464;
      font-size: 25px;
      text-decoration: none;

`
export const Header:React.FC = () => {
    return <> <StyledHeader><StyledLogo>Healthy food</StyledLogo><StyledNavLink to="../login">Login</StyledNavLink></StyledHeader> </>
}