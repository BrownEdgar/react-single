export const initialState = {
  data: [],
  filteredData: [],
  filter: 'all',
  searchValue: '',
  faundCount: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add-posts': return { ...state, data: action.payload, filteredData: action.payload, faundCount: action.payload.length }
    case 'all-done': return allDone(state)
    case 'set-filter': return setFilterAndUpdate(state, action)
    case 'set-searchValue': return { ...state, searchValue: action.payload }
    case 'filter-by-value': return {
      ...state,
      filteredData: state.data.filter(todo => todo.title.includes(state.searchValue))
    }
    case 'update-count': return { ...state, faundCount: state.filteredData.length }
    default: return state
  }
}

const allDone = (state) => {
  const result = state.data.map(elem => {
    if (!elem.completed) {
      elem.completed = true;
    }
    return elem;
  });
  return { ...state, data: result }
}
export const getCurrentData = (state, filter) => {
  if (filter === 'all') return state;
  return (filter === 'complited')
    ? state.filter(elem => elem.completed)
    : state.filter(elem => !elem.completed)
}

const setFilterAndUpdate = (state, action) => {
  return {
    ...state,
    filter: action.payload,
    filteredData: getCurrentData(state.data, action.payload)
  }
}



export default reducer