import { ItemProps } from "./types";

export function SingleItem(itemProps: ItemProps) {
  const handleClick = () => {
    console.log(itemProps);
  };

  return (
    <div onClick={handleClick}>
      Title: {itemProps.item.title} Description: {itemProps.item.description}
    </div>
  );
}
