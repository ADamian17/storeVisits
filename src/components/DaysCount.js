import React from 'react'

const DaysCount = props => {


  return (
   <> 
    <h1>Date <small>{props.daysCount.date}</small></h1>
    <h1>Store counts <small>{props.daysCount.in_count}</small></h1>
  </>  
  )
} 

export default DaysCount;