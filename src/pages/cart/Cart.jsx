import React, { useEffect, useState } from "react";
import styles from '../cart/Cart.module.css'
import { MdDeleteSweep } from "react-icons/md";
import Header from '../../components/header/Header'

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

   
    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); 
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

   
    const decreaseQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
        } else {
            updatedCart.splice(index, 1); 
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    };

   
    const increaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    };



    return (
       <>
        <div className={styles.cart}>
            <h2>Cart</h2>
            
                <div className={styles.main}>
                    <div className={styles.cartItems}>
                        {cart.map((product, index) => (
                            <div key={index} className={styles.cartItem}>
                                {product.images && product.images.length > 0 && (
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        width="100"
                                        className={styles.cartImage}
                                    />
                                )}
                                <h5>{product.title}</h5>
                                <span>${product.price}</span>
                                
                               
                                <div className={styles.quantity}>
                                    <button onClick={() => decreaseQuantity(index)}>-</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => increaseQuantity(index)}>+</button>
                                </div>
                                
                                <button className={styles.remove} onClick={() => removeFromCart(index)}><MdDeleteSweep /></button>
                            </div>
                        ))}
                    </div>
                </div>
            
        </div>
       </>
    );
};

export default Cart;