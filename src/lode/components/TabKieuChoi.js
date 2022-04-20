import React from 'react';
import {useFormContext} from "react-hook-form";

const TabKieuChoi = ({value,name=''}) => {
	const {setValue, watch} = useFormContext()

	const watchKieuChoi = watch('kieuChoi')
	console.log(watchKieuChoi)

	const setTab = (code) => {
		if(watch('kieuChoi') !== code) {
			setValue('soDanh', [])
		}
		setValue('kieuChoi', code)
	}
	return (
			<>
				<div className={`kd1 ${watchKieuChoi === {value} && 'act'}`} id="loto_type_info"
					 onClick={()=>setTab(value)}>
					{name}
				</div>
				<div className="clearfix"/>
			</>
	);
};

export default TabKieuChoi;