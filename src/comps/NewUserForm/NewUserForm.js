import React from 'react'
import { Input, Button } from '@comps';

import './styles/NewUserForm.css'

class NewUserForm extends React.Component {
	state = {
		userName: '',
		newPass: '',
		confPass: '',
		passMatch: true
	};

	updateInput = ({ target: { name, value } }) => {
		this.setState(state => {
			return ({
				[name]: value
			});
		});
	}

	newUser = () => {
		this.props.actions.newUser({
			username: this.state.userName,
			password: this.state.newPass
		});
		this.clearForm();
	}

	clearForm = () => {
		this.setState(state => {
			return ({
				userName: '',
				newPass: '',
				confPass: '',
				passMatch: true
			})
		})
	}

	submitUser = () => {
		this.state.newPass === this.state.confPass
			? this.newUser()
			: this.setState(state => {
				return ({
					passMatch: false
				});
			});
	}

	render({ state } = this) {
		return (
			<div styleName='NewUserForm'>
				<div styleName='form'>
					<Input
						name='userName'
						value={state.userName}
						onChange={this.updateInput}
						placeholder='Enter user name'
					/>
					<Input
						name='newPass'
						value={state.newPass}
						type='password'
						onChange={this.updateInput}
						placeholder='Enter password'
					/>
					<Input
						name='confPass'
						value={state.confPass}
						type='password'
						onChange={this.updateInput}
						placeholder='Confirm password'
					/>
					<Choose>
						<When condition={!state.passMatch}>
							<div>
								<small>Whoops! Passwords must match, sorry!</small>
							</div>
						</When>
					</Choose>
					<Button onClick={this.submitUser}>Sign Up</Button>
				</div>
			</div>
		)
	}
}

export default NewUserForm;