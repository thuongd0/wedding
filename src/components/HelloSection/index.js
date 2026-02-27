import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/bride1.jpeg';
import Groom from '@assets/images/groom.jpeg';

import { styWrapper } from './styles';

function HelloSection({ }) {
  const finalSubtitle = 'Hanoi, 30.09.2023';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Enjoy this moment</h2>
              {/* <h3 className="sub-title hs">{finalSubtitle}</h3> */}
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Thương Đo</h3>
                <p className="parent-name parent-name__top">
                  Từ ngày gặp em, đời bỗng nở hoa,
                  <br />
                  Nắm tay em bước, chung một mái nhà.
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Vũ Thị Phương Anh</h3>
                <p className="parent-name">
                  Duyên nợ từ đây, đôi ta chung lối,
                  <br />
                  Hạnh phúc đong đầy, chẳng đổi thay lòng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
