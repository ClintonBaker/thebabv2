import React from 'react'
import { NewUserForm } from '@comps';

import './styles/Signup.css'

class Signup extends React.Component {
	componentDidUpdate() {
		this.props.authenticated && this.props.router.push('/');
	};
	render() {
		return (
			<div styleName='Signup'>
				<NewUserForm />
			</div>
		)
	}
}

export default Signup