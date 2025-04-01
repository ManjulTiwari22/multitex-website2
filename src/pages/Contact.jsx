import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

function Contact() {
  return (
    <Container>
      <h2>Contact Us</h2>
<p>Email: info@multitex-group.com</p>
<p>Phone: +91-22-1234-5678</p>
<p>Address: Mumbai, India</p>
    </Container>
  );
}

export default Contact;