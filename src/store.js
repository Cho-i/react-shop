import { configureStore, createSlice } from '@reduxjs/toolkit'
import cart from './store/cartSlice.js'

let user = createSlice({
	name: 'user',
	initialState: 'kim'
})


export default configureStore({
	reducer: {
		user: user.reducer,
		cart: cart.reducer
	}
})