import React from 'react';
import './styles/Submit.css';

import { ThingForm } from '@comps';

class Submit extends React.Component {
	componentDidUpdate() {
		this.props.FormPosted && this.props.router.push('/inspect/' + this.props.ID);
	}

	render() {
		return (
			<div styleName="Submit">
				<ThingForm />
			</div>
		);
	}
}

export default Submit;
