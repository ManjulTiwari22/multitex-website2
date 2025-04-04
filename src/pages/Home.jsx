// src/pages/Home.js
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Hero = styled.div`
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 6rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #f1f1f1;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
`;

const Container = styled.div`
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  max-width: 900px;
  margin: 2rem auto;
  text-align: center;
  animation: ${fadeIn} 1s ease;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #2C2478;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 1.8rem;
  color: #2C2478;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const HighlightItem = styled.li`
  background-color: #2C2478;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: rgb(66, 60, 122);
  }
`;

const Section = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const SectionHeading = styled.h3`
  font-size: 1.6rem;
  color: #2C2478;
  margin-bottom: 1rem;
`;

const ProductList = styled.ul`
  padding-left: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const Button = styled.a`
  background-color: #2C2478;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 1rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #423c7a;
    transform: scale(1.05);
  }
`;

function Home() {
  return (
    <>
      <Hero>
        <HeroTitle>Multitex Group</HeroTitle>
        <HeroSubtitle>Innovative Engineering Solutions for a Sustainable Future</HeroSubtitle>
        <ScrollLink to="main-content" smooth={true} duration={600}>
          <Button as="div">Explore More</Button>
        </ScrollLink>
      </Hero>

      <Container id="main-content">
        <Heading>Welcome to Multitex Group</Heading>
        <SubHeading>Innovative Engineering Solutions</SubHeading>
        <Text>
          Multitex Group is a global leader in designing, engineering, and manufacturing high-performance technological systems...
        </Text>

        <Highlights>
          <HighlightItem>Oil & Gas 🔥</HighlightItem>
          <HighlightItem>Power ⚡</HighlightItem>
          <HighlightItem>Petrochemical 🛢️</HighlightItem>
          <HighlightItem>Refineries 🏭</HighlightItem>
          <HighlightItem>Pipelines 🛣️</HighlightItem>
          <HighlightItem>Nuclear ☢️</HighlightItem>
        </Highlights>

        <Section>
          <SectionHeading>Products</SectionHeading>
          <ProductList>
            <li><strong>Gas Filters:</strong> High-efficiency gas filtration systems...</li>
            <li><strong>Multi Cyclone Scrubbers:</strong> Engineered to separate and eliminate liquid droplets...</li>
            <li><strong>Condenser Cleaning Systems:</strong> Intelligent fouling prevention solutions...</li>
          </ProductList>
          <Button href="/products">View More Products</Button>
        </Section>

        <Section>
          <SectionHeading>Packages & Services</SectionHeading>
          <ProductList>
            <li><strong>Gas Sweetening:</strong> Remove H<sub>2</sub>S and CO<sub>2</sub>...</li>
            <li><strong>Gas Processing:</strong> Integrated packages designed to separate and purify...</li>
            <li><strong>Gas Dehydration:</strong> TEG-based systems to remove moisture from gas...</li>
          </ProductList>
          <Button href="/packages">View More Packages</Button>
        </Section>

        <Button href="/about">Learn More About Us</Button>
      </Container>
    </>
  );
}

export default Home;
