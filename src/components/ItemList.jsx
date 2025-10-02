import React from "react";
import styles from "./fooditem.module.css";

export default function ItemList({ food, isLoading }) {
  if (isLoading) return <p>Loading ingredients...</p>;

  // If food is an array of ingredients (from getIngredients in FoodDetails)
  const ingredients = Array.isArray(food) ? food : []; // fallback if empty

  return (
    <div className={styles.buttonContainer}>
      {ingredients.map((item, index) => (
        <div key={index} className={styles.itemContainer}>
          <div className={styles.itemContent}>
            <p className={styles.itemName}>{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
