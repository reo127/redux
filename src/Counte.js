import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from './app/sclice/conterSclice'

const Counte = () => {
    const countNumber = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
   

    console.log(countNumber);
  return (
    <div>
        <button
        onClick={() => {dispatch(increment())}}
        >+</button>
        <p>{countNumber}</p>
        <button>-</button>
    </div>
  )
}

export default Counte