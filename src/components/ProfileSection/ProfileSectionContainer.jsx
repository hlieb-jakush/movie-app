import { connect } from 'react-redux'
import ProfileSection from './ProfileSection'
import { setProfileNameThunk, clearHistoryListThunk, clearFavoriteListThunk, setResultListThunk } from '../../state/thunks'
import { deleteFavoriteItem } from '../../state/actionCreators'
import { getProfileName, getProfileFavorite, getProfileHistory } from '../../state/selectors'

const mapStateToProps = (state) => ({
    name: getProfileName(state),
    favorite: getProfileFavorite(state),
    history: getProfileHistory(state)
})

export default connect(mapStateToProps, { setProfileNameThunk, clearHistoryListThunk, clearFavoriteListThunk, setResultListThunk, deleteFavoriteItem })(ProfileSection)