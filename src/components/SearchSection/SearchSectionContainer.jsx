import { connect } from 'react-redux'
import SearchSection from './SearchSection'
import { setResultListThunk } from '../../state/thunks'
import { getSearchTitle, getSearchType, getSearchPage, getResultList } from '../../state/selectors'

const mapStateToProps = (state) => ({
    title: getSearchTitle(state),
    type: getSearchType(state),
    page: getSearchPage(state),
    list: getResultList(state)
})

export default connect(mapStateToProps, { setResultListThunk })(SearchSection)