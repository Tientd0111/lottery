import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(date,format)
{
	let dateFormatted = moment(date).format(format);
	if(dateFormatted === 'Invalid date')
		return '';
	return dateFormatted;
}