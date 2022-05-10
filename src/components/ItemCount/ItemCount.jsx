import React, {useState} from 'react';
import Button from './../Button/Button'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  function handlePlusButton() {
    count < stock ? setCount(count +1) : alert('No hay suficiente Stock');
  }
    
  function handleMinusButton(){
    if(count > 0) {
      setCount(count - 1);
    }
  }
    
  return (
    <div className="item-count-container">

      <div>
        <button className="btn-plus-minus" onClick={handleMinusButton}>-</button>
        <input value={count}/>
        <button className="btn-plus-minus" onClick={handlePlusButton}>+</button>
      </div>
        <Button btnText="Agregar al carrito" action={() => (count <= stock) && (count > 0) && onAdd(count)}></Button>
    </div>

  )
}

export default ItemCount