import React from "react";
// @ts-ignore
import Dish from "../../img/dish.jpg";
// @ts-ignore
import Dish2 from "../../img/dish2.jpg";
// @ts-ignore
import Dish3 from "../../img/dish3.jpg";
// @ts-ignore
import Dish4 from "../../img/dish4.jpg";
// @ts-ignore
import Dish5 from "../../img/dish5.jpg";
// @ts-ignore
import Dish6 from "../../img/dish6.jpg";
import styled from "styled-components";
import {Index} from "../raiting";
import {Button} from "../button";
// @ts-ignore
import IconShare from "../../img/icons/share.svg";





const ITEMS = [{
    image: Dish,
    title: "Featured Meal",
    comment: "Served with french fries + drink",
    description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
}, {
    image: Dish2,
    title: "Featured Meal",
    comment: "Served with french fries + drink",
    description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
}, {
    image: Dish3,
    title: "Featured Meal",
    comment: "Served with french fries + drink",
    description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
}, {
    image: Dish4,
    title: "Featured Meal",
    comment: "Served with french fries + drink",
    description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
}, {
    image: Dish5,
    title: "Featured Meal",
    comment: "Served with french fries + drink",
    description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
}, {
    image: Dish6,
    title: "Featured Meal",
    comment: "Served with french fries + drink",
    description: "Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...",
} ]

const StyledWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: space-between;
    text-align: left;
`
const StyledItem = styled.div `
    display: flex;
    flex-direction: column;
    width: 31%;
    background-color: var(--color-bgc);
    margin-bottom: 30px;
    border-radius: 10px;
    overflow: hidden;
`

const StyledImg = styled.div `
    width: 100%;
`

const StyledTitle = styled.div `
    font-size: 32px;
    font-weight: 500;
    line-height: 30px;
    color: var(--color-white);
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
`

const StyledComment = styled.div `
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: var(--color-white);
    opacity: 0.5;
    letter-spacing: -0.15px;
    padding-left: 30px;
    padding-right: 30px;
`

const StyledDescription = styled.div `
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: var(--color-white);
    opacity: 0.5;
    letter-spacing: -0.16px;
    padding: 20px 30px 30px 30px;
`


const StyledIconShare = styled.div `
    position: absolute;
    padding: 20px 20px 20px 290px;
`

const StyledButton = styled.div `
    width: 100%;
    padding-right: 24px;
    padding-bottom: 24px;
    padding-left: 226px;
    
`


export const Menu:React.FC = () => {
    return <StyledWrapper>
    {ITEMS.map((item) => {return (<StyledItem key={item.title}>
                <StyledIconShare><img src={IconShare} /></StyledIconShare>
                <StyledImg><img width="100%" src={item.image} alt="Dish img"/></StyledImg>
                <StyledTitle>{item.title}</StyledTitle>
                <StyledComment>{item.comment}</StyledComment>
                <StyledDescription>{item.description}</StyledDescription>
            <StyledButton><Button title={"ORDER"} isSecondary={true} isSmall={true}/></StyledButton>
            </StyledItem>
        )})}
    </StyledWrapper>
}