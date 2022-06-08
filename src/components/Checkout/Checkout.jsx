import React, {useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import db from '../../services/firebase'
import {collection, addDoc} from 'firebase/firestore'
import './Checkout.css'

const Checkout = () => {

    const cartCtx = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    })
    const [orderId, setOrderId] = useState()
    const [load, setLoad] = useState(false)

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const total = cartCtx.totalAmount();
        const items = cartCtx.products.map(item => {return {id:item.id, title:item.title, price: item.price, amount: item.quantity}})
        const dataOrder = {buyer, items, date, total}
        generateOrder(dataOrder)
        
    }

    const generateOrder = async (dataOrder) => {
        setLoad(true)
        try{
            const col = collection(db, "orders")
            const order = await addDoc(col, dataOrder)
            setOrderId(order.id)
            cartCtx.emptyCart()
            setLoad(false)
        } catch(err){}
    }

// function to add an item

    const itemsDb = {}
    const updateDb = async (itemsDb) => {
        try{
            const col = collection(db, "items")
            const item = await addDoc(col, itemsDb)
        } catch(err){}
    }



  return (  
    <>
    {
    load? 
        <h3>Procesando tu pedido...</h3>
        :(!orderId && 
            <div>
                <h3>Completa tus datos para finalizar la compra</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="Nombre" placeholder="Nombre" onChange={handleInputChange} required/>
                    <input type="email" name="Email" placeholder="Email" onChange={handleInputChange} required/>
                    <input type="number" name="Telefono" placeholder="Teléfono" onChange={handleInputChange} required/>
                    <input type="submit" value="Finalizar Compra" className="btn-primary"onChange={handleInputChange} required/>
                </form>
            </div>)
    }
    {
        orderId && 
        <div>
            <h3>Compra finalizada</h3>
            <h4>{`Código de la compra: ${orderId}`}</h4>
        </div>
    }
    </>
  )
}

export default Checkout