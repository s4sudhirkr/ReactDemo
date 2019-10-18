import React  ,{ Component } from 'react';

//import Menu from './components/MenuComponent';
//import TravelMenu from './components/TravelComponent';
//import MenuCard from './MenuCardComponent';
 import { DISHES } from '../shared/dishes';
import {Navbar, NavbarBrand } from 'reactstrap';
//import Tutor from './components/TutorComponent';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import Contact from './ContactComponet';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import { Media } from 'reactstrap';
import About from './AboutComponent';






//function App() {
 class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
     // selectedDish: null
    };
  }






render() {
  const HomePage = ()=> {
  return(
    <Home dish={this.state.dishes.filter((dish) => dish.featured)}
    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
    leader={this.state.leaders.filter((leader) => leader.featured)}     />
   
  );
  
  }

const DishWithId=({match})=>{
  console.log("!!!!Inside DishWithId");
return(

  
   <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} 
comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))} /> 

);
}


const RenderLeader=({match})=>
{
  return(
<About leader={this.state.leaders.filter((leader)=>leader.id===parseInt(match.params.leaderId,4)) } />
  );

}


  return (
    <div>
 
   <Header />
<Switch>
<Route path="/home" component={HomePage} />
<Route exact path="/menu" component={()=><Menu dishes={this.state.dishes} /> } /> 
<Route path="/menu/:dishId" component={DishWithId} />
<Route exact path="/contactus" component={Contact} />
  <Route exact path="/aboutus" component={()=><About leaders={this.state.leaders} /> } />
  <Route path="/aboutus/:leaderId" component={RenderLeader} />
{/* component={()=><About dishes={this.state.leaders} /> } /> */}
<Redirect to ="/home" />
<About leaders={this.state.leaders} />
  </Switch>
 <Footer /> 
  </div>
);

}
}
 export default Main;


