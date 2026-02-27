import { css } from '@emotion/core';
import Background from '@assets/images/bg-wedding.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70vh;
  color: #fff !important;

  .bismillah {
    color: #fff !important;
    font-size: 16px !important;
    font-family: sans-serif;
  }

  .sub-title {
    color: #fff !important;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500 !important;

    @media screen and (max-width: 400px) {
      font-size: 13px !important;
    }
  }

  .text__live {
    text-align: center;
    margin-top: 24px;
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite;
  margin-top: -8px;
  border: none;

  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500px;
    border-radius: 24px;
    background: #7C8363;
    padding: 10px 24px;
    transition: all 0.3s ease;

    &:hover {
      background: #5a5f48;
      transform: scale(1.05);
    }
  }

  i {
    margin-right: 4px;
  }

  img {
    max-width: 28px;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;
