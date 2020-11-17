import '../base.global.css';
import Head from 'next/head';

const Root = ({ Component, ...pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='description' content="Dishant Mishra's portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
