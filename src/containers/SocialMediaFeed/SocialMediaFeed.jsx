import React, { Component } from 'react';
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
    this.feedData()
  }

 feedData = async () => { 

  try {
   const accessData = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: formData
    });

    const accessResponce = await accessData.json();
    const tokenAndId = accessResponce;

    if ( !tokenAndId.error_message ) {
      this.setState({
        access_token: tokenAndId.access_token,
        user_id: tokenAndId.user_id
      });
    } else {
      console.log(tokenAndId)
    }

    const access_token = this.state.access_token;
    const user_id = this.state.user_id;

    const mediaData = await fetch(`https://graph.instagram.com/${user_id}/media?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`);

    const mediaResponce = await mediaData.json();
    const instaFeed = mediaResponce;

    if ( !instaFeed.error ) {
      this.setState({
        feedData: instaFeed.data
      });
    } else {
      console.log(instaFeed.error)
    }

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