import React from "react";
import styled from "styled-components";

// @ts-ignore
import ClockIcon from "../../img/icons/clock.svg";
// @ts-ignore
import MailIcon from "../../img/icons/mail.svg";
// @ts-ignore
import PhoneIcon from "../../img/icons/phone.svg";

const StyledContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
`;

const StyledContactIcon = styled.img`
  width: 15px;
  height: 15px;
`;

const StyledContactTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 35px;
`;

const StyledContDescription = styled.div`
  font-size: 14px;
  font-weight: 70;
  line-height: 10px;
  opacity: 0.5;
`;

const ITEMS = [
  {
    title: "Today 10:00 am - 7:00 pm",
    description: "Working hours",
    icon: ClockIcon
  },
  {
    title: "Wash str. 100",
    description: "Get Directions",
    icon: MailIcon
  },
  {
    title: "+1 (063)833 24 15",
    description: "Call Online",
    icon: PhoneIcon
  }
];

export const ContactsInfo: React.FC = () => {
  return (
    <StyledContactWrapper>
      {ITEMS.map(item => {
        return (
          <StyledInfo key={item.title}>
            <StyledContactIcon src={item.icon} />
            <StyledContactTitle>{item.title}</StyledContactTitle>
            <StyledContDescription>{item.description}</StyledContDescription>
          </StyledInfo>
        );
      })}
    </StyledContactWrapper>
  );
};
