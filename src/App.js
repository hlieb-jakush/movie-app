import React from 'react'
import Header from './components/Header/Header'
import SearchSectionContainer from './components/SearchSection/SearchSectionContainer'
import SliderSectionContainer from './components/SliderSection/SliderSectionContainer'
import logo from './assets/icons/logo.svg'

function App() {
  return (
    <>
      <Header icon={logo} title='Movie App' />
      <Route exact path='/'>
        <SearchSectionContainer />
        <SliderSectionContainer />
      </Route>
      <Route path='/profile'>
        <ProfileSectionContainer />
      </Route>
    </>
  );
}

const mapStateToProps = (state) => ({
  name: getProfileName(state),
  favorite: getProfileFavorite(state),
  history: getProfileHistory(state)
})

export default connect(mapStateToProps, { getProfileNameThunk, getFavoriteListThunk, setFavoriteListThunk, getHistoryListThunk, setHistoryListThunk })(App);