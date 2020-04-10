import React from 'react';

import '../global.css';

import FirstFold from './firstFold/FirstFold';
import AllApps from './allApps/AllApps';
import Footer from './footer/Footer';

export default function Home() {
  return (
    <div className="container">
      <FirstFold />
      <AllApps />
      <Footer />
    </div>
  );
}
