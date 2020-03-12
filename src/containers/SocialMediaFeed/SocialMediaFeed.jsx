import React, { Component } from 'react';
import axios from 'axios';
import { formData } from '../../lib/Info';


class SocialMediaFeed extends Component {

  constructor () {
    super()
    this.state = {
      access_token: '',
      user_id: '',
      feedData: {}
    } 
  }

  componentDidMount () {
    this.postData()
  }

 postData = async () => { 

  try {
    await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: formData
    }).then((res) => {
      return res.json() 
    }).then((data) => {
      this.setState({
        access_token: data.access_token,
        user_id: data.user_id
      })
    })
  } catch (error) {
    console.log(error)
  }

  try {
    await axios.get('https://graph.instagram.com/', + (this.state.user_id), + '/media?fields=id,media_type,media_url,username,timestamp&access_token=', + (this.state.access_token)).then( (res) => {
      return res.json()
    }).then((data) => {
      this.setState({
        feedData: data.data
      })
    })
  } catch (error) {
    console.log(error)
  }
    

    
}

  render () {
    console.log(this.state)
    return (
      <div>
        <h1>Instagram Feed</h1>
      </div>
    )
  }

}

export default SocialMediaFeed;