import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
`;

const Highlights = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const HighlightItem = styled.li`
  background-color: #003366;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem;
  flex: 1 1 200px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

function About() {
  return (
    <Container>
      <Heading>About Multitex Group</Heading>
      <Text>
        Multitex Group is a trusted global leader providing bespoke engineering solutions across diverse sectors, ensuring excellence, innovation, and sustainability. We collaborate with businesses worldwide, helping them achieve remarkable results.
      </Text>
      <Highlights>
        <HighlightItem>Global Presence 🌍</HighlightItem>
        <HighlightItem>Customized Solutions ⚙️</HighlightItem>
        <HighlightItem>Industry Expertise 🏭</HighlightItem>
        <HighlightItem>Sustainable Practices ♻️</HighlightItem>
      </Highlights>
    </Container>
  );
}

export default About;