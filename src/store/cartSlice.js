import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
	name: "cart",
	initialState: [
		{ id: 0, name: "White and Black", count: 2 },
		{ id: 2, name: "Grey Yordan", count: 1 },
	],
	reducers: {
		addCount(state, action) {
			//payload와 같은 id를 가진 상품을 찾아서 +1 해달라
			let num = state.findIndex((a) => { return a.id === action.payload })
			state[num].count++
		},
		addItem(state, action) {
			state.push(action.payload)
		}
	},
});

export let { addCount, addItem } = cart.actions;

export default cart;
