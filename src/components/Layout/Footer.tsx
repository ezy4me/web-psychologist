import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; 2024</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #252525;
  padding: 1rem;
  text-align: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

`;

const FooterContent = styled.div`
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #ececec;
`;

export default Footer;
