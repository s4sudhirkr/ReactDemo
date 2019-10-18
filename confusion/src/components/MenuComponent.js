import React, { Component } from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, CardDeck
} from 'reactstrap';
//import { DISHES } from '../shared/dishes';
import { Link } from 'react-router-dom';
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg  variant="top" width="100%" src={dish.image} alt={dish.name}  />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (

            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {/* <Breadcrumb>
                    <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb> */}
                <div className="col-12">
                    <h2>Events</h2>
                </div>
                <div className="col-12">
                    <CardDeck>
                    {menu}
                    </CardDeck>
                    </div>
            </div>
        </div>

    );
}
export default Menu;


// class Menu extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             dishes: DISHES,
//             selectedDish: null

//         }




//     }
//     onDishSelect(dish) {
//         console.log("On click");
//         this.setState({ selectedDish: dish });
//     }


//     //     this.state = {
//     //         dishes: [

//     //             {
//     //                 id: 0,
//     //                 name: 'Uthappizza',
//     //                 image: 'assets/images/uthappizza.png',
//     //                 category: 'mains',
//     //                 label: 'Hot',
//     //                 price: '4.99',
//     //                 description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
//     //             },
//     //             {
//     //                 id: 1,
//     //                 name: 'Zucchipakoda',
//     //                 image: 'assets/images/zucchipakoda.png',
//     //                 category: 'appetizer',
//     //                 label: '',
//     //                 price: '1.99',
//     //                 description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
//     //             },
//     //             {
//     //                 id: 2,
//     //                 name: 'Vadonut',
//     //                 image: 'assets/images/vadonut.png',
//     //                 category: 'appetizer',
//     //                 label: 'New',
//     //                 price: '1.99',
//     //                 description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
//     //             },
//     //             {
//     //                 id: 3,
//     //                 name: 'ElaiCheese Cake',
//     //                 image: 'assets/images/elaicheesecake.png',
//     //                 category: 'dessert',
//     //                 label: '',
//     //                 price: '2.99',
//     //                 description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
//     //             }
//     //         ]
//     //     }
//     // }



//     renderDish(dish) {
//         console.log("inside render dish");
//         console.log({ dish });

//         // const menucard1 = this.state.dishes.map((dish) => {

//         if (dish != null)

//             return (
//                 <Card  >
//                     <CardImg top src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText> {dish.description}</CardText>

//                     </CardBody>
//                 </Card>

//             );
//         else
//             return (
//                 <div></div>
//             );

//         // });
//         console.log("Hello");

//     }
//     renderComment(dish) {


//         const menucard = this.state.dishes.map((dish) => {
//             var tempdate = new Date(dish.comments[dish.id].date);
//             var date = tempdate.getDate();
//             const month = tempdate.toLocaleString('default', { month: 'long' });
//             var year = tempdate.getFullYear();
//             return (
//                 <ul key={dish.id}>
//                     <CardText>{dish.comments[dish.id].comment}</CardText>
//                     <CardText>-- {dish.comments[dish.id].author}, {date} {month},{year}</CardText>

//                 </ul>
//             );
//         });
//         return (
//             <div className="row">

//                 <h4 >Comments </h4>
//                 <div>
//                     {menucard}
//                 </div>

//             </div>
//         )
//     }


//     render() {
//         console.log("inside render ");
//         const menu = this.state.dishes.map((dish) => {
//             return (
//                 <div key={dish.id} className="col-12 col-md-5 m-1">
//                     {/* {this.renderDish(dish)} */}
//                     {/* <Card key={dish.id}  onClick={() => this.onDishSelect(dish)} >
                        
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                       <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                     </Card>  */}


//                     <RenderMenuItem dish={dish} />


//                 </div>
//                 // {/* <Media tag="li">
//                 //  <Media left middle>
//                 //     <Media object src={dish.image} alt={dish.name} />
//                 //      </Media>
//                 //      <Media body className="ml-5">
//                 //          <Media heading>{dish.name}</Media>
//                 //  <p>{dish.description}</p>
//                 //  </Media>
//                 //    </Media> */}

//             );
//         });



//         console.log("return");
//         return (

//             <div className="container">
//                 <div className="row">
//                     <Breadcrumb>
//                         <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>>
// <BreadcrumbItem active>Menu</BreadcrumbItem>
//                     </Breadcrumb>
//                     <div className="col-12">
//                         <h2>Menu</h2>
//                     </div>
//                 </div>
//                 <div className="row">

//                     {menu}

//                 </div>

//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         {RenderMenuItem(this.state.selectedDish)}
//                     </div>
//                     <div className="col-12 col-md-5 m-1">
//                         {/* {this.renderComment(this.state.selectedDish)} */}
//                     </div>
//                 </div>
//             </div>
//         );
//         console.log("outside return");
//     }
// }
// export default Menu;