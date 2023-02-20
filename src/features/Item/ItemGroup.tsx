import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { SingleItem } from "./SingleItem";
import { fetchConditions } from "./utils";

export function ItemGroup() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchConditions());
    // ! dispatch doesn't change between re-renders, using empty array to run
    // ! only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const list = useAppSelector((state: RootState) => state.items);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <SingleItem key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
}
