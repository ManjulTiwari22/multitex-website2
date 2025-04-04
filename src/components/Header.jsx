import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Nav = styled.nav`
  background: linear-gradient(90deg,rgb(255, 255, 255), #2C2478);
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  animation: ${slideDown} 0.8s ease-out;
  position: relative;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
`;

const BrandText = styled.span`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;

  &:hover {
    color: #ffd700;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.2rem;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: #2C2478;
    width: 100%;
    padding: 1rem 0;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const NavLink = styled(Link)`
  color: white;
  font-weight: 600;
  padding-bottom: 4px;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Brand to="/">
        <Logo src="/assets/logo.png" alt="Multitex Logo" />
      </Brand>
      <Hamburger onClick={() => setOpen(!open)}>
        <div style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
        <div style={{ opacity: open ? 0 : 1 }} />
        <div style={{ transform: open ? 'rotate(-45deg) translate(6px, -6px)' : 'none' }} />
      </Hamburger>
      <NavLinks style={{ display: open ? 'flex' : '' }}>
  <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
  <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
  <NavLink to="/services" onClick={() => setOpen(false)}>Services</NavLink>
  <NavLink to="/clients" onClick={() => setOpen(false)}>Clients</NavLink>
  <NavLink to="/careers" onClick={() => setOpen(false)}>Careers</NavLink>
  <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
</NavLinks>

    </Nav>
  );
}

export default Header;
