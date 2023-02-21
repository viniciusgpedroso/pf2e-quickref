import { ItemProps } from "./types";

export function SingleItem(itemProps: ItemProps) {
  const handleClick = () => {
    console.log(itemProps);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={itemProps.item.iconURL}
        alt={itemProps.item.title}
        width="50px"
      ></img>
      Title: {itemProps.item.title} Description: {itemProps.item.description}
    </div>
  );
}
