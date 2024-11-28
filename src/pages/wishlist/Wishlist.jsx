import React, { useEffect, useState } from "react";
import styles from './Wishlist.module.scss'
import { FaHeartCircleMinus } from "react-icons/fa6";

const Wishlist = () => {
    const [wish, setwish] = useState([]);

    useEffect(() => {
        const storedwish = JSON.parse(localStorage.getItem("wish")) || [];
        setwish(storedwish);
    }, []);

    
    const removeFromwish = (index) => {
        const updatedwish = [...wish];
        updatedwish.splice(index, 1); 
        setwish(updatedwish);
        localStorage.setItem("wish", JSON.stringify(updatedwish)); 
    };

 

    return (
       <>
        <div className={styles.wish}>
            <h2>WISH</h2>
            
                <div className={styles.main}>
                    <div className={styles.wishItems}>
                        {wish.map((product, index) => (
                            <div key={index} className={styles.wishItem}>
                                {product.images && product.images.length > 0 && (
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        width="100"
                                        className={styles.wishImage}
                                    />
                                )}
                                <h5>{product.title}</h5>
                                <span>${product.price}</span>
                                
                             
                                
                                <button className={styles.remove} onClick={() => removeFromwish(index)}><FaHeartCircleMinus /></button>
                            </div>
                        ))}
                    </div>
                   
                </div>
            
        </div>
       </>
    );
};

export default Wishlist;