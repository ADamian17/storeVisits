import React from 'react'


// class  DaysCount extends Component {

//   state = {
//     chartData: this.props.data
//   }
  
  
// render () {
//   if (!this.props.data.in_count) {
//     return (
//       <div className="row">
//         <div className="col"></div>
//         <div className="col-9 text-center">
//           <div className="spinner-border " role="status">
//            <span className="sr-only">...Loading...</span>
//          </div>
//         </div>
//         <div className="col"></div>
//       </div>
//     )
//   }
//   console.log(this.state)
//   return (
//    
//   )
// }
// } 

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
  </>  
  )
} 

export default DaysCount;