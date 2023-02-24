import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { SingleItem } from "./SingleItem";
import { fetchConditions } from "./utils";
import styles from "./ItemGroup.module.scss";

interface ItemGroupProps {
  title: string;
}

export function ItemGroup(props: ItemGroupProps) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchConditions());
    // ! dispatch doesn't change between re-renders, using empty array to run
    // ! only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const list = useAppSelector((state: RootState) => state.items.items);

  return (
    <div className={styles.group}>
      <h1 className={styles.title}>{props.title}</h1>
      <ul className={styles["item-list"]}>
        {list.map((item) => (
          <SingleItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}
