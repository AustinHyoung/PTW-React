// lists

export interface List {
  board_no: number;
  title: string;
  cards_list_no: number;
}

export interface ListProps {
  lists: List[];
}
