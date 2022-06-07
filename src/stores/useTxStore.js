import create from 'zustand';

export const useTxStore = create(set => ({

	countDownDice: 0,

	setCountDownDice: (data) => {set({countDownDice: data})},

	timeOpen: 0,

	setTimeOpen: (data) => {set({timeOpen: data})},

	strResult: '',

	setStrResult: (data) => {set({strResult: data})},

	draggable: false,

	setDraggable: (data) => {set({draggable: data})},

	flowDraggable: false,

	setFlowDraggable: (data) => {set({flowDraggable: data})},

	betT: 0,
	betX: 0,

	setBetT: (data) => {set({betT: data})},
	setBetX: (data) => {set({betX: data})},

	phien: undefined,
	setPhien: (data) => {set({phien: data})},

	arrResultDice: [],
	setArrResultDice: (data) => {set({arrResultDice: data})},
	visitableTx: false,
	setVisitableTx: (data) => {set({visitableTx: data})},

	openHistory: false,
	setOpenHistory: (data) => {set({openHistory: data})},

	openCau: false,
	setOpenCau: (data) => {set({openCau: data})},

	countTaiXiu: {t: 0, x: 0},
	setCountTaiXiu: (data) => {set({countTaiXiu: data})}
}))
