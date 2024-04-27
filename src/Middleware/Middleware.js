const myFirstMiddleWare = (store) => (next) => (action) => {
  console.log(new Date().toLocaleTimeString(), action.type)
  next(action)
}

const myFirstMiddleWare2 = (store) => (next) => (action) => {
  if (action.type === 'users/addUser') {
    action.payload += '!!'
  }
  next(action)
}


const Middleware = (getDefaultMiddleware) => getDefaultMiddleware().concat(myFirstMiddleWare, myFirstMiddleWare2);

export default Middleware