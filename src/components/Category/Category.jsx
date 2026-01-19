import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import classes from "./CategoryCard.module.css";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Get category names
        const res = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );

        // For each category, get ONE representative product
        const categoryData = await Promise.all(
          res.data.map(async (category) => {
            const productRes = await axios.get(
              `https://fakestoreapi.com/products/category/${category}?limit=1`
            );

            return {
              title: category,
              image: productRes.data[0]?.image,
            };
          })
        );

        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={classes.categoryWrapper}>
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          data={{
            title: category.title,
            image: category.image,
          }}
        />
      ))}
    </div>
  );
}

export default Category


// import React from "react";
// import { CategoryInfos } from "./categoryFullinfos"; // Fixed import path
// import CategoryCard from "./CategoryCard";
// import classes from "./Category.module.css";

// function Category() {
//   // Add validation for CategoryInfos
//   if (!CategoryInfos || !Array.isArray(CategoryInfos)) {
//     console.error("CategoryInfos is not defined or not an array");
//     return (
//       <section className={classes.category_container}>
//         <div className={classes.error_message}>
//           <p>Categories are currently unavailable</p>
//         </div>
//       </section>
//     );
//   }

//   if (CategoryInfos.length === 0) {
//     return (
//       <section className={classes.category_container}>
//         <div className={classes.empty_message}>
//           <p>No categories found</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className={classes.category_container}>
//       {CategoryInfos.map((infos) => {
//         // Validate each item before rendering
//         if (!infos || !infos.id || !infos.title || !infos.imageLink) {
//           console.warn("Invalid category data:", infos);
//           return null; // Skip invalid items
//         }

//         return <CategoryCard key={infos.id} data={infos} />;
//       })}
//     </section>
//   );
// }

// export default Category;
