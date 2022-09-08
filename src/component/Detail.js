import { useParams } from 'react-router-dom'
import { Container, Row, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addItem } from "./../store/cartSlice.js";

function Detail({ shoes }) {
	let { id } = useParams();
	let shoesId = shoes.find((x) => x.id == id);
	let [banner, setBanner] = useState(true);
	//let [num, setNum] = useState('');
	let [tab, setTab] = useState(0);
	let [fade, setFade] = useState('')
	let dispatch = useDispatch();


	useEffect(() => {
		let a = setTimeout(() => {
			setBanner(false)
		}, 2000);
		let fade = setTimeout(() => {
			setFade('end')
		}, 100)
		return () => {
			clearTimeout(a);
			clearTimeout(fade);
			setFade('')
		}
		// if(isNaN(num) == true){
		//   alert('숫자만 입력해 주세요')
		// }

	}, []);

	return (
		<>
			{
				(banner == true) ? <Banner /> : null
			}
			<Container className={'start ' + fade} >
				<Row>
					<div className="col-md-6">
						<img src={'https://codingapple1.github.io/shop/shoes' + (shoesId.id + 1) + '.jpg'} alt="" />
					</div>
					<div className="col-md-6 mt-4">
						{/* <input type="text" onChange={(e)=>{
              setNum(e.target.value)
            }} /> */}
						<h4 className="pt-5">{shoesId.title}</h4>
						<p>{shoesId.content}</p>
						<p>{shoesId.price}원</p>
						<button className="btn btn-danger" onClick={() => {
							dispatch(addItem({ id: 2, name: shoesId.title, count: 1 }))
						}}>주문하기🤍</button>
					</div>
				</Row>
				<Row className="mt-4">
					<Nav fill variant="tabs" defaultActiveKey="link0">
						<Nav.Item>
							<Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>탭0</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>탭1</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>탭2</Nav.Link>
						</Nav.Item>
					</Nav>
				</Row>
				<Row>
					<TabContent tab={tab} shoes={shoes} />
				</Row>
			</Container>
		</>
	);
}

function Banner() {
	return (
		<>
			<div className="banner">
				2초안에 누르면 90%할인!
			</div>
		</>
	);
}

function TabContent({ tab, shoes }) {
	return [<div>{shoes[0].title}</div>, <div>탭1</div>, <div>탭2</div>][tab]
}

export default Detail;