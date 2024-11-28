import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Products.module.scss'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(3)

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then((response) => {
                setProducts(response.data.products);
            })
    }, []);
    const addToCart = (product) => {
        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = currentCart.findIndex((item) => item.id === product.id);
        if (existingProductIndex >= 0) {
            currentCart[existingProductIndex].quantity += 1;
        } else {
            product.quantity = 1;
            currentCart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(currentCart));
    };



    const addToWish = (product) => {
        const currentWish = JSON.parse(localStorage.getItem("wish")) || [];
        const existingProductIndex = currentWish.findIndex((item) => item.id === product.id);
        if (existingProductIndex >= 0) {
            currentWish[existingProductIndex].quantity += 1;
        } else {
            product.quantity = 1;
            currentWish.push(product);
        }

        localStorage.setItem("wish", JSON.stringify(currentWish));
    };

    const lastIndex = currentPage* productsPerPage
    const firstIndex = lastIndex - productsPerPage
  
  
    let currentproducts= products.slice(firstIndex,lastIndex)
  
    console.log(currentproducts)
  
    let pages =[]
  
    for(let i=1 ; i<= Math.ceil(products.length/productsPerPage); i++){
      pages.push(i)
    }
  
  
  
  
  
      return (
        <>
      <div className={styles.prod}>
      <div className={styles.new}>
          <h3>Featured <span>Portfolio</span></h3>
          <nav>
            <ul>
              <li ><a className={styles.all} href="/">All</a></li>
              <li><a href="/">Packaging</a></li>
              <li><a href="/">Mockup</a></li>
              <li><a href="/">Typography</a></li>
              <li><a href="/">Photography</a></li>
            </ul>
          </nav>
          
        </div>
  
  
  
  
  
        <div className={styles.Products}>
          {currentproducts && currentproducts.map((product) => (
              <div key={product.id} className={styles.productsItem}>
                  {product.images && product.images.length > 0 && (
                      <img
                          src={product.images[0]}
                          alt={product.title}
                          width="100"
                          className={styles.productsImage}
                      />
                  )}
  
  <a href="/"><h5>{product.title}</h5></a>
   <p>{product.category}</p>
  
                  <div className={styles.button}>
    <button onClick={() => addToCart(product)}><FaCartShopping /></button>
                 <button onClick={() => addToWish(product)}><FaHeart /></button>
                  </div>
              </div>
          ))}
      </div>
      
  
  
  <div className={styles.pages}>
  {pages && pages.map(item => {
          return <button onClick={() => setCurrentPage(item)}>{item}</button>
        })}
  </div>
  
      </div>
        </>
      )
    };
    
    export default Products;