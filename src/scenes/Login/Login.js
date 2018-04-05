import React from 'react';
import { LoginForm } from '@comps';
import './styles/Login.css';

class Login extends React.Component {
	componentDidUpdate() {
		this.props.authenticated && this.props.router.push('/');
	};

	render() {
		return (
			<div styleName='Login'>
				<LoginForm />
			</div>
		);
	}
};

export default Login;