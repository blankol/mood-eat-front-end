import React, { Component } from 'react' 
import './RestaurantContainer.css'

class RestaurantsContainer extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        location: '',
        url: '',
        restaurants: []
      }
  
      this.handleTitle = this.handleTitle.bind(this)
      this.handleLocation = this.handleLocation.bind(this)
      this.handleUrl = this.handleUrl.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
      handleTitle (e) {
        e.preventDefault()
        this.setState({
          title: e.target.value
        })
        
      }
  
      handleLocation (e) {
        e.preventDefault()
        this.setState({
          location: e.target.value
        })
        console.log(this.state.location)
      }
  
      handleUrl (e) {
        e.preventDefault()
        this.setState({
          url: e.target.value
        })
      }
  
      handleSubmit(e) {
        e.preventDefault()
          this.validPass ()
      }
  
  
    render() {
      return (
        <div>
             <form >
             <input type='submit' onChange={this.handleEmail} placeholder='Email' />
             <input type='submit' onChange={this.handlePassword} placeholder='Password'/>
             <input type='submit' onChange={this.handlePasswordConfirm} placeholder='Confirm Password'/>
             <input type='submit' onClick={this.handleSubmit} value='submit' />
             </form>
           
        </div>
      );
    }
  }
  
        
export default RestaurantsContainer

