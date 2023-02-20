export interface Item {
  title: string;
  description: string;
}

export interface ItemProps {
  item: Item;
}

export interface Condition {
  name: string;
  entries: string[];
}
