import { useParams } from 'react-router-dom'
import {Container, Row} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function Detail(props) {
  let { id } = useParams();
  let shoesId = props.shoes.find((x)=> x.id == id);
  let [banner, setBanner] = useState(true);
  let [num, setNum] = useState('');

  useEffect(()=>{
    let a = setTimeout(()=>{
      setBanner(false)
    },2000);
    return ()=>{
      clearTimeout(a);
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
      <Container>
        <Row>
          <div className="col-md-6">
            <img src={'https://codingapple1.github.io/shop/shoes' + (shoesId.id+1) +'.jpg'} alt="" />
          </div>
          <div className="col-md-6 mt-4">
            {/* <input type="text" onChange={(e)=>{
              setNum(e.target.value)
            }} /> */}
            <h4 className="pt-5">{shoesId.title}</h4>
            <p>{shoesId.content}</p>
            <p>{shoesId.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </Row>
      </Container>
    </>
  );
}

function Banner(){
  return (
    <>
      <div className="banner">
        2초안에 누르면 90%할인!
      </div>
    </>
  );
}

export default Detail;