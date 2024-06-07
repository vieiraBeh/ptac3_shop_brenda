'use client'
import Image from "next/image";
import styles from "./main.module.css"
import { useEffect, useState } from "react";

export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  useEffect( ()=> {
    const getProduct = async () =>{
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json();  
    setListProduct(data);
    }
    getProduct();
  }, []);

  const orderAZ = () =>{
    const newList = [...listProduct].sort( (a,b)=>
      a.title.localeCompare(b.title)
    );
    setListProduct(newList);
  }

  const orderZA = () =>{
    let newList = [...listProduct].sort( (a,b)=>
      a.title.localeCompare(b.title)
    );
    newList = newList.reverse();
    setListProduct(newList);
  }

  return (
    <>

    <div>
      <button onClick={orderAZ}>A-Z</button>
      <button onClick={orderZA}>Z-A</button>
    </div>
    <main className={styles.main}>
      {listProduct.map((products) =>

        <div className={styles.card} key={products.id}>
          <p>{products.title}</p>
          <p>{products.price}</p>
          <p>{products.description}</p>
          <p>{products.category}</p>
          <p>{products.rating.count}</p>
          
          <Image src={products.image}
            width={100}
            height={100} alt="product image" />
        </div>
      )};
    </main>
    </>
  );
}