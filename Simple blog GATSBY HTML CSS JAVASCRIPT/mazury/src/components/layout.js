import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)}; /* Poprawiono literówkę z 'marigin' na 'margin' */
          display: inline-block;
          font-style: normal;
        `}
      >
        10 rzeczy, których prawdopodobnie nie wiesz o Mazurach
      </h3>
    </Link>
    <Link
      to={`/about`}
      css={css`
        float: right;
      `}
    >
      Więcej informacji
    </Link>
    {children}
  </div>
);
