import React, {Component} from 'react';
import axios from 'axios';


// import DaysCount from '../components/DaysCount';
import Chart from '../components/Chart/Chart';


class StoreVcontainer extends Component {

  state = {
    chartdata: [],
    token: ''
  }


  componentDidMount () {
    this.getData(false) 
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
    //  console.log(chartData.data.data)
    
    this.setState({
      chartdata: chartData.data.data,
      token: getToken.data.data.token
    })
  }
  
  handleRefresh = () => {
    this.getData(true)
  }
  
  
render () {
  return (
   <> 
    <div className="row">
          <div className="col">
            <button type="button" className="btn btn-link" onClick={this.handleRefresh}>refresh</button>
          </div>  
        </div>
    <div>
      <Chart chartData={this.state.chartdata}/>
    </div>
  </>  
  )
}
}


export default StoreVcontainer;