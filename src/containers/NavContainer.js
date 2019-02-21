import { connect } from 'react-redux'
import Nav from '../components/nav/Nav'
import {changeRoute} from '../actions'

const mapStateToProps = state => {
  console.log('inject:');
  console.log(state);
  return {
    menus: state.nav.menus
  }
}
  
  const mapDispatchToProps = dispatch => ({
    changeRoute: id => dispatch(changeRoute(id))
  })

export default connect(mapStateToProps,mapDispatchToProps)(Nav)