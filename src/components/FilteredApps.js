import React from 'react';

import '../global.css';

import FirstFold from './firstFold/FirstFold';
import FilteredApps from './filteredApps/FilteredApps';
import Footer from './footer/Footer';

export default function Topics() {
  return (
    <>
      <FirstFold />
      <FilteredApps />
      <Footer />
    </>
  );
}
