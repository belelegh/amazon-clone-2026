
// CategoryCard.jsx - Fixed property name mismatch
import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  // Add validation to prevent errors
  // if (!data) {
  //   return null;
  // }

  return (
    <div className={classes.category}>
      {/* Use Link instead of anchor for React Router */}
      <Link to={`/category/${data.id}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        {/* Fixed: Changed data.imgLink to data.imageLink */}
        <img
          src={data.imageLink}
          alt={data.title || "Category image"}
          // loading="lazy" // Added for better performance
        />
        <p>{data.name || "Shop now"}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;

