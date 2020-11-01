export const initialState = {
  currentPage: '来创作个故事',
}

export type State = typeof initialState

export type Action = { type: 'SET_CURRENT_PAGE'; payload: string}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload }
  }
}
