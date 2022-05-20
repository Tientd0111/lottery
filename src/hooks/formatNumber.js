// eslint-disable-next-line import/no-anonymous-default-export
export default function (num, ex) {
	ex = ex ? ex : ' VND'
	let n = String(num).replace(/\B(?=(\d{3})+(?!\d))/g,',')
	return n !== undefined && n !== 'undefined' ? n + ex : '0' + ex
}