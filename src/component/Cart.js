import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { changeCount } from "./../store/cartSlice.js"

function Cart() {
	let state = useSelector((state) => { return state })
	let dispatch = useDispatch();
	//console.log(state.stock)
	return (
		<>
			<Table className="mt-4">
				<thead>
					<tr>
						<th>#</th>
						<th>상품명</th>
						<th>수량</th>
						<th>변경하기</th>
					</tr>
				</thead>
				<tbody>
					{
						state.cart.map(function (item, i) {
							return (
								<tr key={i}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.count}</td>
									<td><Button variant="dark" onClick={() => {
										dispatch(changeCount(1))
									}}>+</Button></td>
								</tr>
							)
						})
					}

				</tbody>
			</Table>
		</>
	);
}

export default Cart;