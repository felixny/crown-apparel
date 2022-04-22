import './checkout.styles.scss';
import { CartContext } from '../../contexts/CartProvider';
import { useContext } from 'react';

const Checkout = () => {

    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
    return (
        <div>
            <h1> check out</h1>
            <div>
                {cartItems.map((cartItem) => {
                    const { id, name, quantity } = cartItem;
                    return (<div key={id}>
                        <h2>{name} </h2>
                        <span>{quantity}</span>
                        <span onClick={()=> removeItemFromCart(cartItem) }>decrement </span>
                        <br/>
                        <span onClick={()=> addItemToCart(cartItem) }>increment </span>
                    </div>)
                })}
            </div>
        </div>
    );
};

export default Checkout;