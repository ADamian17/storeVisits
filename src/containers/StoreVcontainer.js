import React, {Component} from 'react'
import axios from 'axios'


class StoreVcontainer extends Component {

  state = {
    dayData: []
  }


  componentDidMount () {
    this.getDayData() 
  }
   
  getDayData = async () => {
    const dayData = await axios.get("http://api.getdor.com/v1/teams/4/stores/4/days", {headers: {
      authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZCI6NTgsImx2bCI6ImFwaV9sZWdhY3kiLCJidWNrZXRfc2l6ZSI6MTAwLCJkcmlwX3JhdGUiOjAuNSwicGVybWlzc2lvbnMiOlsiY2FuX2FjY2Vzc19yYSIsImNhbl92aWV3X291dHMiLCJjYW5fdmlld19pbnMiXSwiaWF0IjoxNTc2NjA2MDc2LCJleHAiOjE1NzY2MTMyNzZ9.GIKXARRSlGYxvrNlRgYDEzGtbS6n79sn6ofgHfC46T1vo6b1eC9F1jLue4_EG2qN3him7koXtP7ERNfNvzQs8A0aHVBYzG45VdsdZxywwb0bRk99owxclqWB9ch-W15WO7juKV5FzLIfSNHqwNGa_Xf1RXguuuLps8xTGlAamOfQ0OCj7xosIR2SNttQjkUtAL4PivH0zEli9jmQZ1m-JmVG_vEoOPPXJvqV-ueq7FxTcyD_bnmerRPruo3_32cO_38-eqa1mNv6kZ9eOBVqShZMaDzLqMUhMS_XdGEwfjzdn7VD0UzcX4VKtvfKkP_rb1A56vIG4N2_7MLQMbsgDQ'  
    }})
    this.setState({
      dayData: dayData.data.data
    }) 
    console.log(dayData.data.data) 
  } 
  
render () {
  return (
    <div>
      <h1>days</h1>
    </div>
  )
}

}


export default StoreVcontainer;