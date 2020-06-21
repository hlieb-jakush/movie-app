import React from 'react'
import Header from './components/Header/Header'
import SearchSectionContainer from './components/SearchSection/SearchSectionContainer'
import SliderSectionContainer from './components/SliderSection/SliderSectionContainer'
import logo from './assets/icons/logo.svg'

function App() {
  return (
    <>
      <Header icon={logo} title='Movie App' />
      <SearchSectionContainer />
      <SliderSectionContainer />
    </>
  );
}

export default App;