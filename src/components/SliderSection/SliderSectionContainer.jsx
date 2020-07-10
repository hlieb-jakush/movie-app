import { connect } from 'react-redux'
import SliderSection from './SliderSection'
import { addList } from '../../state/thunks'
import { setPage } from '../../state/actionCreators'
import { getSearchTitle, getSearchType, getSearchPage, getResultList, getProfileFavorite } from '../../state/selectors'

const mapStateToProps = (state) => ({
    title: getSearchTitle(state),
    type: getSearchType(state),
    page: getSearchPage(state),
    list: getResultList(state),
    favorite: getProfileFavorite(state)
})

export default connect(mapStateToProps, { setPage, addList })(SliderSection)