import React, { Component } from 'react';
import { Navbar } from '@comps';
import './styles/Frame.css';

class Frame extends Component {
	render({ props, state } = this) {
		return (
			<div styleName="Frame">
				<Navbar onInnerPage={props.location.pathname !== '/'} />
				{props.children}
			</div>
		);
	}
}

export default Frame;
