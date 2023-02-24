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
          {sliceDescription(itemProps.item.description)}
        </div>
      </div>
    </div>
  );
}

const sliceDescription = (entries: string[]): string => {
  const descriptionSliceIndex = 100;
  if (entries.length < 1) return "";
  const firstEntry = entries[0];
  const indexDot = firstEntry.indexOf(".");
  const index = indexDot === -1 ? descriptionSliceIndex : indexDot;
  return firstEntry.slice(0, index);
};
