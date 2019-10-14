
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import Axios from 'axios'

// const url = 'http://localhost:5000'
// // const url = 'https://pawnderapp.herokuapp.com'

// class Search extends Component {
//   state = {
//     numberOfResults: '',
//     search: '',
//     results: [],
//     filteredResults: [],
//     actualResults: [],
//     dogActivityLevel: ['Low', 'Moderate', 'High'],
//     dogSize: ['Small', 'Medium', 'Large'],
//     firstClick: true,

//     // mediumDog: 'off',
//   }

//   search = async () => {
//     // Axios.get(`${url}/api/city/${this.state.search}`).then(
//     //Have to reset state or the arrays keep increasing in size
//     this.setState({
//       results: [],
//       actualResults: [],
//     })
//     await Axios.get(`${url}/api/users`).then(results => {
//       let allUsers = results.data.user
//       let aResults = []
//       console.log(allUsers)
//       allUsers.map(eachUser => {
//         console.log(eachUser.city, this.state.search)

//         if (eachUser.city === this.state.search) {
//           //this.state.actualResults.push(eachUser)
//           aResults.push(eachUser)
//         }
//       })
//       this.setState({
//         actualResults: aResults,
//         numberOfResults: aResults.length,
//       })
//     })

//     this.displayUsers()
//   }

//   // filter = () => {
//   //   let filteredResults = this.state.actualResults.map((eachUser)=>{
//   //     if(this.state.mediumDog === 'on'){
//   //       let filtUsers = eachUser.filtUsers(user => user.dogSize === 'Medium')
//   //       this.state.filteredResults.push(filtUsers)
//   //     }
//   //     return filteredResults
//   //   })
//   // }

//   filterUsers = () => {
//     return this.state.actualResults.filter(eachUser => {
//       console.log(eachUser.dogActivityLevel, this.state.dogActivityLevel)
//       return (
//         this.state.dogSize.includes(eachUser.dogSize) &&
//         this.state.dogActivityLevel.includes(eachUser.dogActivityLevel)

//       )
//     })
//   }

//   displayUsers = () => {
//     let displayedResults = this.filterUsers().map((eachUser, i) => {
//       console.log('current state-----', this.state)
//       return (
//         <Link key={i} to={`/user/${eachUser._id}`}>
//           <div className="search-result">
//             <div className="row">
//               <div className="col">
//                 <img className="search-result-image" src={eachUser.dogImage} alt='dogpic'/>
//               </div>
//               <div className="col">
//                 <h4>{eachUser.dogName}</h4>
//               </div>
//               <div className="col">
//                 <h4>{eachUser.ownerName}</h4>
//               </div>
//             </div>
//           </div>
//         </Link>
//       )
//     })
//     return displayedResults
//   }

//   handleChange = e => {
//     //let newArray = []

//     console.log(e.target.name, e.target.value, e.target.checked)
//     let attribute = [...this.state[e.target.name]]
//     if (this.state.firstClick) {
//       attribute = []
//     }
//     if (e.target.checked) {
//       attribute.push(e.target.value)
//     } else {
//       attribute.splice(attribute.indexOf('e.target.value'), 1)
//     }
//     console.log('attributeeee',attribute)
//     this.setState({
//       [e.target.name]: attribute,
//       firstClick: false,
//     })
//     //newArray.push(e.target.value)
//     console.log(attribute)

//     // this.setState({
//     //   [e.target.name]: e.target.value,
//     // })
//   }

//   handleSearch = e => {
//     this.setState({
//       search: e.target.value,
//     })
//   }

//   render() {
//     return (
//       <div className="search-div">
//         <div className="search-field-div">

//         <span>
//               <input
//                 className="search-field"
//                 type="text"
//                 placeholder="Search city"
//                 name="search"
//                 onChange={this.handleSearch}
//               ></input>
//               {this.search}
//               <button
//                 className="search-button"
//                 type="submit"
//                 onClick={this.search}
//               >
//                 <i className="fa fa-search fa-2x"></i>
//               </button>
//             </span>

//             <br/>
//           <input
//             type="checkbox"
//             name="dogSize"
//             value="Large"
//             onChange={this.handleChange}
//           ></input> <label>Large size</label>
//           <input
//             type="checkbox"
//             name="dogSize"
//             value="Medium"
//             onChange={this.handleChange}
//           ></input><label>Medium size</label>
//           <input
//             type="checkbox"
//             name="dogSize"
//             value="Small"
//             onChange={this.handleChange}
//           ></input><label>Small size</label>

//           <input
//             type="checkbox"
//             name="dogActivityLevel"
//             value="Low"
//             onChange={this.handleChange}
//           ></input><label>Low Energy</label>
//           <input
//             type="checkbox"
//             name="dogActivityLevel"
//             value="Moderate"
//             onChange={this.handleChange}
//           ></input><label>Moderate Energy</label>
//           <input
//             type="checkbox"
//             name="dogActivityLevel"
//             value="High"
//             onChange={this.handleChange}
//           ></input><label>High Energy</label>

//               {/* <h2>Number of results: {this.state.numberOfResults}</h2> */}

//             {this.displayUsers()}

//         </div>
//       </div>
//     )
//   }
// }

// export default Search
