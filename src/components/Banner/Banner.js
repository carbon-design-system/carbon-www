import React from 'react';
import { Button } from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';

import {
  banner,
  bannerText,
  bannerHeading,
  bannerDetails,
  buttonBanner,
} from './banner.module.scss';

const Banner = () => {
  return (
    <div aria-label="banner" className={banner}>
      <p className={bannerText}>
        <strong className={bannerHeading}>
          A new web experience is coming!
        </strong>
        <span className={bannerDetails}>
          The v1 Carbon platform v1 is now available in public beta.
        </span>
      </p>
      <Button
        href="https://next.carbondesignsystem.com"
        className={buttonBanner}
        kind="ghost"
        renderIcon={ArrowRight}>
        Try the Carbon Platform
      </Button>
    </div>
  );
};

export default Banner;
