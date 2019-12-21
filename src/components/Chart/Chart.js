import React, {Component} from 'react'
import { HorizontalBar } from 'react-chartjs-2';


class Chart extends Component {

   state = {
     chartdata: {
       labels: [],
       datasets: [{
         label: "in_count",
         data: [],
         backgroundColor: 'black'
       }] 
     }
   }

   componentDidUpdate (prevState) {
    //  console.log(prevState.chartData)
     if (this.props.chartData.length !== prevState.chartData.length ){
      this.setData()
      return 
     }  
   }
  //  || (prevState !== undefined && this.props.chartData.length !== prevState.chartdata.labels.length) 
   
   setData = () => {
     let labels = [];
     let values = [];
     this.props.chartData.map( (item) => {
       values.push(item.in_count)
       labels.push(item.date)
     }) 
    //  ejemplo 1
    //  this.state.chartdata.labels = labels
    //  this.state.chartdata.datasets[0].data = values
     this.setState({
      //  chartdata: this.state.chartdata
      //  ejemplo 2
      chartdata: {
        labels: labels,
        datasets: [{
          label: "in_count",
          data: values,
          backgroundColor: 'black'
        }] 
      }
     })
   }

  render () { 
    if (!this.props.chartData && this.state.chartdata) {
      return (
        <div className="row align-items-center">
          <div className="col"></div>
          <div className="col-9 text-center">
            <div className="spinner-border " role="status">
             <span className="sr-only">...Loading...</span>
           </div>
          </div>
          <div className="col"></div>
        </div>
      )
    }
    return (
     <> 
      <div className="row">
        <div className="col"></div>
        <div className="col-9">
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
        </div>
        <div className="col"></div>
      </div>
    </>  
    )
  }
} 

export default Chart; 