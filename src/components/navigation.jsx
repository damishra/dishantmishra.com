import { css, useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ThemeSwitcher = ({ setTheme }) => {
  const theme = useTheme();
  const selectHandler = e => {
    switch (e.target.value) {
      case 'dark':
        setTheme(true);
        break;
      case 'light':
        setTheme(false);
        break;
      default:
        break;
    }
    localStorage.setItem('theme', e.target.value);
    e.target.value = localStorage.getItem('theme');
  };
  return (
    <section>
      <label
        css={css`
          font-size: 0.8rem;
          font-weight: 700;
          margin-right: 0.3rem;
        `}
        htmlFor='theme'>
        Theme:{' '}
      </label>
      <select
        css={css`
          width: 100px;
          height: 25px;
          border-radius: 5px;
          border: none;
          outline: none;
          font-size: 0.8rem;
          appearance: none;
          background-color: ${theme.tertiaryBackground};
          color: ${theme.secondaryText};
          padding: 0 0.3rem;
        `}
        onChange={e => selectHandler(e)}
        id='theme'
        name='theme'>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
      </select>
    </section>
  );
};

const PageLink = ({ children, href }) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        css={css`
          text-decoration: none;
          color: ${theme.primaryText};
          user-select: none;
          font-size: 1rem;
          text-transform: capitalize;

          &:hover {
            color: ${theme.primary};
            cursor: pointer;
          }
        `}
        style={{
          color: router.pathname === href ? theme.primary : theme.primaryText,
        }}>
        {children}
      </a>
    </Link>
  );
};

const ExternalLink = ({ href, children }) => {
  const theme = useTheme();
  return (
    <a
      target='_blank'
      href={href}
      rel='noreferrer'
      css={css`
        width: 73px;
        height: 23px;
        line-height: 23px;
        font-size: 0.8rem;
        color: ${theme.primary};
        background-color: ${theme.primaryBackground};
        border: 1px solid ${theme.primary};
        display: block;
        text-align: center;
        border-radius: 5px;
        user-select: none;
        text-decoration: none;

        &:hover {
          background-color: ${theme.primary};
          color: ${theme.primaryBackground};
          cursor: pointer;
        }
      `}>
      {children}
    </a>
  );
};

const Navigation = ({ themeState, logo }) => {
  const theme = useTheme();
  const externals = [
    { path: 'https://github.com/damishra', label: 'GitHub' },
    { path: 'https://linkedin.com/in/damishra', label: 'LinkedIn' },
    { path: '/documents/resume.pdf', label: 'Resume' },
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
          background-color: ${theme.primaryBackground};
        `}>
        <div
          css={css`
            min-width: 960px;
            width: 50vw;
            max-width: 1920px;
            margin: auto;
            height: 100px;
            line-height: 100px;
            display: grid;
            grid-template-columns: auto auto 1fr auto auto;
            gap: 2rem;
          `}>
          <section
            css={css`
              display: grid;
              grid-template-columns: auto auto;
              gap: 1rem;
            `}>
            <div
              css={css`
                display: grid;
                grid-template-rows: 1fr auto 1fr;
              `}>
              <div />
              {theme.type === 'dark' ? (
                <img
                  src={`/logos/dark32.png`}
                  width={32}
                  height={32}
                  alt='logo belonging to Dishant Mishra'
                />
              ) : (
                <img
                  src={`/logos/light32.png`}
                  width={32}
                  height={32}
                  alt='logo belonging to Dishant Mishra'
                />
              )}
              <div />
            </div>

            <span
              css={css`
                font-weight: 800;
                font-size: 1.2rem;
              `}>
              Dishant Mishra
            </span>
          </section>
          <div
            css={css`
              display: grid;
              grid-template-rows: 1fr auto 1fr;
            `}>
            <div />
            <section
              css={css`
                display: grid;
                grid-template-columns: auto auto auto;
                gap: 0.5rem;
              `}>
              {externals.map((value, key) => (
                <ExternalLink key={key} href={value.path}>
                  {value.label}
                </ExternalLink>
              ))}
            </section>
            <div />
          </div>
          <div />
          <ThemeSwitcher setTheme={themeState} />
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
