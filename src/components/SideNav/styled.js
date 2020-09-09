import styled from "styled-components";

export const Hamburker = styled.div`
  background: #fff;
  color: #707070;
  width: 255px !important;
  box-shadow: 1px 3px 8px #aaa;
  // left: -255px;
  height: 100%;
  display: block;
  z-index: 999;
  position: fixed;

  @media screen and (max-width: 480px) {
    width: ${(props) => props.animateNav} !important;
    transition: 0.1s;
  }
  @media screen and (max-width: 1680px) {
    // width: 235px !important;
  }
`;
export const HamburkerNone = styled.div`
  display: block;

  @media screen and (max-width: 480px) {
    transition: 0.2s;
    display: ${(props) => props.display};
  }
`;

export const SelectBot = styled.div`
  display: ${(props) => (props.select ? "block" : "none")};
`;

export const SelectBotWidth = styled.div`
  height: ${(props) => (props.selectWidth ? "120px" : "0")};
  transition: 0.1s;
`;
