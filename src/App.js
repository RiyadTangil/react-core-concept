import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const nayoks = ['razzak', 'Manna', 'bappi', 'Kuddos', 'Riyad']
  const productName = [
    { name: "Photoshop", price: "$38" },
    { name: "Iluatrator", price: "$8" },
    { name: "Iluatrator", price: "$8" },
    { name: "Iluatrator", price: "$8" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react learner</p>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          productName.map(product => <Product product={product}> </Product>)
        }

      </header>
    </div>
  );
}

function Counter() {
  const [ count, setCount] = useState(10);
  // const handleIncrease= ()=>setCount(count + 1);
  // const handleIncrease= ()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>count : {count} </h1>
      <button onClick={()=>setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count -1)} >Decrease</button>
    </div>
  )
}
function Users(){
  const [users,setUsers]= useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data =>setUsers(data) )
  },[])
return(
  <div>
 <h3>Dynamic Users {users.length}</h3>
<ul>
 {
 users.map(user =><li>{user.phone}</li>)
 }
</ul>
  </div>
)
}

function Product(props) {
  const productStyle = {
    border: "1px solid red",
    width: "200px",
    borderRadius: "5px",
    hight: "200px",
    float: "left",
    backgroundColor: "gray",
    margin: '10px'
  }
  const { name, price } = props.product; //destructuring  use this instate of {props.product.name}
  console.log(name, price);
  return (

    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h1>{price}</h1>
    </div>
  )
}



export default App;
