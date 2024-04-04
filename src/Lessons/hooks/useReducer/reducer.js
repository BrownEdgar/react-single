import Actions from './actionTypes';

export const initialStateValue = {
  posts: [],
  data: [21, 455, 78, 6, 59, 5, 65,],
  count: 0,
  total: 0
}

const reducer = (state = initialStateValue, action) => {
  switch (action.type) {
    case Actions.ADD: return {
      ...state,
      data: [...state.data, action.payload]
    }
    case Actions.SORT: return total(state)
    case Actions.ADD_POSTS: return {
      ...state,
      posts: action.payload
    }

    default: return state
  }

}

const total = (state) => {
  state.total = state.data.reduce((a, b) => a + b)
  return { ...state }
}

export default reducer