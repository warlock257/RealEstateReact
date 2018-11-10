import React, { Component} from 'react'
import ReactDOM from 'react-dom'


//import the other js classes
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

//all the default filter values are put in the master state
class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Dave',
      listingsData,
      city: 'All',
      homeType: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      pool: false,
      filteredData: listingsData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
      
    }

    //bind your functions in the constructor
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

componentWillMount(){
  //initially sorts from lowest to highest price
  var listingsData = this.state.listingsData.sort((a,b) => {
    return a.price - b.price
  })

  this.setState({
    listingsData
  })
}



  //changes the state when an option is changed
change(event){
  //variables for the name and values in the state
  var name = event.target.name
  //abriviated IF statement - If it's a checkbox do one thing, else do a selection box.
  var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

  this.setState({
    [name]:value
  }, () => {
    //what happens when the state is changed
    console.log(this.state)
    //whenever the state is changed, the filteredData function runs
    this.filteredData()
  })
}

changeView(viewName){
  this.setState({
    view: viewName
  })
}


//only shows listings that match the filter conditions
filteredData(){
  var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.rooms
  })

if(this.state.city != "All"){
  newData = newData.filter((item) => {
    return item.city == this.state.city
  })
}

if(this.state.homeType != "All"){
  newData = newData.filter((item) => {
    return item.homeType == this.state.homeType
  })
}

//sorts lisings descending
if(this.state.sortby === 'price-dsc'){
  newData = newData.sort((a,b) => {
    return a.price - b.price
  })
}

//sorts lisings ascending
if(this.state.sortby === 'price-asc'){
  newData = newData.sort((a,b) => {
    return b.price - a.price
  })
}

//checkbox for elevator
if(this.state.elevator != false){
  newData = newData.filter((item) => {
    return item.extras.includes("elevator") == this.state.elevator
  })
}

//checkbox for pool
if(this.state.pool != false){
  newData = newData.filter((item) => {
    return item.extras.includes("pool") == this.state.pool
  })
}

//checkbox for finished basement
if(this.state.finished_basement != false){
  newData = newData.filter((item) => {
    return item.extras.includes("finished_basement") == this.state.finished_basement
  })
}

//checkbox for gym
if(this.state.gym != false){
  newData = newData.filter((item) => {
    return item.extras.includes("gym") == this.state.gym
  })
}



//search bar (city)
if (this.state.search != ''){
  newData = newData.filter((item) => {
      var city = item.city.toLowerCase()
      var searchText = this.state.search.toLowerCase()
      var n = city.match(searchText)

      if (n != null){
        return true;
      }
  })
}


  this.setState({
    filteredData:newData
  })
}


//this function populates the forms only with data that exists in the database
populateForms(){
    //city - creates an array with all the cities
    var cities = this.state.listingsData.map((item) => {
        return item.city
    })
      //makes it so theres no duplicates
    cities = new Set(cities)
    //converts the Set (object) into an array 
    cities = [...cities]
    cities = cities.sort();

    //homeType
    var homeTypes = this.state.listingsData.map((item) => {
        return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes = homeTypes.sort();

    //rooms
    var bedRooms = this.state.listingsData.map((item) => {
      return item.rooms
    })
    bedRooms = new Set(bedRooms)
    bedRooms = [...bedRooms]
    bedRooms = bedRooms.sort();

  this.setState({
    populateFormsData: {
      homeTypes,
      bedRooms,
      cities
    }
  }, () => {
    console.log(this.state)
  })
}




//pass the 'change' function into the FIlter component (props on the other end)
//pass the listingData into the Listing component

  render () {
    
    return (
      <div> 
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
        <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state} 
        changeView={this.changeView} />
      </section>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
