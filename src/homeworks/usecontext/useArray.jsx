import React, { useState } from 'react'

export default function useArray(Arr) {
  const [array, setArray] = useState(Arr)
  const push = (a) =>setArray([...array, a])
  const filter = () =>setArray(array.filter(n => n <= 3))
  const remove = (n) =>setArray(array.slice(0,n).concat(array.slice(-(array.length-n-1))))
  const clear = () =>setArray([])
  const set = ([n,m])=>setArray([n,m])
  const update = (x,y) =>setArray([array.fill(y,x,x+1)])
  return ({array, push, filter, remove, clear, set, update })
}
