import React from 'react'
import './DaysCount.css'

const DaysCount = props => {
   
  const bar = {
    width: `${props.daysCount.in_count}px`,
    height: `20px`,
    backgroundColor: `#000000`,
  }
  
  const strDate = props.daysCount.date
  // const date = props.daysCount.date.split('-')
  // const newDate = new Date(date[1] -1, date[2])
  // newDate.toString()
  // console.log(newDate)
  const storeCount = props.daysCount.in_count

  return (
    <> 
      <div className="card">
        <div className="card-body">
          <div className="row justify-content-center">
            <div className="col-3">
            <h5 className="card-title text-center mt-2">{strDate}</h5>
            </div>
            <div className="col-6" >
              <div className="mt-2 pogressBar" style={bar}></div>
            </div>
            <div className="col-3">
            <h5 className="card-title mt-2 text-center">{storeCount}</h5>
            </div>
          </div>
        </div>
      </div>    
    </>  
  )
} 

export default DaysCount;