import React, { useState, Fragment } from 'react';
import { object } from 'prop-types';
import getQueryValue from '@helpers/getQueryValue';
import { useScrollReveal } from '@hooks/useScrollReveal';
/**
 * List of local components
 */
import MainLayout from '@components/Layout';
import WelcomeSection from '@components/WelcomeSection';
import HelloSection from '@components/HelloSection';
import WeddingSection from '@components/WeddingSection';
import StorySection from '@components/StorySection';
import PhotoSection from '@components/PhotoSection/Loadable';
import WishesSection from '@components/WishesSection';
import ConfirmationSection from '@components/ConfirmationSection';
import FooterSection from '@components/FooterSection';
import FloatingMusic from '@components/FloatingMusic/Loadable';

function Home({ location }) {
  const guestName = decodeURIComponent(getQueryValue(location, 'to') || '');
  const type = decodeURIComponent(getQueryValue(location, 'type') || '');
  const isAnonymGuest = !guestName;

  const [showDetailContent, setShowDetailContent] = useState(false);
  const revealRef = useScrollReveal();

  const handleClickDetail = () => {
    setShowDetailContent(true);
  };

  const renderDetailContent = () => {
    // if (!showDetailContent) {
    //   return null;
    // }
    return (
      <Fragment>
        <div ref={revealRef} className="animate-box"><HelloSection type={type} /></div>
        <div ref={revealRef} className="animate-box"><WeddingSection /></div>
        <div ref={revealRef} className="animate-box"><PhotoSection /></div>
        <div ref={revealRef} className="animate-box"><ConfirmationSection guestName={guestName} /></div>
        <FooterSection />
      </Fragment>
    );
  };

  return (
    <MainLayout>
      <WelcomeSection
        guestName={guestName}
        isAnonymGuest={isAnonymGuest}
        type={type}
        location={location}
        onClickDetail={handleClickDetail}
      />
      {renderDetailContent()}
      <FloatingMusic />
    </MainLayout>
  );
}

Home.propTypes = {
  location: object.isRequired,
};

export default Home;
