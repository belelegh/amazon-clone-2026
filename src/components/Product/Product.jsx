
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from './Product.module.css'
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        isLoading(false)
      })
  }, []);
  return (
    <>
      {isLoading ? (<Loader />) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) =>{
           return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />;
          })}
        </section>
      )}
    </>
  );
}

export default Product;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from './Product.module.css'
// import Loader from "../Loader/Loader";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [cart, setCart] = useState([]); // Added cart state

//   useEffect(() => {
//     setIsLoading(true);
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // Fixed: should be setIsLoading
//       });
//   }, []);

//   // Function to add item to cart
//   const addToCart = (product) => {
//     setCart(prevCart => {
//       // Check if product already exists in cart
//       const existingItem = prevCart.find(item => item.id === product.id);
      
//       if (existingItem) {
//         // If exists, increase quantity
//         return prevCart.map(item =>
//           item.id === product.id 
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // If new, add to cart with quantity 1
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
    
//     // Optional: Show a notification or feedback
//     alert(`${product.title} added to cart!`);
//   };

//   // Function to handle add button click
//   const handleAddButtonClick = (product) => {
//     addToCart(product);
//   };

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           {/* Cart Summary (Optional) */}
//           {cart.length > 0 && (
//             <div className={classes.cart_summary}>
//               <p>Items in cart: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
//               <button 
//                 className={classes.view_cart_btn}
//                 onClick={() => console.log("Cart:", cart)}
//               >
//                 View Cart ({cart.length} items)
//               </button>
//             </div>
//           )}

//           <section className={classes.products_container}>
//             {products?.map((singleProduct) => (
//               <ProductCard 
//                 renderAdd={true} 
//                 product={singleProduct} 
//                 key={singleProduct.id}
//                 onAddToCart={() => handleAddButtonClick(singleProduct)}
//               />
//             ))}
//           </section>
//         </>
//       )}
//     </>
//   );
// }

// export default Product;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from './Product.module.css'
// import Loader from "../Loader/Loader";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data)
//         setIsLoading(false)
//       })
//       .catch((err) => {
//         console.log(err)
//         isLoading(false)
//       })
//   }, []);
//   return (
//     <>
//       {isLoading ? (<Loader />) : (
//         <section className={classes.products_container}>
//           {products?.map((singleProduct) =>{
//            return  <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />;
//           })}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product;