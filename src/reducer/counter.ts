//action type 선언
const INCRESE = 'counter/INCRESE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//action 생성 함수 선언
export const increase = () => ({ type: INCRESE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff, // action 의 parameter
});

//action 객체 타입 준비
type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>;

//상태 타입과 상태 초기값 선언
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

//리듀서
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCRESE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
