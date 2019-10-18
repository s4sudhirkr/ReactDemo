import React, { Component } from 'react';

import './App.css';
//import Menu from './components/MenuComponent';
import TravelMenu from './components/TravelComponent';
import Main from './components/maincomponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/Homepage';
import MenuCard from './components/MenuCardComponent';
import Menu from './components/MenuComponent';
//import MenuCard from './components/MenuCardComponent';
import { TRAVEL  } from './shared/travel';
import { LEADERS  } from './shared/leaders';
//import {Navbar, NavbarBrand } from 'reactstrap';
//import Tutor from './components/TutorComponent';
//import DishDetail from './components/DishdetailComponent';
import { Route, Switch, BrowserRouter,Redirect } from 'react-router-dom';
import Header from './components/HeaderComponent';
// import Footer from './FooterComponent';

import TravelHome from './components/Travel/HomePageComponent';
import CardPage from './components/Travel/CradComponent';
import Example from './components/Travel/CarouselComponent';
import Footer from './components/FooterComponent';
import About from './components/AboutComponent';
import Contact from './components/ContactComponet';
import TravelMain from './components/TravelMainComponent';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: TRAVEL,
      leaders : LEADERS

    }
  }



  render() {
    const HomePage = () => {
      return (
        <CardPage dishes={this.state.dish} />
      );
    }

    return (
      <BrowserRouter>
        <div>
           {/* <TravelMain  />  */}
         
          <Main  />
        
        </div>
      </BrowserRouter >

    );
  }
}
export default App;





//function App() {
//  class App extends Component {




// render() {
//   return (
//     <div><Main  /></div>
//     );
// }
//  }
//  export default App;

{/* <Navbar dark color="secondary">
   <div className="container">
   <NavbarBrand href="/">React</NavbarBrand>   
   </div>
   </Navbar> */}
{/* <DishDetail  dishes={this.state.dishes} /> */ }
{/* <TravelMenu /> */ }
{/* <MenuCard dishes={this.state.dishes} />   */ }
{/* <div ><Tutor /> </div> */ }














// function App1() {
//   render() {
//   return (
//     // <div className="App">
//     <div >
//  <Navbar dark color="secondary">
//    <div className="container">
//    <NavbarBrand href="/">Travel </NavbarBrand>   

//    </div>
//    </Navbar>

//     {/* <MenuCard dishes={this.state.dishes} />  */}
//    <TravelMenu /> 

// {/* 
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}


//     </div>
//   );
// }
// }






