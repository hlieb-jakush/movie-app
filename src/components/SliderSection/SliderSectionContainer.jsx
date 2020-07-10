import { connect } from 'react-redux'
import SliderSection from './SliderSection'
import { addResultListThunk } from '../../state/thunks'
import { setSearchPage, addFavoriteItem, deleteFavoriteItem } from '../../state/actionCreators'
import { getSearchTitle, getSearchType, getSearchPage, getResultList, getProfileFavorite } from '../../state/selectors'

const mapStateToProps = (state) => ({
    title: getSearchTitle(state),
    type: getSearchType(state),
    page: getSearchPage(state),
    list: getResultList(state),
    favorite: getProfileFavorite(state)
})

export default connect(mapStateToProps, { addResultListThunk, setSearchPage, addFavoriteItem, deleteFavoriteItem })(SliderSection)