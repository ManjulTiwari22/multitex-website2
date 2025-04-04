import styled from 'styled-components';

// You can also include this in your index.html or global CSS:
// <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

const Container = styled.div`
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 1000px;
  margin: 2rem auto;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #003366;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-height: 160px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    max-height: 120px;
  }
`;

const ProductTitle = styled.h3`
  font-size: 1.2rem;
  color: #00509e;
  margin-bottom: 0.5rem;
`;

const ProductDesc = styled.p`
  color: #555;
  font-size: 0.95rem;
`;

function Products() {
  return (
    <Container>
      <Heading>Our Products</Heading>
      <ProductGrid>
        <ProductCard>
          <ProductImage src="/assets/filtration.png" alt="Filtration & Separation Equipment" />
          <ProductTitle>Filtration & Separation Equipment</ProductTitle>
          <ProductDesc>Advanced filtration and separation solutions tailored to industry standards.</ProductDesc>
        </ProductCard>

        <ProductCard>
          <ProductImage src="/assets/oil-gas.png" alt="Oil & Gas Equipment & Skids Packages" />
          <ProductTitle>Oil & Gas Equipment & Skids Packages</ProductTitle>
          <ProductDesc>Comprehensive skid packages and equipment for the Oil & Gas sector.</ProductDesc>
        </ProductCard>

        <ProductCard>
          <ProductImage src="/assets/power-plant.png" alt="Power Plant Equipment Supplier" />
          <ProductTitle>Power Plant Equipment Supplier</ProductTitle>
          <ProductDesc>Specialized equipment and solutions for power generation industries.</ProductDesc>
        </ProductCard>

        <ProductCard>
          <ProductImage src="/assets/heat-exchanger.png" alt="Mechanical - PV & Heat Exchanger Division" />
          <ProductTitle>Mechanical - PV & Heat Exchanger Division</ProductTitle>
          <ProductDesc>Pressure vessels and heat exchangers designed for optimal performance.</ProductDesc>
        </ProductCard>

        <ProductCard>
          <ProductImage src="/assets/pipeline.png" alt="Pipeline Division" />
          <ProductTitle>Pipeline Division</ProductTitle>
          <ProductDesc>Pipeline solutions ensuring efficiency and reliability in operations.</ProductDesc>
        </ProductCard>
      </ProductGrid>
    </Container>
  );
}

export default Products;
