import React, {useState} from 'react';
import Button from './../Button/Button'
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd, classPage, btnClass}) => {
  const [count, setCount] = useState(initial);

  function handlePlusButton() {
    count < stock ? setCount(count +1) : alert('No hay suficiente Stock');
  }
    
  function handleMinusButton(){
    if(count > 0) {
      setCount(count - 1);
    }
  }

  const handleInputChange = (e) => {
    setCount(e.target.value)
}
    
  return (
    <div className={`item-count-container-${classPage}`}>

      <div>
        <button className={`btn-plus-minus-${classPage}`} onClick={handleMinusButton}>-</button>
        <input value={count} onChange={handleInputChange} />
        <button className={`btn-plus-minus-${classPage}`} onClick={handlePlusButton}>+</button>
      </div>
        <Button btnClass={btnClass} btnText="Agregar al carrito" action={() => (count <= stock) && (count > 0) && onAdd(count)}></Button>
    </div>

  )
}

export default ItemCount