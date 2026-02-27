import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #7C8363;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    margin-bottom: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    color: #666;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }

  .qrcode {
    max-width: 120px;
  }

  .info {
    line-height: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .highlight {
    font-weight: 600;
  }
`;
