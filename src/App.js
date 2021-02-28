import { useEffect, useState } from 'react';
import friendsList from '../src/Components/data/mockData20.json';
import './App.css';
import Cart from './Components/Cart/Cart';
import Friends from './Components/Friends/Friends';

function App() {
const [frnds, setFrnds] = useState([]);
 useEffect(()=>{
   setFrnds(friendsList);
 },[]);

 const [cart, setCart] = useState([])
 const addToCart = (sal) => {
   console.log('clicked');
  const newCart = [...cart, sal];
  setCart(newCart);
 }

  return (
    <div className="App">
      <Cart cart={cart}></Cart>
      {frnds.map(fr => <Friends addToCart={addToCart} fr={fr}></Friends>)}
      </div>
  );
}

export default App;
