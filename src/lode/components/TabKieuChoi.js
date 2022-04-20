import React from 'react';
import {useFormContext} from "react-hook-form";

const TabKieuChoi = ({value,name=''}) => {
	const {setValue, watch} = useFormContext()

	const watchKieuChoi = watch('kieuChoi')

	const setTab = () => {
		if(watch('kieuChoi') !== value) {
			setValue('soDanh', [])
		}
		setValue('kieuChoi', value)
	}

	return (
			<>
				<div className={`kd1 ${watchKieuChoi === value && 'act'}`} id="loto_type_info"
					 onClick={setTab}>
					{name}
				</div>
				<div className="clearfix"/>
			</>
	);
};

export default TabKieuChoi;