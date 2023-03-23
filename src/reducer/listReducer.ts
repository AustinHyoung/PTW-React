const SET_LIST = 'storage/SET_LIST' as const;

export type ListProps = {
  email: string;
  nickname: string;
};

export const setList = (diff: ListProps) => ({
  type: SET_LIST,
  payload: diff,
});

type ListAction = ReturnType<typeof setList>;

type ListState = {
  data: ListProps | null;
};

export const initialState: ListState = {
  data: null,
};

export const listReducer = (state: ListState = initialState, action: ListAction) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
