import './App.scss';
import { Navbar, Nav, Container, Row, Button } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './component/Detail';
import axios from 'axios';
import Cart from './component/Cart';


function App() {
	let [shoes, setShoes] = useState(data);
	let [count, setCount] = useState(2);
	let [loading, setLoading] = useState(false);
	let [more, setMore] = useState(true);
	let navigate = useNavigate();
	return (
		<div className="App">
			<Navbar bg="dark" variant="dark">
				<Container>
					<Link to="/" className="navbar-brand">Home</Link>
					<Nav className="me-auto">
						{/* <Link to="/detail" className="nav-link">detail</Link> */}
						<Link to="/cart" className="nav-link">cart</Link>
						<Link to="/event" className="nav-link">event</Link>
					</Nav>
				</Container>
			</Navbar>
			<Routes>
				<Route path="/" element={
					<>
						<div className="main-bg"></div>
						<Container className="mb-4">
							<Row>
								{
									shoes.map((a, i) => {
										return (
											<List shoes={shoes[i]} i={i} key={i} navigate={navigate} />
										)
									})
								}
							</Row>
							{
								(more == true)
									? <Button className="mt-4" variant="dark" onClick={(e) => {
										setLoading(true)
										setCount(count + 1)

										function loadData() {
											axios.get('https://codingapple1.github.io/shop/data' + count + '.json')
												.then((result) => {
													setLoading(false)
													let copy = [...shoes, ...result.data]
													setShoes(copy)
												})
												.catch(() => {
													setLoading(false)
													console.log('실패')
												})
										}

										function endData() {
											alert('끗~')
											setMore(false)
											setLoading(false)
										}

										(count < 3) ? loadData() : endData()

									}}>더보기</Button>
									: null
							}

						</Container>
					</>
				} />
				<Route path="/detail/:id" element={<Detail shoes={shoes} />} />
				<Route path="*" element={<div>없는페이지임</div>} />
				<Route path="/about" element={<About />} >
					<Route path="member" element={<div>멤버들</div>} />
					<Route path="location" element={<div>회사위치</div>} />
				</Route>
				<Route path="/event" element={<EventPage />}>
					<Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
					<Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
				</Route>
				<Route path="/cart" element={<Cart />} />
			</Routes>

			{
				(loading == true) ? <Loading /> : null
			}

		</div>
	);
}

function List(props) {
	return (
		<div className="col-md-4" onClick={() => { props.navigate('/detail/' + (props.i)) }}>
			<img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} alt="" />
			<h4>{props.shoes.title}</h4>
			<p>{props.shoes.price}</p>
		</div>
	);
}

function About() {
	return (
		<div>
			<h4>about페이지임</h4>
			<Outlet></Outlet>
		</div>
	)
}

function EventPage() {
	return (
		<div>
			<h4>오늘의 이벤트</h4>
			<Outlet></Outlet>
		</div>
	)
}

function Loading() {
	return (
		<div className="loading">
			로딩중
		</div>
	)
}

export default App;
