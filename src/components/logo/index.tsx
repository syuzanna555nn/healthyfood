import React from "react";

// @ts-ignore
import styled from "styled-components";

import LogoIcon from "../../img/icons/logo.svg";
// @ts-ignore
import LogoNameIcon from "../../img/icons/HEALTHY SWITCHER.svg";

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIconLogo = styled.div`
  margin-top: -2.5px;
  margin-right: 9px;
`;

export const Logo: React.FC = () => {
  return (
    <StyledLogoWrapper>
      <StyledIconLogo>
        <img src={LogoIcon} alt="logo" />
      </StyledIconLogo>
      <img src={LogoNameIcon} alt="HEALTHY SWITCHER" />
    </StyledLogoWrapper>
  );
};
