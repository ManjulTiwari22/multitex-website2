import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem;
  background-color: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  max-width: 1000px;
  margin: 2rem auto;
  text-align: center;
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

const ProductImage = styled.div`
  height: 120px;
  background-color: #eaeaea;
  border-radius: 8px;
  margin-bottom: 1rem;
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
        <ProductImage src="/assets/filtration.jpg" alt="Filtration & Separation Equipment" />
          <ProductTitle>Filtration & Separation Equipment</ProductTitle>
          <ProductDesc>Advanced filtration and separation solutions tailored to industry standards.</ProductDesc>
        </ProductCard>
        <ProductCard>
          <ProductImage />
          <ProductTitle>Oil & Gas Equipment & Skids Packages</ProductTitle>
          <ProductDesc>Comprehensive skid packages and equipment for the Oil & Gas sector.</ProductDesc>
        </ProductCard>
        <ProductCard>
          <ProductImage />
          <ProductTitle>Power Plant Equipment Supplier</ProductTitle>
          <ProductDesc>Specialized equipment and solutions for power generation industries.</ProductDesc>
        </ProductCard>
        <ProductCard>
          <ProductImage />
          <ProductTitle>Mechanical - PV & Heat Exchanger Division</ProductTitle>
          <ProductDesc>Pressure vessels and heat exchangers designed for optimal performance.</ProductDesc>
        </ProductCard>
        <ProductCard>
          <ProductImage />
          <ProductTitle>Pipeline Division</ProductTitle>
          <ProductDesc>Pipeline solutions ensuring efficiency and reliability in operations.</ProductDesc>
        </ProductCard>
      </ProductGrid>
    </Container>
  );
}

export default Products;
