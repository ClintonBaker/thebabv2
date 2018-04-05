import React from 'react';
import './styles/Icon.css';

type PropsT = CorePropsT & {
	className?: string,
	name: string,
	size?: string,
};

const Icon = (props: PropsT) => {
	return (
		<i
			className={`icon ion-${props.name} icon-${props.size} ${props.className}`}
			e2e={props.e2e || 'Icon'}
			onClick={props.onClick}
			styleName="Icon"
		/>
	);
};

Icon.defaultProps = {
	size: 'md',
};

export default Icon;
