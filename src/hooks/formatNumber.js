const numeral = require('numeral');

// eslint-disable-next-line import/no-anonymous-default-export
export default function (num) {
	if(typeof num === 'number') {
		return numeral(num*1000).format(' 0 a')
	}
	return ''
}