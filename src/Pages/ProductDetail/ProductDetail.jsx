import React, { useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './ProductDetail.module.css'
import  {useParams} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import ProductCard from '../../components/Product/ProductCard'
import { productUrl } from '../../Api/endPoints'

function ProductDetail() {
    const [product, setproduct] = useState({})
    const [isLoading, setisLoading] = useState(false)
    const { productId } = useParams();
  useEffect (() => {
    axios.get(`${productUrl}/products/${productId}`)
    .then((res)=>{
      setproduct(res.data)
      setisLoading(false)
    }).catch((err)=>{
      console.log(err)
      setisLoading(false)
    })
  }, [])
  return (
    <Layout>
      {isLoading ? <Loader /> : <ProductCard 
      product={product}
      flex ={true}
      renderDesc={true}
      renderAdd={true}
      />}
    </Layout>
  );
}

export default ProductDetail
