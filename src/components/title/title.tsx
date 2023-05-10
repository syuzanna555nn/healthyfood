import React from "react";
import styled from "styled-components";

interface ITitleProps {
  title: string;
  description: string;
}

const StyledTitle = styled.div`
  font-size: 100px;
  font-weight: 900;
  line-height: 150px;
  letter-spacing: 0.2em;
  color: var(--color-title);
  font-family: "Bodoni MT";
`;

const StyledDescription = styled.div`
  font-size: 30px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0.2em;
  color: var(--color-white);
  margin-top: -100px; // remove -100px
  letter-spacing: 0.2em;
`;

export const Title: React.FC<ITitleProps> = ({ title, description }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </>
  );
};
