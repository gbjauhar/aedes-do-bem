import styled from "styled-components";
import logo from "../assets/logo.png";
import caixasBanner from "../assets/Caixas-banner 2.svg";
import logoWhite from "../assets/logoWhite.svg";
import React from "react";

type HeaderComponentProps = {
  BannerBox?: boolean;
  confirm?: boolean;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ BannerBox, confirm }) => {
  return (
    <Header confirm={confirm} bannerBox={BannerBox}>
      <HeaderBox confirm={confirm} bannerBox={BannerBox}>
        <Logo src={confirm ? logoWhite : logo} />
        {BannerBox && <CaixasBanner src={caixasBanner} />}
      </HeaderBox>
    </Header>
  );
};

export default HeaderComponent;

const Logo = styled.img`
  width: 380px;
  height: 194px;
  @media (max-width: 500px) {
    width: 203px;
    height: 118px;
  }
`;

const CaixasBanner = styled.img`
  width: 441px;
  height: 314px;
  position: absolute;
  left: 0;
  top: 3rem;
  @media (max-width: 1216px) {
    width: 300px;
    height: 300px;
    top: 5rem;
  }
  @media (max-width: 900px) {
    width: 250px;
    height: 250px;
    top: 7rem;
  }
  @media (max-width: 500px) {
    top: 7rem;
    width: 300px;
    height: 220px;
  }
`;
const Header = styled.div<{bannerBox?: boolean, confirm?: boolean}>`
  background-color: ${props => props.confirm ? '#38BD4A' : '#028352'};
  width: 100%;
  min-height: 284px;
  border-radius: 0 0 200px 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 800px){
    border-radius: 0 0 180px 70px;
    height: ${props => props.bannerBox ? '200px' : ''};
    min-height: ${props => props.bannerBox ? '' : '220px'};
  }
`;
const HeaderBox = styled.div<{bannerBox?: boolean, confirm?: boolean}>`
  background-color: ${props => props.confirm ? '#FFFFFF' : '#4db358'};
  width: 100%;
  min-height: 234px;
  border-radius: 0 0 250px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px){
    border-radius: 0 0 180px 70px;
    height: ${props => props.bannerBox ? '80px' : ''};
    min-height: ${props => props.bannerBox ? '' : '180px'};
  }
`;
