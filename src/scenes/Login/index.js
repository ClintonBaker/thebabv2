import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = state => {
  return {
    authenticated: state.users.authenticated
  }
}

export default connect(mapStateToProps)(Login);