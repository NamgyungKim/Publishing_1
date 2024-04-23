import React from "react";
import styled from "@emotion/styled";

const Footer: React.FC = () => {
  return (
    <FooterWrap>
      <p>
        <span>© 2035 by Business Name. Made with</span>
        <a> Wix Studio™</a>
      </p>
    </FooterWrap>
  );
};

const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  font-size: 14px;
  padding: 60px;
  text-align: center;
  a {
    margin-left: 4px;
    text-decoration: underline;
  }
`;
export default Footer;
