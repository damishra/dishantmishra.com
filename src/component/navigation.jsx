import { css } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PageLink = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        css={css`
          text-decoration: none;
          color: #ffffff;
          user-select: none;
          font-size: 1rem;

          &:hover {
            color: #ff0062;
            cursor: pointer;
          }
        `}
        style={{
          color: router.pathname === href ? '#ff0062' : '#ffffff',
        }}>
        ${children}
      </a>
    </Link>
  );
};

const ExternalLink = ({ href, children }) => (
  <a
    target='_blank'
    href={href}
    css={css`
      width: 73px;
      height: 23px;
      line-height: 23px;
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
    `}>
    {children}
  </a>
);

const Navigation = () => {
  const externals = [
    { path: 'https://github.com/damishra', label: 'github' },
    { path: 'https://linkedin.com/in/damishra', label: 'linkedin' },
    { path: '/documents/resume.pdf', label: 'resume' },
  ];
  const internals = [
    { path: '/', label: 'home' },
    { path: '/portfolio', label: 'portfolio' },
    { path: '/about', label: 'about' },
    { path: '/contact', label: 'contact' },
  ];
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
            {externals.map((value, key) => (
              <ExternalLink key={key} href={value.path}>
                {value.label}
              </ExternalLink>
            ))}
          </section>
          <div />
          <section
            css={css`
              display: grid;
              grid-template-columns: auto auto auto auto;
              gap: 1rem;
            `}>
            {internals.map((value, key) => (
              <PageLink key={key} href={value.path}>
                {value.label}
              </PageLink>
            ))}
          </section>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
