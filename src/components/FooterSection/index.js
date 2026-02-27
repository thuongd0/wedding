import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import ImgQRAnh from '@assets/images/QR-PhuongAnh.jpeg';
import ImgQRThuong from '@assets/images/QR-Thuong.jpeg';

function FooterSection({ }) {
  const onCopy = (value) => () => {
    navigator.clipboard.writeText(value);
    alert('Sao chép thành công!');
  };

  return (
    <Fragment>
      <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Gửi lời chúc đến chúng mình</h2>
          </div>
          <div className="row">
            <div onClick={onCopy('0691000349245')} style={{ cursor: 'pointer' }} className="col-md-6  text-center">
              <img src={ImgQRThuong} alt="icon" className="qrcode" />
              <p className="info">Vietcombank</p>
              <p className="info highlight">
                <i className="icon-copy"></i> 0691000349245
              </p>
              <p className="info highlight">DO NHU THUONG</p>
            </div>

            <div onClick={onCopy('0984715617')} style={{ cursor: 'pointer' }} className="col-md-6  text-center">
              <img src={ImgQRAnh} alt="icon" className="qrcode" />
              <p className="info">VP Bank</p>
              <p className="info highlight">
                {' '}
                <i className="icon-copy"></i> 0984715617
              </p>
              <p className="info highlight">VU THI PHUONG ANH</p>
            </div>
          </div>
        </div>
      </div>

      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2026 Thương Đỗ & Phương Anh Wedding. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
