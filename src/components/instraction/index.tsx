import React from "react";
import styled from "styled-components";

const ITEMS = [
  {
    title: "Pick Meals",
    description:
      "Choose your meals from our diverse weekly menu. Find gluten or dairy free, low carb & veggie options."
  },
  {
    title: "Choose How Often",
    description:
      "Our team of chefs do the prep work - no more chopping, measuring, or sink full of dishes!"
  },
  {
    title: "Fast Deliveries",
    description:
      "Your freshly prepped 15-min dinner kits arrive on your doorstep in a refrigerated box."
  },
  {
    title: "Tasty Meals",
    description: "Gobble makes cooking fast, so you have more time to unwind and be with family."
  }
];

const StyledWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  text-align: left;
`;

const StyledBorder = styled.div`
  border-bottom: 2px solid var(--color-primary);
  width: 25%;
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--color-bgc);
  width: 25%;
  border-radius: 6px;
  padding: 24px;
  & + & {
    margin-left: 24px;
  }
  &:hover {
    background-color: var(--color-primary);
  }
`;

const StyledTitle = styled.div`
  color: var(--color-white);
  font-size: 22px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: -0.27px;
  padding-bottom: 10px;
`;

const StyledDescription = styled.p`
  color: var(--color-white);
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.16px;
  padding-top: 24px;
  margin: 0;
  opacity: 0.5;
  //&:hover {
  //  color: var(--color-black);
  //}
`;

export const Instraction: React.FC = () => {
  return (
    <StyledWrapper>
      {ITEMS.map(item => {
        return (
          <StyledItem key={item.title}>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledBorder></StyledBorder>
            <StyledDescription>{item.description}</StyledDescription>
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
};
