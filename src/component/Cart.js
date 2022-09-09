import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem } from "./../store/cartSlice.js";

function Cart() {
	let state = useSelector((state) => {
		return state;
	});
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
						<th>삭제</th>
					</tr>
				</thead>
				<tbody>
					{state.cart.map(function (a, i) {
						return (
							<tr key={i}>
								<td>{state.cart[i].id}</td>
								<td>{state.cart[i].name}</td>
								<td>{state.cart[i].count}</td>
								<td>
									<Button
										variant="outline-dark"
										onClick={() => {
											dispatch(addCount(state.cart[i].id));
										}}
									>
										+
									</Button>
								</td>
								<td>
									<Button
										variant="outline-danger"
										onClick={() => {
											dispatch(deleteItem(state.cart[i].id));
										}}>삭제</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</>
	);
}

export default Cart;
