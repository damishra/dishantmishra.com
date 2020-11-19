import { css } from '@emotion/react';

const Banner = props => {
  return (
    <div
      css={css`
        height: 30vh;
        background-color: #ff0062;
        color: #000000;
        font-weight: 700;
        border-radius: 5px;
        padding: 1rem;
      `}>
      {props.children}
    </div>
  );
};

export default Banner;
