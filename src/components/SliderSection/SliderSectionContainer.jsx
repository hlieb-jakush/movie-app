import { connect } from 'react-redux'
import SliderSection from './SliderSection'
import { addList } from '../../state/thunks'
import { setPage } from '../../state/actionCreators'

const mapStateToProps = (state) => ({
    title: state.options.title,
    type: state.options.type,
    page: state.options.page,
    list: state.data.list
})

export default connect(mapStateToProps, { setPage, addList })(SliderSection)