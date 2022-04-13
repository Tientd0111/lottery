const numeral = require('numeral');

module.exports = function (num) {
	if(typeof num === 'number') {
		return numeral(num*1000).format('$ 0.00 a')
	}
	return ''
}