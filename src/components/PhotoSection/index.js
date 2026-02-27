import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {
  const renderYoutubeVideo = () => {
    return (
      // <iframe
      //   width="360"
      //   height="640"
      //   src="https://www.youtube.com/embed/HuP2wVvdGIo?si=xHN5dbwjTG2YQ1eA"
      //   title="TD &amp; PA"
      //   frameborder="0"
      //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      //   allowfullscreen
      // ></iframe>

      <iframe width="500" height="315" src="https://www.youtube.com/embed/HuP2wVvdGIo?si=xHN5dbwjTG2YQ1eA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    );
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Ảnh của chúng mình</h2>
            </div>
          </div>

          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">{renderYoutubeVideo()}</div>

          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
