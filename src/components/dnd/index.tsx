// lists
export interface List {
  board_no: number;
  title: string;
  cards_list_no: number;
}

// cards
export interface Card {
  card_no: number;
  contents: string;
  card_list_no: number;
  board_no: number;
}

export interface CardListProps {
  lists: List[];
  cards: Card[];
}
