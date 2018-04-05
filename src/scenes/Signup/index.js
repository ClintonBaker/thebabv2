import { connect } from 'react-redux';
import Signup from './Signup';

const mapStateToProps = state => {
  return {
    authenticated: state.users.authenticated
  }
}

export default connect(mapStateToProps)(Signup);