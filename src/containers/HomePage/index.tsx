import Head from 'next/head';

import MainContainer from '../../components/MainContainer';
import Example from '../../components/Example';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="keywords" content="exemplo, exemplo" />
      </Head>
      <MainContainer>
        <Example />
      </MainContainer>
    </>
  );
}
