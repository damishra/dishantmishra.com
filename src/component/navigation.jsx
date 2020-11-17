import { css } from '@emotion/react';
import Link from 'next/link';
import { useState } from 'react';

const externalLink = css`
  width: 75px;
  height: 25px;
  line-height: 25px;
  font-size: 0.8rem;
  color: #ff0062;
  background-color: #000000;
  border: 1px solid #ff0062;
  display: block;
  text-align: center;
  border-radius: 5px;
  user-select: none;
  text-decoration: none;

  &:hover {
    background-color: #ff0062;
    color: #000000;
    cursor: pointer;
  }
`;

const pageLink = css`
  text-decoration: none;
  color: #ffffff;
  user-select: none;
  font-size: 1rem;

  &:hover {
    color: #ff0062;
    cursor: pointer;
  }
`;

const Navigation = ({ theme }) => {
  let [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <nav
        css={css`
          position: fixed;
          top: 0;
          width: 100vw;
        `}>
        <div
          css={css`
            min-width: 960px;
            width: 50vw;
            max-width: 1920px;
            margin: auto;
            height: 75px;
            line-height: 75px;
            display: grid;
            grid-template-columns: auto auto 1fr auto;
            gap: 1rem;
            background-color: #000000;
          `}>
          <section
            css={css`
              display: grid;
              grid-template-columns: auto auto;
              gap: 5px;
            `}>
            <img
              src='/images/logo.gif'
              css={css`
                height: 1rem;
                width: 1rem;
                margin-top: calc((77px - 1rem) / 2);
              `}
            />
            <span
              css={css`
                font-weight: 700;
              `}>
              Dishant Mishra
            </span>
          </section>
          <section
            css={css`
              display: grid;
              grid-template-columns: auto auto auto;
              gap: 0.5rem;
              margin-top: 25px;
            `}>
            <a
              target='_blank'
              href='https://github.com/damishra'
              css={externalLink}>
              github
            </a>
            <a
              target='_blank'
              href='https://linkedin.com/in/damishra'
              css={externalLink}>
              linkedin
            </a>
            <a
              target='_blank'
              href='/documents/resume.pdf'
              css={externalLink}
              download>
              resume
            </a>
          </section>
          <div />
          <section
            css={css`
              display: grid;
              grid-template-columns: auto auto auto auto;
              gap: 1rem;
            `}>
            <Link href='/'>
              <a
                css={pageLink}
                style={{
                  color: currentPage === 'home' ? '#ff0062' : '#ffffff',
                }}
                onClick={() => setCurrentPage('home')}>
                $home
              </a>
            </Link>
            <Link href='/portfolio'>
              <a
                css={pageLink}
                style={{
                  color: currentPage === 'portfolio' ? '#ff0062' : '#ffffff',
                }}
                onClick={() => setCurrentPage('portfolio')}>
                $portfolio
              </a>
            </Link>
            <Link href='/about'>
              <a
                css={pageLink}
                style={{
                  color: currentPage === 'about' ? '#ff0062' : '#ffffff',
                }}
                onClick={() => setCurrentPage('about')}>
                $about
              </a>
            </Link>
            <Link href='contact'>
              <a
                css={pageLink}
                style={{
                  color: currentPage === 'contact' ? '#ff0062' : '#ffffff',
                }}
                onClick={() => setCurrentPage('contact')}>
                $contact
              </a>
            </Link>
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
