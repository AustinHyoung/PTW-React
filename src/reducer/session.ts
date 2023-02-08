const SESSION_INFO = 'session/SESSION_INFO' as const;

export const sessionInfo = () => ({ type: SESSION_INFO });

type SessionAction = ReturnType<typeof sessionInfo>;

type SessionState = {
  session: string;
};

const initialState: SessionState = {
  session: '',
};

function session(state: SessionState = initialState, action: SessionAction) {
  switch (action.type) {
    case SESSION_INFO:
      return { session: state.session };
    default:
      return state;
  }
}

export default session;
