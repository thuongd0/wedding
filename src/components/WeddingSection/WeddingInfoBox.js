import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, date, time, address, description, mapLink }) {
  return (
    <div className="col-md-4 col-sm-12 text-center" >
      <div className="event-wrap">
        <h3>{title}</h3>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span>{time}</span>
        </div>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span>{date}</span>
        </div>
        <div className="event-col">
          <i className="icon-location-pin"></i>
          <span>{address}</span>
        </div>
        {description && (
          <div className="event-col">
            <span dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )}

        {
          mapLink &&
          <a href={mapLink} style={{
            color: '#7C8363',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '14px 30px',
            borderRadius: '100px',
            transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
            textDecoration: 'none',
            fontWeight: '600',
            marginTop: '30px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            zIndex: '100 !important',
            cursor: 'pointer'
          }} target="_blank">Xem bản đồ</a>
        }

      </div>
    </div >
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
  mapLink: string.isRequired,
};

export default React.memo(WeddingInfoBox);
