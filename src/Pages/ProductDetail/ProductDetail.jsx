import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productURL } from "../../API/EndPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [IsLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const res = await axios.get(`${productURL}/products/${productId}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [productId]);

  return IsLoading ? (
    <Loader />
  ) : product ? (
    <ProductCard
      product={product}
      flex={true}
      renderDesc={true}
      renderAddBtn={true}
    />
  ) : (
    <p>No product found.</p>
  );
}

export default ProductDetail;

// import React, { useEffect } from 'react'
// import Layout from '../../components/Layout/Layout'
// import classes from './ProductDetail.module.css'
// import  {useParams} from 'react-router-dom'
// import axios from 'axios'
// import { useState } from 'react'
// import ProductCard from '../../components/Product/ProductCard'
// import { productUrl } from '../../Api/endPoints'

// function ProductDetail() {
//     const [product, setproduct] = useState({})
//     const [isLoading, setisLoading] = useState(false)
//     const { productId } = useParams();
//   useEffect (() => {
//     axios.get(`${productUrl}/products/${productId}`)
//     .then((res)=>{
//       setproduct(res.data)
//       setisLoading(false)
//     }).catch((err)=>{
//       console.log(err)
//       setisLoading(false)
//     })
//   }, [])
//   return (
//     <Layout>
//       {isLoading ? <Loader /> : <ProductCard 
//       product={product}
//       flex ={true}
//       renderDesc={true}
//       renderAdd={true}
//       />}
//     </Layout>
//   );
// }

// export default ProductDetail
