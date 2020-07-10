import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/Header/Header'
import SearchSectionContainer from './components/SearchSection/SearchSectionContainer'
import SliderSectionContainer from './components/SliderSection/SliderSectionContainer'
import ProfileSectionContainer from './components/ProfileSection/ProfileSectionContainer'
import { getProfileNameThunk, getFavoriteListThunk, getHistoryListThunk, setFavoriteListThunk, setHistoryListThunk } from './state/thunks'
import { getProfileName, getProfileFavorite, getProfileHistory } from './state/selectors'
import logo from './assets/icons/logo.svg'

function App({ favorite, history, getProfileNameThunk, getFavoriteListThunk, setFavoriteListThunk, getHistoryListThunk, setHistoryListThunk }) {

  useEffect(() => {
    getProfileNameThunk()
    getFavoriteListThunk()
    getHistoryListThunk()
  }, [getProfileNameThunk, getFavoriteListThunk, getHistoryListThunk])

  useEffect(() => {
    if (favorite) setFavoriteListThunk(favorite)
  }, [favorite, setFavoriteListThunk])

  useEffect(() => {
    if (history) setHistoryListThunk(history)
  }, [history, setHistoryListThunk])

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