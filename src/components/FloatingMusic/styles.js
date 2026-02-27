import { css } from '@emotion/core';

export const styMusicFloating = css`
  .hide {
    display: none;
  }

  .music-container {
    position: fixed;
    top: 24px;
    width: 40px;
    height: 40px;
    z-index: 999;
    right: 24px;
    animation: pulse 2s ease infinite;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: black;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    &.paused::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 2px;
      background-color: #fff;
      transform: translate(-50%, -50%) rotate(45deg);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
      border-radius: 4px;
      z-index: 1000;
      border: none;
    }
  }

  @media screen and (max-width: 420px) {
    .music-container {
      width: 40px;
      height: 40px;
      right: 20px;
    }
  }

  @media screen and (max-width: 360px) {
    .music-container {
      width: 30px;
      height: 30px;
      right: 20px;
    }
  }


`;

export const styWrapperModal = css`
  .modal-dialog {
    display: flex;
    justify-content: center;
  }

  .modal {
    display: block;
    width: 100%;
    background: rgba(44, 62, 80, 0.8);
  }

  .modal-content {
    width: 90%;
  }

  .sub-title {
    text-align: center;
    font-size: 20px;
  }

  .title {
    font-family: 'Cookie', cursive;
    text-align: center;
    font-size: 50px;
    margin-bottom: 0px;
  }
`;
