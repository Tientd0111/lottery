import React from 'react';
import {useController, useFormContext} from "react-hook-form";

const FormInput = props => {

	const {name, placeholder, label, rules, control, ...inputProps} = props

	const {field, fieldState} = useController({name, control: control, rules})


	return (
		<div className="form-group">
			<label>{label}{rules?.required ? (<span style={{color:'red'}}>*</span>):null}</label>
			<input
				value={field.value}
				name={field.name}
				onChange={field.onChange}
				onBlur={field.onBlur}
				ref={field.ref}
				className="input-field" placeholder={placeholder}
				{...inputProps}
			/>
		</div>
	);
};

export default FormInput;