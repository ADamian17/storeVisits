import React, {Component} from 'react';
import axios from 'axios';


import DaysCount from '../components/DaysCount'


class StoreVcontainer extends Component {

  state = {
    dayData: [],
    token: '' 
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
    const dayData = await axios.get("http://api.getdor.com/v1/teams/4/stores/4/days", {headers: {
      authorization: `Bearer ${getToken.data.data.token}`  
    }})
    this.setState({
      dayData: dayData.data.data,
      token: getToken.data.data.token
    })     
  } 
  
render () {

const inCount = this.state.dayData.map((days, index) =>  <DaysCount key={index} daysCount={days}/>)
  return (
   <> 
    <div className="row">
          <div className="col">
            <button type="button" className="btn btn-link" onClick={this.getData}>refresh</button>
          </div>  
        </div>
    <div>
      {inCount}
    </div>
  </>  
  )
}
}


export default StoreVcontainer;