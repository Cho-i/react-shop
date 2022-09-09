import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
	name: "cart",
	initialState: [
		{ id: 3, name: "White and Black", count: 2 },
		{ id: 4, name: "Grey Yordan", count: 1 },
	],
	reducers: {
		addCount(state, action) {
			//payload와 같은 id를 가진 상품을 찾아서 +1 해달라
			let num = state.findIndex((a) => { return a.id === action.payload })
			state[num].count++
		},
		addItem(state, action) {
			let num = state.findIndex((a) => { return a.id === action.payload.id })
			let hasId = state.some((a) => { return a.id === action.payload.id })

			hasId ? state[num].count++ : state.push(action.payload)

		},
		deleteItem(state, action) {
			let num = state.findIndex((a) => { return a.id === action.payload })
			state.splice(num, 1);
		}
	},
});

export let { addCount, addItem, deleteItem } = cart.actions;

export default cart;
