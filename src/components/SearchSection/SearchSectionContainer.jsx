import { connect } from 'react-redux'
import { setTitle, setList, setType, setPage } from '../../state/actionCreators'
import SearchSection from './SearchSection'
import { getList } from '../../state/thunks'

const mapStateToProps = (state) => ({
    title: state.options.title,
    type: state.options.type,
    page: state.options.page,
    list: state.data.list
})

export default connect(mapStateToProps, { setTitle, setType, setPage, setList, getList })(SearchSection)