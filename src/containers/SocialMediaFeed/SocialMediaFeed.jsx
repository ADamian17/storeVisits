import React, { Component } from 'react';
import axios from 'axios';
import {formData, url } from '../../lib/Info';


class SocialMediaFeed extends Component {

  constructor () {
    super()
    this.state = {
      access_token: '',
      user_id: ''
    } 
  }

  componentDidMount () {
    this.postData()
  }

 postData = async () => { 
  
  try {
    const getAccess = await axios.post( url, {

      headers: {
        'Content-type': 'multipart/form-data'
      },
      data: formData,
    });
    console.log(getAccess)
  } catch (error) {
    console.log(error)
  }

  // .then((res) => {
  //     return res.json() 
  //   }).then((data) => {
  //     // set the state here
  //     console.log(data)
  //     // this.setState({
  //     //   access_token: getAccess.data.access_token,
  //     //   user_id: getAccess.data.user_id
  //     // });
  //   }).catch((err) => console.log(err))
}
  render () {
    
    return (
      <div>
        <h1>Instagram Feed</h1>
      </div>
    )
  }

}

export default SocialMediaFeed;