import styled, { createGlobalStyle } from "styled-components";
import { Responsive } from "./Responsive";

export const NavStyles = styled.nav`
  height: 83px;
  background-color: transparent;
  @media screen and (max-width: 992px), screen and (max-height: 500px) {
    margin-bottom: 0;
    background-color: #000;
    height: 102px;
    background-image: url("../static/img/monstrance-2000w-op.jpg");
    background-size: 30vw;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: 46%;
    border-bottom: 4px solid #8e1b21;
  }
  .fus-branding {
    position: absolute;
    top: -16px;
    left: 16px;
    font-family: "Cinzel", serif;
    font-size: 20px;
  }
  @media screen and (max-width: 992px), screen and (max-height: 500px) {
    nav .fus-branding {
      top: -18px;
      left: 8px;
      font-size: 14px;
    }
  }
  @media screen and (max-width: 600px) {
    .fus-branding {
      display: none;
    }
  }

  nav .button-collapse {
    margin-left: 16px;
    margin-top: 23px;
    color: #fff;
    padding: 8px;
  }
  nav .brand-logo {
    margin-left: 64px;
    margin-top: 30px;
  }
  @media screen and (max-width: 992px) {
    nav .brand-logo {
      margin-left: 0;
    }
  }
  @media screen and (max-width: 992px), screen and (max-height: 500px) {
    nav .brand-logo {
      margin-top: 24px;
    }
  }
  nav .brand-logo img {
    height: 130px;
  }
`;




export const HeroWrapper = styled.div`
  background-image: url("../public/images/monstrance-2000w-op.jpg");
  background-size: 74vw;
  background-repeat: no-repeat;
  background-position-x: 157%;
  background-position-y: 36%;
  //   background-color: #000;
  margin-top: -74px;
  padding-bottom: 0;
  ${Responsive.xxl.standard`
     background-size: 60vw;
    background-position-x: 128%;  `};
  background-position-y: 39%;

  //   ${Responsive.xl.standard`
//     background-image: url("@/images/img/monstrance-2000w-op.jpg");
//     background-position-y: 26%;
//      `};

  //   h1 {
  //     padding-top: 180px;
  //     font-size: 81px;
  //   }
  //   ${Responsive.md.standard`

//     h1 {
//       padding-top: 163px;
//       font-size: 55px;
//     }`};

  //   ${Responsive.xl.standard`
//       {
//       display: none;
//     }`};
`;


export const GlobalStyle = createGlobalStyle`
 h1 {
   font-size: 4rem;
 }
`;
const Container = styled.div`
  text-align: center;
`;



