import React, { Component } from 'react';
import axios from 'axios';


import DaysCount from '../components/DaysCount';
// import Chart from '../components/Chart/Chart';


class StoreVcontainer extends Component {

  state = {
    chartData: [],
    token: '',
    requestedAt: '',
  }


  componentDidMount () {
    this.getData()
  }
   
  getData = async () => {

    const getToken = await axios.post("http://api.getdor.com/v1/tokens",
      {
        "refresh_token": "wSGgSqmSDKS4YPfMSHZ4YyiOpiNv"
      }
    ) 
    const chartData = await axios.get("http://api.getdor.com/v1/teams/4/stores/4/days", {headers:{
      "authorization": `Bearer ${getToken.data.data.token}`,
      "Content-Type": "application/json"
    }})
    
    this.setState({
      chartData: chartData.data.data,
      token: getToken.data.data.token,
      requestedAt: new Date().toLocaleTimeString()
    })
  }


  
  handleRefresh = () => {
    this.getData();
  }
  
  render () {
    const inCount = this.state.chartData.map((days, index) =>  <DaysCount key={index} daysCount={days}/>)
    return (
    <div> 
      <div className="row p-2">
        <div className="col">
          <button type="button" className="btn btn-link" onClick={this.handleRefresh}>Refresh</button><span><b>Last update at {this.state.requestedAt}</b></span>
        </div> 
      </div>
      <div className="row p-2">
        <div className="col">
          {inCount}
          {/* <Chart chartData={this.state.chartData} /> */}
        </div>
      </div>
    </div>  
    )
  }
}


export default StoreVcontainer;