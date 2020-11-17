import '../base.global.css';
import Head from 'next/head';
import Navigation from '../component/navigation';

const Root = ({ Component, ...pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='description' content="Dishant Mishra's portfolio" />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600;800&family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
};

export default Root;
