import React, { useContext} from "react";
import './styles.css';
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import CartItem from "../cart-item";

const Sidebar = ({children, onClose, isOpen}) => {
    const { cart, total, onRemoveItem } = useContext(CartContext);
    return (
        <div 
        className="sidebar"
        style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        >
            <div className="close-button-container">
                <button onClick={onClose} className="close-button">X</button>
            </div>
            <div  className='cart-container'>
                {cart.length === 0 ? (
                <p className='empty-cart'>Tu carrito esta vacio</p>
                ) : (
                    cart.map((item) => (
                        <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
                    )
                ))}
                <p>Total:</p>
                <h2>${total}</h2>
            <Link to='/cart' className='button-cart'>Ir al Carrito</Link>
            </div>
        </div>
    )
}

export default Sidebar;