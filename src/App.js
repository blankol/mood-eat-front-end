import React, { Component } from 'react'
import Header from './Header'
import RestaurantsContainer from './RestaurantsContainer'
import RestaurantsDetail from './RestaurantsDetail'
import './App.css'

class App extends React.Component {
  render () {
      return (
      <div>
           <Header />
           <RestaurantsContainer />
           <RestaurantsDetail />
      </div>
      )
  }
}

export default App 
