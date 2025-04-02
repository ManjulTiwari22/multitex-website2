import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 0.5rem;
`;

const SubHeading = styled.h3`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.8;
  margin: 0 auto;
  max-width: 800px;
`;

const Highlights = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const HighlightItem = styled.li`
  background-color: #003366;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  margin: 0.5rem;
  flex: 1 1 200px;
  transition: transform 0.3s;
  font-size: 1rem;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IndustrySection = styled.div`
  margin-top: 3rem;
`;

const IndustryHeading = styled.h4`
  font-size: 1.5rem;
  color: #003366;
  margin-bottom: 1rem;
`;

const Industries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Industry = styled.div`
  background-color: #e3e9f0;
  color: #003366;
  padding: 0.8rem 1.2rem;
  border-radius: 20px;
  font-size: 0.95rem;
`;

function About() {
  return (
    <Container>
      <Heading>About Multitex Group</Heading>
      <SubHeading>Engineering Solutions with Global Reach</SubHeading>

      <Text>
        Multitex Group is a global leader in custom-engineered filtration and separation solutions.
        With a legacy of innovation, quality, and trust, we serve a wide array of industries including oil & gas,
        power generation, water treatment, and process industries. Our state-of-the-art facilities and expert teams
        ensure we meet the most demanding standards across the globe.
        <br /><br />
        Our mission is to empower industries with sustainable and performance-driven technologies while maintaining
        a strong focus on customer satisfaction, integrity, and excellence.
      </Text>

      <Highlights>
        <HighlightItem>🌍 Global Presence in 30+ Countries</HighlightItem>
        <HighlightItem>⚙️ Tailor-Made Filtration Solutions</HighlightItem>
        <HighlightItem>🏭 3 Manufacturing Units in India</HighlightItem>
        <HighlightItem>♻️ Focus on Sustainable Engineering</HighlightItem>
      </Highlights>

      <IndustrySection>
        <IndustryHeading>Key Industries We Serve</IndustryHeading>
        <Industries>
          <Industry>Oil & Gas</Industry>
          <Industry>Petrochemicals</Industry>
          <Industry>Power Generation</Industry>
          <Industry>Water & Wastewater</Industry>
          <Industry>Steel & Metal</Industry>
        </Industries>
      </IndustrySection>
    </Container>
  );
}

export default About;
