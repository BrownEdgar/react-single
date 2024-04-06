import Actions from "./actionTypes";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen"
  },
  arr: [154,42,1,87,695,36,2,10,39,9]
}

const shuffle = (array)=>{
  for(let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]]
  }
  return array
}

const reducer = (state = initialState, action)=>{
  switch (action.type) {
    case Actions.ADD: return {...state, arr: [...state.arr, action.payload]};
    case Actions.SHUFFLE: return {...state, arr : shuffle(state.arr)};
    case Actions.DELETE: return {...state, arr: state.arr.filter(elem=>elem>10)}
    // case "changeName": console.log(action.payload)
     
    default: return state
  }
} 

export default reducer