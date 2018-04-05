import React from 'react'
import { Link } from 'react-router';
import './styles/SmallThing.css'

const SmallThing = (props: PropsT) => {
	return (
		<div styleName='SmallThing'>
			<div styleName='top'>
				<Link to={`/inspect/${props.id}`}>
					{props.name}
				</Link>
			</div>
		</div>
	)
}

export default SmallThing
