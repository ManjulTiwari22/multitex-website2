import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background: #f9f9f9;
  overflow: hidden;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #2C2478;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const Description = styled.p`
  margin-bottom: 2rem;
  color: #555;
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const MarqueeContent = styled.div`
  display: flex;
  gap: 3rem;
  animation: ${scroll} 40s linear infinite;
  width: max-content;
`;

const ClientLogo = styled.img`
  height: 60px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;

function Clients() {
  const logos = [
    '/assets/clients/1.png',
    '/assets/clients/2.png',
    '/assets/clients/3.png',
    '/assets/clients/4.png',
    '/assets/clients/5.png',
    '/assets/clients/6.png',
    '/assets/clients/7.png',
    '/assets/clients/8.png',
    '/assets/clients/9.png',
    '/assets/clients/10.png',
    '/assets/clients/11.png',
    '/assets/clients/12.png',
    '/assets/clients/13.png',
    '/assets/clients/14.png',
    '/assets/clients/15.png',
    '/assets/clients/16.png',
    '/assets/clients/17.png',
    '/assets/clients/18.png',
    '/assets/clients/19.png',
    '/assets/clients/20.png',
    '/assets/clients/21.png',
    '/assets/clients/22.png',
    '/assets/clients/23.png',
    '/assets/clients/24.png',
    '/assets/clients/25.png',
    '/assets/clients/26.png',
    '/assets/clients/27.png',
    '/assets/clients/28.png',
    '/assets/clients/29.png',
    '/assets/clients/30.png',
    '/assets/clients/31.png',
    '/assets/clients/32.png',
    '/assets/clients/33.png',
  ];

  return (
    <Container>
      <Heading>Our Clients</Heading>
      <Description>
        Our global clients include ONGC, Reliance, IOCL, BPCL, and many more leading energy companies.
      </Description>

      <MarqueeWrapper>
        <MarqueeContent>
          {[...logos, ...logos].map((src, index) => (
            <ClientLogo key={index} src={src} alt={`Client logo ${index + 1}`} />
          ))}
        </MarqueeContent>
      </MarqueeWrapper>
    </Container>
  );
}

export default Clients;
