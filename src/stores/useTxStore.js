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
}))