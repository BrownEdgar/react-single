export const initialState = []


function blogReducer(state = initialState, action) {
  switch (action.type) {
    case "add_blogs": return action.payload
    default: return state
  }

}
export default blogReducer;