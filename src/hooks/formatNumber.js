// eslint-disable-next-line import/no-anonymous-default-export
export default function (num, ex = ' VNĐ') {

	let n = String(num).replace(/\B(?=(\d{3})+(?!\d))/g,',')
	return n !== undefined && n !== 'undefined' ? n : '0' + ex
}