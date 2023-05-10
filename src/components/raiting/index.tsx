import React from "react";

// @ts-ignore
import styled from "styled-components";

import StarFool from "../../img/icons/ic_star.svg";
// @ts-ignore
import StarHalf from "../../img/icons/ic_star_half.svg";
// @ts-ignore
import StarBorder from "../../img/icons/ic_star_border.svg";

const ITEMS = [
  {
    fool: StarFool,
    half: StarHalf,
    border: StarBorder
  }
];

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledItem = styled.div`
  display: flex;
`;

const StyledIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const Index: React.FC = () => {
  return (
    <StyledWrapper>
      {ITEMS.map(item => {
        return (
          <StyledItem>
            <StyledIcon>{item.fool}</StyledIcon>
            <StyledIcon>{item.fool}</StyledIcon>
            <StyledIcon>{item.fool}</StyledIcon>
            <StyledIcon>{item.half}</StyledIcon>
            <StyledIcon>{item.border}</StyledIcon>
          </StyledItem>
        );
      })}
    </StyledWrapper>
  );
};
