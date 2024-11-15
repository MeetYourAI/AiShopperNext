import React from 'react';

import FooterBottom from './FooterBottom';
import FooterMain from './FooterMain';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900">
      <div className="container pt-16">
        <FooterMain />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
