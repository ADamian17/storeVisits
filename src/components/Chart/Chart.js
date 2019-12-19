import React, {Component} from 'react'
import { HorizontalBar } from 'react-chartjs-2';


class Chart extends Component {

   state = {
     chartdata: {
       labels: ["jax", "daisy", "Adonis", "Margot" ],
       datasets: [{
         label: "in_count",
         data: [5, 3, 20, 25 ],
         backgroundColor: 'black'
       }] 
     },
   }

  render () {
    return (
      <div className="container">
       <HorizontalBar
       data={this.state.chartdata} 
        options={{
          legend:{
            display: true,
          } 
        }}  
       />
      </div>
    )
  }
} 

export default Chart; 