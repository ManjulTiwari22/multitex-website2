import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  75% { transform: rotate(1deg); }
`;

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: ${({ theme }) => (theme === 'dark' ? '#121212' : '#ffffff')};
  color: ${({ theme }) => (theme === 'dark' ? '#f0f0f0' : '#333')};
  animation: ${fadeIn} 0.8s ease;
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#2C2478')};
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 300px;
  max-width: 100%;
  margin: 2rem auto;
  animation: ${wiggle} 2.5s infinite ease-in-out;
`;

const Message = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const Bold = styled.strong`
  font-weight: 700;
`;

const RedirectText = styled.p`
  font-weight: bold;
  color: ${({ theme }) => (theme === 'dark' ? '#90caf9' : '#2C2478')};
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => (theme === 'dark' ? '#2C2478' : '#2C2478')};
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => (theme === 'dark' ? '#3e3695' : '#423c7a')};
    transform: scale(1.05);
  }
`;

function NotFound() {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(7);

  // Detect theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? 'dark' : 'light';

  // Countdown and redirect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate('/');
    }, 7000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <Wrapper theme={theme}>
      <Content>
        <Title theme={theme}>404</Title>
        <Image
          src="/public/assets/images/404-caveman.webp"
          alt="Caveman cut cable"
        />
        <Message>
          <Bold>Whoooops, OUR BAD...</Bold><br />
          The page you requested was not found, and we have a fine guess why.
          If you typed the URL directly, check spelling. If you followed a link, it may be outdated.
        </Message>
        <RedirectText theme={theme}>
          Redirecting you to Home Page in {secondsLeft} seconds.
        </RedirectText>
        <Button theme={theme} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Content>
    </Wrapper>
  );
}

export default NotFound;
