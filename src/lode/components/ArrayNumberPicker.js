import React, {useCallback} from 'react';
import {useFieldArray, useFormContext} from "react-hook-form";
import {toast} from "react-toastify";
import Constant from "../../contants/constant";

const ArrayNumberPicker = ({arrays = [], t = false, indexPlus = "0",tab = ''}) => {
	let i = -1
	const {control} = useFormContext();
	const {fields, append, remove} = useFieldArray({
		control,
		name: 'soDanh'
	});
	const {watch} = useFormContext()
	console.log(watch().kieuDanh === tab)
	const handleClickNumber = useCallback((so) => {
		const indexOfStevie = fields.findIndex(i => i.so === so);
		if(fields.length > 9 && indexOfStevie === -1) {
			toast.error('Chơi tối đa 10 số')
			return;
		}else if(watch().kieuDanh === "LX"|watch().kieuDanh ==="LD"|watch().kieuDanh ==="X"){
			if(watch().kieuChoi === "LX2"|watch().kieuChoi === "X2"|watch().kieuChoi === "LD2"
				&&fields.length > 1 && indexOfStevie === -1){
				toast.error('Chơi tối đa 2 số')
				return;
			}else if(watch().kieuChoi === "LX3"|watch().kieuChoi === "X3"|watch().kieuChoi === "LD3"
				&&fields.length > 2 && indexOfStevie === -1){
				toast.error('Chơi tối đa 3 số')
				return;
			}
			else if(watch().kieuChoi === "LX4"|watch().kieuChoi === "X4"|watch().kieuChoi === "LD4"
				&&fields.length > 3 && indexOfStevie === -1){
				toast.error('Chơi tối đa 4 số')
				return;
			}
		}
		if(indexOfStevie > -1) {
			remove(indexOfStevie)
		}
		else append({so: so})
	},[fields])
	return Array.from(Array(arrays.length === 10 ? 1 :arrays.length / 10)).map((e,index)=>{
		return(
			<tr key={index}>
				{Array.from(Array(arrays.length === 10?10:arrays.length / 10)).map((e,index)=>{
					i++;
					let so;
					if(!t && arrays.length > 10) {
						so = i < 10 ? indexPlus+i:i.toString()
					} else if(!t) {
						so = i.toString()
					} else {
						so = i < 10 ? indexPlus+"0"+i:indexPlus+i
					}
					return(
						<td style={{cursor: 'pointer'}} onClick={()=>handleClickNumber(so)} key={index}>
							<span className={`so ${index} ${fields.findIndex(i => i?.so === so) >-1 && 'active'}`}>
								<span className="so-item">{so}</span>
							</span>
						</td>
					)
				})}
			</tr>
		)
	});
};

export default ArrayNumberPicker;