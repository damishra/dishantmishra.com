import '../base.global.css';
import Head from 'next/head';
import Navigation from '../components/navigation';
import { Light, Dark } from '../theme';
import { ThemeProvider, Global, css } from '@emotion/react';
import { useEffect, useState } from 'react';

const Root = ({ Component, ...pageProps }) => {
  let [dark, setTheme] = useState(true);
  useEffect(() => {
    const last = localStorage.getItem('theme');
    setTheme(last === 'dark' ? true : false);
  });
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          type='image/png'
          href={`/logos/${dark ? 'dark' : 'light'}16.png`}
        />
        <meta name='description' content="Dishant Mishra's portfolio" />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider theme={dark ? Dark : Light}>
        <Global
          styles={css`
            html {
              color: ${dark ? Dark.primaryText : Light.primaryText};
              background-color: ${dark
                ? Dark.primaryBackground
                : Light.primaryBackground};
            }

            * {
              transition: color 100ms ease-in-out,
                background-color 100ms ease-in-out;
            }
          `}
        />
        <Navigation themeState={setTheme} logo={dark} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default Root;
