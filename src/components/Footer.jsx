import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2C2478;
  color: white;
  text-align: center;
  padding: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Multitex Group. All Rights Reserved.
    </FooterContainer>
  );
}

export default Footer;