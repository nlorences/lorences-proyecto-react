import React, {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  function handlePlusButton() {
    count < stock ? setCount(count +1) : console.log('No hay suficiente Stock');
  }
    
  function handleMinusButton(){
    if(count > 0) {
      setCount(count - 1);
    }
  }
    
  return (
    <div className="item-count-container">
      <div>
        <button onClick={() => handleMinusButton()}>-</button>
        <input value={count}/>
        <button onClick={() => handlePlusButton()}>+</button>
      </div>
      <button onClick={() => (count <= stock) && (count > 0) && onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount