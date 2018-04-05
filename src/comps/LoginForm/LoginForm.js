import React from 'react'
import { Input, Button } from '@comps';

import './styles/LoginForm.css'

class LoginForm extends React.Component {
	state = {
		userName: '',
		password: ''
	};

	updateInput = ({ target: { name, value } }) => {
		this.setState(state => {
			return ({
				[name]: value
			});
		});
	}

	logUserIn = () => {
		this.props.actions.login({
			name: this.state.userName,
			password: this.state.password
		});
		this.clearForm();
	}

	clearForm = () => {
		this.setState(state => {
			return ({
				userName: '',
				password: ''
			})
		})
	}

	render({ state } = this) {
		return (
			<div styleName='LoginForm'>
				<div styleName='form'>
					<Input
						name='userName'
						value={state.userName}
						onChange={this.updateInput}
						placeholder='Enter user name'
					/>
					<Input
						name='password'
						value={state.password}
						type='password'
						onChange={this.updateInput}
						placeholder='Enter password'
					/>
					<Button onClick={this.logUserIn}>Log In</Button>
				</div>
			</div>
		)
	}
}

export default LoginForm;