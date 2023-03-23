const SET_CARD = 'storage/SET_CARD' as const;

// export type CardProps = {
//   email: string;
//   nickname: string;
// };

export const setCard = (diff: any) => ({
  type: SET_CARD,
  payload: diff,
});

type CardAction = ReturnType<typeof setCard>;

type CardState = {
  data: any | null;
};

export const initialState: CardState = {
  data: null,
};

export const cardReducer = (state: CardState = initialState, action: CardAction) => {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
