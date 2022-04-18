import moment from "moment";

export default function(date,format)
{
	let dateFormatted = moment(date).format(format);
	if(dateFormatted === 'Invalid date')
		return '';
	return dateFormatted;
}