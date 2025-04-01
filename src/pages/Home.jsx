import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
  color: #003366;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 1.8rem;
  color: #00509e;
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
  background-color: #003366;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: #00509e;
  }
`;

const Section = styled.div`
  margin-top: 2rem;
  text-align: left;
`;

const SectionHeading = styled.h3`
  font-size: 1.6rem;
  color: #003366;
  margin-bottom: 1rem;
`;

const ProductList = styled.ul`
  padding-left: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const Button = styled.a`
  background-color: #003366;
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #00509e;
    transform: scale(1.05);
  }
`;

function Home() {
  return (
    <Container>
      <Heading>Welcome to Multitex Group</Heading>
      <SubHeading>Innovative Engineering Solutions</SubHeading>
      <Text>
        MULTITEX is a leading global design, engineering, and manufacturing company providing technology solutions to sectors such as Oil & Gas, Power, Petrochemicals, Refineries, Pipelines, and Nuclear.
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
          <li><strong>Gas Filters:</strong> Gas filtration solutions up to 0.3 micron particle size.</li>
          <li><strong>Multi Cyclone Scrubbers:</strong> Removal of liquid and dry impurities at various stages.</li>
          <li><strong>Condenser Online Tube Cleaning:</strong> Solutions to prevent fouling and scaling.</li>
        </ProductList>
        <Button href="/products">View More Products</Button>
      </Section>

      <Section>
        <SectionHeading>Packages & Services</SectionHeading>
        <ProductList>
          <li><strong>Gas Sweetening:</strong> Emission reduction and gas monetization strategies.</li>
          <li><strong>Gas Processing:</strong> Expert configurations for hydrocarbon processes.</li>
          <li><strong>Gas Dehydration:</strong> Gas treatment solutions for entrained contaminants.</li>
        </ProductList>
        <Button href="/packages">View More Packages</Button>
      </Section>

      <Button href="/about">Learn More About Us</Button>
    </Container>
  );
}

export default Home;