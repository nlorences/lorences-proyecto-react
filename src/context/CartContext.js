import {createContext, useState} from "react";

const CartContext = createContext({
    products: []
});

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some(item => item.id === id);
    }

    const addToCart = (item, quantity) => {
        if( isInCart(item.id)){
            return setCartList(
                cartList.map((product) => product.id === item.id 
                    ? {...product, quantity: product.quantity + quantity} 
                    : product
                )
            );
        } 
        setCartList([...cartList, {...item, quantity}]);
    }

    const emptyCart = () => { 
        setCartList([]);
    }

    const deleteById = (id) => {
        setCartList(cartList.filter((item) => item.id !== id));
    }

    const totalCount = () => {
        return cartList.reduce((total, item) => total + item.quantity, 0)
    }

    const totalAmount = () => {
        return cartList.reduce((total, item) => total + item.quantity * item.price, 0)
    }

    const unitPerItem = (id) => {
        return cartList.find((item) => item.id === id).quantity;
    }

    return (
        <CartContext.Provider value={{
            products: cartList,
            addToCart,
            emptyCart,
            deleteById,
            totalCount,
            totalAmount,
            unitPerItem

        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;