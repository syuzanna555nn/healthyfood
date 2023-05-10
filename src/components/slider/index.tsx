import React, { useCallback } from "react";
import styled from "styled-components";

// @ts-ignore
import SliderImg from "../../img/slider-img.jpg";
// @ts-ignore
import SliderImg2 from "../../img/slider-img2.jpg";
// @ts-ignore
import ArrowIconRight from "../../img/icons/arrow-btn-right.svg";
// @ts-ignore
import ArrowIconLeft from "../../img/icons/arrow-btn-left.svg";

const StyledSliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: var(--color-bgc);
  width: 85%;
  padding-top: 90px;
`;

const StyledSlider = styled.div`
  display: flex;
  width: 50%;

  & + & {
    padding-left: 30px;
  }
`;

const StyledSliderItem = styled.div``;

const StyledImg = styled.img`
  width: 100%;
`;

const ITEMS = [
  {
    image: SliderImg
  },
  {
    image: SliderImg2
  }
];

const StyledButtonWrapper = styled.div`
  padding-right: 50px;
  width: 60px;
  height: 60px;
`;

const StyledButtonWrapperRevers = styled.div`
  padding-left: 50px;
  width: 60px;
  height: 60px;
`;

export const Slider: React.FC = () => {
  const handleOnClick = useCallback(() => console.log("Next foto"), []);

  return (
    <StyledSliderWrapper>
      <StyledButtonWrapper onClick={handleOnClick}>
        <img src={ArrowIconLeft} />
      </StyledButtonWrapper>
      {ITEMS.map(item => {
        return (
          <StyledSlider>
            <StyledSliderItem>
              <StyledImg src={item.image} />
            </StyledSliderItem>
          </StyledSlider>
        );
      })}
      <StyledButtonWrapperRevers onClick={handleOnClick}>
        <img src={ArrowIconRight} />
      </StyledButtonWrapperRevers>
    </StyledSliderWrapper>
  );
};
