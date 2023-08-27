import React from 'react'
import { useState,useEffect } from 'react'
const DateTime = () => {
    var [date,setDate] = useState(new Date())
    useEffect(() => {
        var timer = setInterval(()=> setDate(new Date()), 1000)

        return function() {
            clearInterval(timer)
        }
    })
  return (
    <div>
        Date: {date.toLocaleDateString()}
    </div>
  )
}

export default DateTime