'use client'
import Image from "next/image";
import styles from "./main.module.css"
import { useEffect, useState } from "react";
import ErrorGetData from "./ErrorGetData";

export default function Main() {

  const [listProduct, setListProduct] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  const [errorFetch, setErrorFetch] = useState(false);

  useEffect( ()=> {
    const getProduct = async () =>{
      try {
    const response = await fetch("https://fakestoreapi.com/products/")
    const data = await response.json();  
    setListProduct(data);
    setListComplete(data);
      }catch{
        setErrorFetch(true);
      }
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

  const orderCrescente = () => {
    let newList = [...listProduct].sort((a,b) => a.price-b.price);
    setListProduct(newList);
  }

  const orderDecrescente = () => {
    let newList = [...listProduct].sort((a,b) => a.price-b.price);
    newList = newList.reverse();
    setListProduct(newList);
    }

    const searchText = (text) => {
      setSearch(text);

      if (text.trim() == ""){
        setListProduct(listComplete);
        return
      }

      const newList = listProduct.filter((product) =>
        product.title.toUpperCase().trim().includes(search.toUpperCase().trim()));
      setListProduct(newList);
    }

    if(errorFetch == true){
      return <ErrorGetData />
    }

    if(listProduct[0] == null){
      return <Spinner />
    }

  return (
    <>

    <div className={styles.nav}>
      <input className={styles.input} type="text" value={search} placeholder="Pesquisar Produto" onChange={(event) => searchText(event.target.value)}/>
      <button onClick={orderAZ}>A-Z</button>
      <button onClick={orderZA}>Z-A</button>
      <button onClick={orderCrescente}>Barato - Caro</button>
      <button onClick={orderDecrescente}>Caro - Barato</button>
    </div>

    <main className={styles.main}>
      {listProduct.map((products) =>

        <div className={styles.card} key={products.id}>
          <p className={styles.titulo}>{products.title}</p>
          <Image src={products.image}
            width={100}
            height={100} alt="product image" />
          <p className={styles.preco}>{products.price}</p>
          <p className={styles.descricao}>{products.description}</p>
          <p className={styles.categoria}>{products.category}</p>
          <p className={styles.avaliacao}>{products.rating.count} Estrelas</p>
          
          
        </div>
      )};
    </main>
    </>
  );
}