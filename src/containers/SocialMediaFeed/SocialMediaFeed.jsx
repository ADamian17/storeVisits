import React, { Component } from 'react';
import axios from 'axios';


class SocialMediaFeed extends Component {

  constructor () {
    super()
    this.state = {
      access_token: '',
      user_id: ''
    } 
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