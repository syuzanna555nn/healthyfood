import React from "react";
import styled from "styled-components";
import { HeaderLanding } from "components/header-landing";

import { ContactsInfo } from "../../components/contact-info";
import { Button } from "../../components/button";
import { Title } from "../../components/title/title";
import { PageSlider } from "../../components/page-slider/page-slider";
import { Instraction } from "../../components/instraction";
import { Menu } from "../../components/menu";
import { Logo } from "../../components/logo";

const StyledBkgImg = styled.div`
  background-image: url("../../img/bkg.jpg");
`;

const StyledMainWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledHead = styled.h1`
  width: 100%;
  color: var(--color-white);
  font-weight: 700;
  font-size: 72px;
  line-height: 88px;
  text-align: center;
  letter-spacing: 0.1em;
  margin: 80px 0 16px 0;
`;

const StyledDescription = styled.h3`
  width: 595px;
  height: 52px;
  color: #bcbcbc;
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  text-align: center;
  margin: 0 0 40px 0;
  opacity: 0.7;
  letter-spacing: -0.2px;
`;

const StyledPartHead = styled.span`
  font-weight: 1;
  font-family: "Bodoni MT";
`;

const StyledBorder = styled.div`
  border-bottom: 2px solid #34c759;
  width: 60px;
  margin-top: 28px;
  margin-bottom: 60px;
`;

const StyledContacts = styled.div`
  display: flex;
  align-items: center;
  margin-top: 35px;
  justify-content: space-around;
  width: 100%;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 90px;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--color-bgc);
  width: 100%;
  padding-bottom: 20px;
  margin-top: 120px;
`;

const StyledFooterLogo = styled.div`
  padding-top: 30px;
  border-top: 1px solid var(--color-title);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledAuthor = styled.div`
  color: var(--color-white);
  opacity: 0.5;
`;

export const Landing: React.FC = () => {
  return (
    <>
      <HeaderLanding />
      <StyledBkgImg>
        {" "}
        {/* bg */}
        <div className="container">
          <StyledMainWrapper>
            <StyledHero>
              <StyledHead>
                <StyledPartHead>Your </StyledPartHead>Favourite Food
                <StyledPartHead> Delivered</StyledPartHead> Hot & Fresh
              </StyledHead>
              <StyledDescription>
                HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so
                you can cook a fresh homemade dinner in just 15 minutes.
              </StyledDescription>
              <Button title={"Order Now"} />
              <StyledContacts>
                <ContactsInfo />
              </StyledContacts>
              <PageSlider />
            </StyledHero>
            <StyledBlock>
              <Title title={"WORK"} description={"How It Works"} />
              <StyledBorder></StyledBorder>
              <Instraction />
            </StyledBlock>
            <StyledBlock>
              <Title title={"DISHES"} description={"Dish Of The Day"} />
              <StyledBorder></StyledBorder>
              <Menu />
            </StyledBlock>
          </StyledMainWrapper>
        </div>
        <StyledFooter>
          <ContactsInfo />
          <StyledFooterLogo>
            <Logo />
            <StyledAuthor>&copy; Made by Syuzanna N.</StyledAuthor>
          </StyledFooterLogo>
        </StyledFooter>
      </StyledBkgImg>
    </>
  );
};
