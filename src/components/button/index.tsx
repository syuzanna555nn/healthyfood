import React, { useCallback } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ isSecondary: boolean; isSmall: boolean }>`
  border: none;
  border-radius: 43px;
  color: ${props => (props.isSecondary ? "var(--color-white)" : "var(--color-black)")};
  width: 100%;
  max-width: ${props => (props.isSmall ? "100px" : "220px")};
  padding: ${props => (props.isSecondary ? "10px" : "20px")};
  background-color: ${props => (props.isSecondary ? "var(--color-title)" : "var(--color-primary)")};
  font-size: ${props => (props.isSecondary ? "10px" : "18px")};
  font-weight: ${props => (props.isSecondary ? "900" : "700")};
  line-height: ${props => (props.isSecondary ? "40px" : "22px")};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: ${props => (props.isSecondary ? "0.2em" : "")};
  // opacity: ${props => (props.isSecondary ? "0.5" : "")};
  &:hover {
    background-color: ${props => (props.isSecondary ? "var(--color-primary)" : "")};
  }
`;

interface IButton {
  title: string;
  isSecondary?: boolean;
  isSmall?: boolean;
}

export const Button: React.FC<IButton> = ({ title, isSecondary = false, isSmall = false }) => {
  const handleOnClick = useCallback(() => console.log("Corzina"), []);
  return (
    <StyledButton isSecondary={isSecondary} isSmall={isSmall} onClick={handleOnClick}>
      {title}
    </StyledButton>
  );
};
