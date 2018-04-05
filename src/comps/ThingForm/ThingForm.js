import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Input, Button } from '@comps';
import './styles/ThingForm.css';

class ThingForm extends Component {
	state = {
		name: '',
		link: '',
		description: '',
		tags: '',
	};

	clearForm = () => {
		this.setState(state => {
			return {
				name: '',
				link: '',
				description: '',
				tags: '',
			};
		});
	};

	updateInput = ({ target: { name, value } }) => {
		this.setState({
			[name]: value,
		});
	};

	submitForm = e => {
		e.preventDefault();
		this.props.actions.postThing({
			name: this.state.name,
			link: this.state.link,
			description: this.state.description,
			tags: this.state.tags,
			comments: []
		});
	};

	render({ props, state } = this) {
		return (
			<div styleName="ThingForm">
				<div styleName='form'>
					<Input
						name='name'
						value={state.name}
						onChange={this.updateInput}
						placeholder='Enter a name'
					/>
					<Input
						name='link'
						value={state.link}
						onChange={this.updateInput}
						placeholder='Enter a link'
					/>
					<Input
						name='description'
						value={state.description}
						onChange={this.updateInput}
						placeholder='Enter a description'
					/>
					<Input
						name='tags'
						value={state.tags}
						onChange={this.updateInput}
						placeholder='Enter some tags'
					/>
					<Button onClick={this.submitForm}>Submit</Button>
				</div>
			</div>
		);
	}
}

export default ThingForm;