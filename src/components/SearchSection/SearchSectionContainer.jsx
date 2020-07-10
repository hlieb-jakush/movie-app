import { connect } from 'react-redux'
import { setTitle, setList, setType, setPage } from '../../state/actionCreators'
import SearchSection from './SearchSection'
import { getList } from '../../state/thunks'
import { getSearchTitle, getSearchType, getSearchPage, getResultList } from '../../state/selectors'

const mapStateToProps = (state) => ({
    title: getSearchTitle(state),
    type: getSearchType(state),
    page: getSearchPage(state),
    list: getResultList(state)
})

export default connect(mapStateToProps, { setTitle, setType, setPage, setList, getList })(SearchSection)