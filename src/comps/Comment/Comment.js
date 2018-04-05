import React from 'react'
import './styles/Comment.css'

const Comment = (props: PropsT) => {
	return (
		<div styleName='Comment'>
			<h5>{props.data.author}</h5>
			<p>{props.data.comment}</p>
		</div>
	)
}

export default Comment