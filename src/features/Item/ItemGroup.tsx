import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { SingleItem } from "./SingleItem";
import { Item, ItemProps } from "./types";

export function ItemGroup() {
  const dispatch = useAppDispatch();
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
