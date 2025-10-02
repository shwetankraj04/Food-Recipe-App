import styles from "./item.module.css";

export default function Item({ item }) {
  const ingredientName = item.split(" - ")[0];
  const measure = item.split(" - ")[1];

  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={`https://www.themealdb.com/images/ingredients/${ingredientName}-Small.png`}
            alt={ingredientName}
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{ingredientName}</div>
          <div className={styles.amount}>{measure}</div>
        </div>
      </div>
    </div>
  );
}
