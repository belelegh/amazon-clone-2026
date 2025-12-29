

// Category.jsx - Fixed with proper imports and error handling
import React from "react";
import { CategoryInfos } from "./categoryFullinfos"; // Fixed import path
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
  // Add validation for CategoryInfos
  if (!CategoryInfos || !Array.isArray(CategoryInfos)) {
    console.error("CategoryInfos is not defined or not an array");
    return (
      <section className={classes.category_container}>
        <div className={classes.error_message}>
          <p>Categories are currently unavailable</p>
        </div>
      </section>
    );
  }

  if (CategoryInfos.length === 0) {
    return (
      <section className={classes.category_container}>
        <div className={classes.empty_message}>
          <p>No categories found</p>
        </div>
      </section>
    );
  }

  return (
    <section className={classes.category_container}>
      {CategoryInfos.map((infos) => {
        // Validate each item before rendering
        if (!infos || !infos.id || !infos.title || !infos.imageLink) {
          console.warn("Invalid category data:", infos);
          return null; // Skip invalid items
        }

        return <CategoryCard key={infos.id} data={infos} />;
      })}
    </section>
  );
}

export default Category;
