import React from 'react';
import { Icon } from '@comps';
import './styles/Input.css';

type PropsT = CorePropsT & {
	value: string,
	placeholder: string,
	onChange: Function,

	name?: string,
	defaultValue?: string,
	required?: boolean,
	label?: string,
	onIconClick?: Function,
	iconSize?: string,
	icon?: string
};

const Input = (props: PropsT) => {
	return (
		<div styleName="Input" className="Input-comp" e2e={props.e2e || 'Input'}>
			<If condition={props.label}>
				<label>{props.label}</label>
			</If>
			<div styleName="box">
				<input
					defaultValue={props.defaultValue}
					placeholder={props.placeholder}
					required={props.required}
					onChange={props.onChange}
					value={props.value}
					name={props.name}
					id={props.id}
					type={props.type}
				/>
				<If condition={props.icon}>
					<Icon
						onClick={props.onIconClick}
						size={props.iconSize}
						name={props.icon}
						styleName="icon"
					/>
				</If>
			</div>
		</div>
	);
};

Input.defaultProps = {
	required: false
};

export default Input;
