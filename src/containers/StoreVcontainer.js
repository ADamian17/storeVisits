import React, {Component} from 'react';
import axios from 'axios';


// import DaysCount from '../components/DaysCount';
import Chart from '../components/Chart/Chart';


class StoreVcontainer extends Component {

  state = {
    chartdata: [],
    token: '',
    requestedAt: ''
    // refreshtoken: ''
  }


  componentDidMount () {
    this.getData()
    // this.handleRefresh() 
  }
   
  getData = async (update) => {

    const getToken = await axios.post("http://api.getdor.com/v1/tokens",
      {
        "refresh_token": "wSGgSqmSDKS4YPfMSHZ4YyiOpiNv"
      }
    ) 
    const chartData = await axios.get("http://api.getdor.com/v1/teams/4/stores/4/days", {headers:{
      "authorization": `Bearer ${getToken.data.data.token}`,
      "Content-Type": "application/json"
    }})

    //  if (update){
    //   chartData.data.data.pop()
    //  }
    
    this.setState({
      chartdata: chartData.data.data,
      token: getToken.data.data.token,
      requestedAt: new Date().toLocaleTimeString()
      // refreshtoken: getToken.data.data.refresh_token
    })
  }
  
  handleRefresh = () => {
    this.getData();
  }
  

render () {
  console.log(this.state.chartdata)
  return (
   <div className=""> 
    <div className="row p-2">
      <div className="col">
        <button type="button" className="btn btn-link" onClick={this.handleRefresh}>refresh</button><span><b>Last update {this.state.requestedAt}</b></span>
      </div> 
    </div>
    <div className="row">
      <div className="col">
        <Chart chartData={this.state.chartdata} />
      </div>
    </div>
  </div>  
  )
}
}


export default StoreVcontainer;