import styles from "./fooditem.module.css";

export default function FoodItem({ food, setfoodId }) {
  return (
    <div className={styles.itemContainer}>
      {/* TheMealDB uses strMealThumb for image */}
      <img
        className={styles.itemImage}
        src={food.strMealThumb}
        alt={food.strMeal}
      />

      <div className={styles.itemContent}>
        {/* TheMealDB uses strMeal for title */}
        <p className={styles.itemName}>{food.strMeal}</p>
      </div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => {
            // TheMealDB uses idMeal as the ID
            setfoodId(food.idMeal);
          }}
          className={styles.itemButton}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
