import { InfoProps } from '../action/info-actions';

export type InfoState = {
  data: InfoProps | null;
};

export const initialState: InfoState = {
  data: null,
};
