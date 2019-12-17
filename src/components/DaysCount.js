import React from 'react'


const DaysCount = props => {

  if (!props.daysCount.in_count) {
    return (
      <div className="row align-items-center">
        <div className="col">
          <div className="spinner-border text-center" role="status">
           <span className="sr-only">...Loading...</span>
         </div>
        </div>
      </div>
    )
  }

  return (
   <> 
    <h1>Date <small>{props.daysCount.date}</small></h1>
    <h1>Store counts <small>{props.daysCount.in_count}</small></h1>
  </>  
  )
} 

export default DaysCount;