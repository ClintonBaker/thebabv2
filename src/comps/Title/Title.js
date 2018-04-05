import React from 'react';
import './styles/Title.css';

const Title = (props: PropsT) => {
	return (
		<h1 styleName="Title" e2e={props.e2e || 'Title'}>
			{props.children}
		</h1>
	);
};

export default Title;
