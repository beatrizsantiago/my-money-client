import '@/common/styles/globals.css';
import Navbar from '@/common/components/Navbar';
import styled from 'styled-components';
import type { AppProps } from 'next/app';

const Container = styled.div`
  padding: 24px;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
