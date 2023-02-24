import { ItemProps } from "./types";
import styles from "./SingleItem.module.scss";

export function SingleItem(itemProps: ItemProps) {
  const handleClick = () => {
    console.log(itemProps);
  };

  return (
    <div className={styles["single-item-container"]} onClick={handleClick}>
      <img
        className={styles.icon}
        src={itemProps.item.iconURL}
        alt={itemProps.item.title}
      ></img>
      <div className={styles["text-box"]}>
        <div className={styles["text-box-title"]}>{itemProps.item.title}</div>
        <div className={styles["text-box-description"]}>
          {itemProps.item.description}
        </div>
      </div>
    </div>
  );
}
