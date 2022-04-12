import React from 'react';
<<<<<<< HEAD
import {useController} from "react-hook-form";
=======
import {useController, useFormContext} from "react-hook-form";
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168

const FormInput = props => {

	const {name, placeholder, label, rules, control, ...inputProps} = props

	const {field, fieldState} = useController({name, control: control, rules})


	return (
		<div className="form-group">
<<<<<<< HEAD
			<label>{label}{rules?.required ? (<span style={{color:'red'}}> *</span>):null}</label>
=======
			<label>{label}{rules?.required ? (<span style={{color:'red'}}>*</span>):null}</label>
>>>>>>> e8c15180445f953116f5edd31de6e9bf5bfad168
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