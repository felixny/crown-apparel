import './cart-dropdown.styles.scss';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartProvider';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    console.log(cartItems);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' > 
            {cartItems.map((item) =>(
                <CartItem key={item.id} CartItem={item} />
            ))}
            </div>
            <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown;