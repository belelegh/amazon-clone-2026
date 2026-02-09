import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { Link } from "react-router-dom"; // Added for SPA navigation

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  // Use useContext with DataContext - ensure you're getting state and dispatch
  const { state, dispatch } = useContext(DataContext);
  const addToCart = () => {

    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        id,
        title: title || "Untitled Product",
        price: price || 0,
        image: image || "",
        description: description || "",
        rating: rating || { rate: 0, count: 0 },
      },
    });

  };

  // Check if product is already in cart
  const isInCart = state?.basket?.some((item) => item.id === id);

  return (
    <div
      className={`${classes.card_container} ${ flex?classes.product_fixed : "" }`}
    >
      {/* Use Link instead of anchor for SPA navigation */}
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={title || "Product image"}
          className={classes.img_container}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
      </Link>
      <div className={classes.product_info}>
        <h3 className={classes.product_title}>{title || "Untitled Product"}</h3>

        {renderDesc && (
          <div style={{ maxWidth: "700px" }} className={classes.description}>
            {description || "No description available"}
          </div>
        )}

        <div className={classes.rating}>
          <Rating
            value={rating?.rate || 0}
            precision={0.1}
            readOnly
            size="small"
          />
          <small className={classes.rating_count}>
            ({rating?.count || 0} reviews)
          </small>
        </div>

        <div className={classes.price}>
          <CurrencyFormat amount={price || 0} />
        </div>

      {
        renderAdd &&   <button
          className={`${classes.button} ${isInCart ? classes.in_cart : ""}`}
          onClick={addToCart}
          disabled={isInCart} // Optional: disable if already in cart
          aria-label={`Add ${title} to cart`}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      }

        {isInCart && (
          <div className={classes.cart_indicator}>✓ Item in cart</div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;


// import React, { useContext } from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./product.module.css";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataContext";
// import { Type } from "../../utility/action.type";

// function ProductCard({ product, flex, renderDesc, renderAddBtn }) {
//   const { id, image, title, rating, price, description } = product || {};

//   // const { dispatch } = useContext(DataContext);

//   const addToCart = () => {
//     console.log("ADD TO CART CLICKED", product);

//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: {
//         id,
//         image,
//         title,
//         rating,
//         price,
//         description,
//       },
//     });
//   };

//   return (
//     <div
//       className={`${classes.card__container} ${
//         flex ? classes.product__flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div>
//         <h3>{title}</h3>

//         {renderDesc && <p>{description}</p>}

//         <div className={classes.flexRow}>
//           {rating && (
//             <div className={classes.rating}>
//               <Rating value={rating.rate} precision={0.1} readOnly />
//               <small>{rating.count}</small>
//             </div>
//           )}

//           <CurrencyFormat amount={price} />
//         </div>

//         {renderAddBtn && (
//           <button className={classes.add_button} onClick={addToCart}>
//             Add to cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;





// import React, { useContext } from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./product.module.css";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataContext";
// import { Type } from "../../Utility/action.type";

// function ProductCard({ product, flex, renderDesc, renderAddBtn }) {
//   const { id, image, title, rating, price, description } = product;

//   const { dispatch } = useContext(DataContext);

//   const addToCart = () => {
//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: product,
//     });
//   };

//   return (
//     <div
//       className={`${classes.card__container} ${
//         flex ? classes.product__flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div>
//         <h3>{title}</h3>

//         {renderDesc && (
//           <div style={{ maxWidth: "700px" }}>{description}</div>
//         )}

//         <div className={classes.flexRow}>
//           <div className={classes.rating}>
//             <Rating value={rating.rate} precision={0.1} readOnly />
//             <small>{rating.count}</small>
//           </div>

//           <CurrencyFormat amount={price} />
//         </div>

//         {renderAddBtn && (
//           <button
//             className={classes.add_button}
//             onClick={addToCart}
//           >
//             Add to cart
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;











// import React, { useContext } from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./product.module.css";
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/DataContext";
// import { Type } from "../../Utility/action.type";

// function ProductCard({ product, flex, renderDesc, renderAddBtn }) {
//   const { id, image, title, rating, price, description } = product;

//   const { state, dispatch } = useContext(DataContext);
//   const { basket, user } = state;
//   // const { state, dispatch } = useContext(DataContext);
//   // In ProductCard.jsx, add this prop
// // import React from "react";
// // import classes from "./ProductCard.module.css";
// const addToCart = (p) => {
//   dispatch({
//     type: Type.ADD_TO_BASKET,
//     item: product,
//   });
// };

// function ProductCard({ product, renderAdd, onAddToCart }) {
//   return (
//     <div className={classes.product_card}>
//       <img src={product.image} alt={product.title} />
//       <h3>{product.title}</h3>
//       <p>${product.price}</p>
      
//       {renderAdd && (
//         <button 
//           className={classes.add_button}
//           onClick={onAddToCart}
//         >
//           Add to Cart
//         </button>
//       )}
//     </div>
//   );
// }

// // export default ProductCard;

//   // const addToCart = () => {
//   //   dispatch({
//   //     type: Type.ADD_TO_BASKET,
//   //     item: { id, image, title, rating, price, description },
//   //   });
//   // };

//   return (
//     <div
//       className={`${classes.card__container} ${
//         flex ? classes.product__flexed : ""
//       }`}
//     >
//       <Link to={`/products/${id}`}>
//         <img src={image} alt={title} />
//       </Link>

//       <div>
//         <h3>{title}</h3>

//         {renderDesc && <div style={{ maxWidth: "700px" }}>{description}</div>}

//         {/* Rating + price */}
//         <div className={classes.flexRow}>
//           <div className={classes.rating}>
//             <Rating value={rating.rate} precision={0.1} readOnly />
//             <small>{rating.count}</small>
//           </div>

//           <CurrencyFormat amount={price} />
//         </div>

//         {/* Add To Cart Button */}
//         <div className={classes.buttonRow}>
//           {renderAddBtn && (
//             <button className={classes.add_button} onClick={addToCart}>
//               Add to cart
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;




// import React, { useContext } from "react";
// import Rating from "@mui/material/Rating";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import classes from "./Product.module.css";
// import { DataContext } from "../DataProvider/DataProvider";
// import { Type } from "../../Utility/action.type";
// import { Link } from "react-router-dom"; // Added for SPA navigation

// function ProductCard({ product, flex, renderDesc, renderAdd }) {
//   const { image, title, id, rating, price, description } = product;

//   // Use useContext with DataContext - ensure you're getting state and dispatch
//   const { state, dispatch } = useContext(DataContext);
//   const addToCart = () => {

//     dispatch({
//       type: Type.ADD_TO_BASKET,
//       item: {
//         id,
//         title: title || "Untitled Product",
//         price: price || 0,
//         image: image || "",
//         description: description || "",
//         rating: rating || { rate: 0, count: 0 },
//       },
//     });

//   };

//   // Check if product is already in cart
//   const isInCart = state?.basket?.some((item) => item.id === id);

//   return (
//     <div
//       className={`${classes.card_container} ${ flex?classes.product_fixed : "" }`}
//     >
//       {/* Use Link instead of anchor for SPA navigation */}
//       <Link to={`/products/${id}`}>
//         <img
//           src={image}
//           alt={title || "Product image"}
//           className={classes.img_container}
//           onError={(e) => {
//             e.target.onerror = null;
//             e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
//           }}
//         />
//       </Link>
//       <div className={classes.product_info}>
//         <h3 className={classes.product_title}>{title || "Untitled Product"}</h3>

//         {renderDesc && (
//           <div style={{ maxWidth: "700px" }} className={classes.description}>
//             {description || "No description available"}
//           </div>
//         )}

//         <div className={classes.rating}>
//           <Rating
//             value={rating?.rate || 0}
//             precision={0.1}
//             readOnly
//             size="small"
//           />
//           <small className={classes.rating_count}>
//             ({rating?.count || 0} reviews)
//           </small>
//         </div>

//         <div className={classes.price}>
//           <CurrencyFormat amount={price || 0} />
//         </div>

//       {
//         renderAdd &&   <button
//           className={`${classes.button} ${isInCart ? classes.in_cart : ""}`}
//           onClick={addToCart}
//           disabled={isInCart} // Optional: disable if already in cart
//           aria-label={`Add ${title} to cart`}
//         >
//           {isInCart ? "Added to Cart" : "Add to Cart"}
//         </button>
//       }

//         {isInCart && (
//           <div className={classes.cart_indicator}>✓ Item in cart</div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
