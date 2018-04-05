import React from 'react';
import './styles/Button.css';

const Button = (props: PropsT) => {
	return <button
		styleName="Button"
		className='Button-comp'
		onClick={props.onClick}>
		{props.children}
	</button>;
};

export default Button;
