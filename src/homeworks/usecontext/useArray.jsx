import React, { useState } from 'react'

export default function useArray(Arr) {
  const [array, setArray] = useState(Arr)
  
  const push = (a) =>setArray([...array, a])
  const filter = (cb) =>setArray(array.filter(cb))
  const remove = (n) =>setArray(array.toSpliced(n, 1))
  const clear = () =>setArray([])
  const set = (arr)=>setArray(arr)
  const update = (x,y) =>setArray(array.with(x,y))
  return ({array, push, filter, remove, clear, set, update })
}
