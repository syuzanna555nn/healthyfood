import React from "react";
import styled from "styled-components";

import { Title } from "../title/title";
import { Slider } from "../slider";

const StyledSliderWrapper = styled.div`
  width: 100%;
  background-color: var(--color-bgc);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 130px;
  padding-top: 100px;
  padding-bottom: 90px;
`;

const StyledDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  color: var(--color-light-gray);
  width: 65%;
  margin-top: 60px;
`;

export const PageSlider: React.FC = () => {
  return (
    <StyledSliderWrapper>
      <Title title={"ABOUT"} description={"The Basics Of Healthy Food"} />
      <StyledDescription>
        In aliqua ea ullamco ad est ex non deserunt nulla. Consectetur sint ea aliquip aliquip
        consectetur voluptate est. Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
      </StyledDescription>
      <Slider />
    </StyledSliderWrapper>
  );
};
