import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
import { productURL } from "../../API/EndPoints";
import classes from "./Results.module.css";

function Result() {
  let { categoryName } = useParams();
  categoryName = decodeURIComponent(categoryName);

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${productURL}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryName]);

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <Loader />
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <p className={classes.emptyMessage}>
        No products found in <strong>{categoryName}</strong> category.
      </p>
    );
  }

  return (
    <section className={classes.resultsContainer}>
      <h1>Category Results</h1>
      <p className={classes.categoryHeader}>
        Category / <strong>{categoryName}</strong>
      </p>

      <div className={classes.resultsGrid}>
        {results?.slice(0, 6)?.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            renderDesc={false}
            renderAddBtn={true}
          />
        ))}
      </div>
    </section>
  );
}

export default Result;



// import React, { useEffect, useState } from "react";
// import classes from "./Result.module.css";
// import Layout from "../../components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import ProductCard from "../../components/Product/ProductCard";
// import Loader from "../../components/Loader/Loader";

// function Result() {
//   const [results, setResult] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null); // Add error state
//   const { categoryName } = useParams();

//   useEffect(() => {
//     setIsLoading(true);
//     setError(null); // Reset error on new request
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResult(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log(err);
//         setError("Failed to load products. Please try again.");
//         setIsLoading(false);
//       });
//   }, [categoryName]);

//   return (
//     <Layout>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category: {categoryName}</p>
//         <hr />
//         {isLoading ? (
//           <Loader />
//         ) : error ? (
//           <div style={{ textAlign: "center", padding: "40px", color: "red" }}>
//             {error}
//           </div>
//         ) : results.length === 0 ? (
//           <div style={{ textAlign: "center", padding: "40px" }}>
//             <p>No products found in this category.</p>
//           </div>
//         ) : (
//           <div className={classes.products_container}>
//             {results?.map((product) => (
//               <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true}/>
//             ))}
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// }

// export default Result;

// import React, { useEffect, useState } from "react";
// import classes from "./Result.module.css";
// import Layout from "../../components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoints";
// import ProductCard from "../../components/Product/ProductCard";
// import Loader from "../../components/Loader/Loader";
// function Result() {
//   const [results, setResult] = useState([]);
//   const { categoryName } = useParams();
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/category/${categoryName}`)
//       .then((res) => {
//         setResult(res.data);
//       })
//       .catch((res) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <Layout>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>/ategory {categoryName}</p>
//         <hr />
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <div className={classes.products_container}>
//             {results?.map((product) => (
//               <ProductCard
//               key={product.id}
//               // renderAdd={true}
//               product={product} />
//             ))}
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// };

// export default Result;
