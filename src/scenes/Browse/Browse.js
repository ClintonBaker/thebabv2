import React from 'react';
import { Link } from 'react-router';
import { ThingPrev } from '@comps';

import './styles/Browse.css';

class Browse extends React.Component {
	state = {
		things: [],
	};

	componentWillMount() {
		this.props.actions.getThings();
	}

	componentDidUpdate(prevProps) {
		prevProps.things !== this.props.things
			? this.setState(state => {
				return {
					things: this.props.things,
				};
			})
			: null;
	}

	render({ things } = this.state) {
		return (
			<div styleName="Browse">
				<Choose>
					<When condition={things}>
						{things.map((thing, index) => {
							return (
								<Link key={index} to={'/inspect/' + thing.id}>
									<ThingPrev data={thing} />
								</Link>
							);
						})}
					</When>
					<Otherwise>
						<small>...loading</small>
					</Otherwise>
				</Choose>
			</div>
		);
	}
}

export default Browse;
