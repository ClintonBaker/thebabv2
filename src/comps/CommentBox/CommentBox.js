import React from 'react'
import { Button } from '@comps';
import './styles/CommentBox.css'

class CommentBox extends React.Component {
	state = {
		newComment: ''
	}

	updateInput = ({ target: { name, value } }) => {
		this.setState(state => {
			return ({
				[name]: value
			})
		})
	}

	submit = () => {
		this.props.actions.pushComment({
			name: this.props.thing.name,
			link: this.props.thing.link,
			description: this.props.thing.description,
			tags: this.props.thing.tags,
			id: this.props.thing.id,
			comments: [...this.props.thing.comments, {
				author: this.props.user,
				comment: this.state.newComment
			}]
		})
		this.setState(state => {
			return ({
				newComment: ''
			})
		})
	}

	render({ state } = this) {
		return (
			<div styleName='CommentBox'>
				<textarea
					styleName='CommentArea'
					value={state.newComment}
					name='newComment'
					onChange={this.updateInput}
				/>
				<div styleName='CommentButton'>
					<Button onClick={this.submit}>Comment</Button>
				</div>
			</div>
		)
	}
}

export default CommentBox