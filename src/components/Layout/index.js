import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/logo.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

// const IMAGE_URL = `https://github.com/minhchienwikipedia/tuananh-hoailinh/blob/gh-pages/static/bg-welcome-809077a12bd83875c2c21399840b5880.jpg?raw=true`;
const META_DESCRIPTION = `Thương Đỗ ❤️ Phương Anh Wedding`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Thương Đỗ ❤️ Phương Anh Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Thương Đỗ & Phương Anh" />
        <meta property="og:image" content={'/gallery-1.5.jpg'} />
        <meta property="og:site_name" content="The Wedding of Thương Đỗ & Phương Anh" />
        <meta property="og:description" content={META_DESCRIPTION} />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Dancing Script" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
