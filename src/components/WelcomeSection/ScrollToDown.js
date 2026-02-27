import React from 'react';

import { styScrollWrapper } from './styles';
import { bool, func } from 'prop-types';

function ClickToSeeDetail({ loading, onClick }) {
  return (
    <div css={styScrollWrapper}>
      <section
        id="scroll"
        className="scroll__icon"
        onClick={onClick}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
      >
        <div className="button">
          <span></span>
        </div>
        <span className="text">{loading ? 'Đang tải thông tin...' : 'Chạm nhẹ để xem chi tiết'}</span>
      </section>
    </div>
  );
}

ClickToSeeDetail.propTypes = {
  loading: bool.isRequired,
  onClick: func.isRequired,
};

export default ClickToSeeDetail;
