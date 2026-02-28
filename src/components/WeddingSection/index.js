import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-12" >
          <WeddingInfoBox
            title={`Tư gia nhà Trai`}
            time="16:00"
            date="Thứ bảy, 21 Tháng 3, 2026"
            address={'Thôn 2, Vũ Bản, Bình Lục, Hà Nam'}
            mapLink="https://maps.app.goo.gl/U2b3NJ8UcddHKpc99"
          />
          <WeddingInfoBox
            title={`Tư gia Nhà gái`}
            time="16:00"
            date="Thứ bảy, 21 Tháng 3, 2026"
            address={'Ngõ 85, Thôn Cầu, Dĩnh Trì, TP Bắc Giang'}
            mapLink="https://maps.app.goo.gl/4kbABuxp25eTdfwr9"
          />
          <WeddingInfoBox
            title={`Lễ Vu Quy`}
            time="11:00"
            date="Chủ nhật, 22 Tháng 3, 2026"
            address={'Thôn 2, Vũ Bản, Bình Lục, Hà Nam'}
            mapLink="https://maps.app.goo.gl/U2b3NJ8UcddHKpc99"
          />
        </div>
        {/* <ButtonLive /> */}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div
        id="fh5co-event"
        css={styWrapper}
        style={{
          float: 'unset',
        }}
      >
        <div className="overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="sub-title sub-title__wedding">Mời bạn tham dự</span>
              <h2 className="main-font main-font__wedding">Bữa tiệc thân mật</h2>
              <span className="sub-title sub-title__wedding">chung vui cùng gia đình chúng mình!</span>
            </div>
          </div>
          <div className="row" >{renderGuestInfo()}</div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
