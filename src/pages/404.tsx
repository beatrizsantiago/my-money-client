import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  width: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  margin-top: 8px;
  text-align: center;
`;

const Button = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  padding: 12px 16px;
  border: none;
  border-radius: 4px;
  margin-top: 32px;
  color: #fff;
  background-color: var(--dark-green);
  cursor: pointer;
`;

const Image = styled.img`
  width: 30%;
  @media (max-width: 1200px) {
    width: 50%;
  }
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
`;

const NotFoundErrorPage = () => (
  <Container>
    <Image
      src="/assets/not_found_error.svg"
      alt="Página não encontrada"
    />
    <Subtitle>
      Desculpe, a página que você está procurando não existe.
    </Subtitle>
    <Button href="/">
      Voltar para a página inicial
    </Button>
  </Container>
);

export default NotFoundErrorPage;
