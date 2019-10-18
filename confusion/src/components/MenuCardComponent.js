
import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
class MenuCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dish: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    componentDidMount() {
        console.log("Menucard Componet did mount");
    }



    renderDish(dish) {
        const menucard = this.props.dishes.map((dish) => {
            if (dish != null)

                return (

                    <Card >
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            <CardText>{dish.id}</CardText>

                        </CardBody>
                    </Card>
                );
            else
                return (
                    <div></div>
                );

        });
    }

    renderComment(dish) {


        const menucard = this.state.dishes.map((dish) => {
            var tempdate = new Date(dish.comments[dish.id].date);
            var date = tempdate.getDate();
            const month = tempdate.toLocaleString('default', { month: 'long' });
            var year = tempdate.getFullYear();
            return (
                <ul>
                    <CardText>{dish.comments[dish.id].comment}</CardText>
                    <CardText>-- {dish.comments[dish.id].author}, {date} {month},{year}</CardText>

                </ul>
            );
        });
        return (
            <div className="row">

                <h4 >Comments </h4>
                <div>
                    {menucard}
                </div>

            </div>
        )
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* {menucard} */}


   

                    <p>SUDHIR </p>
                </div>
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                {/* {this.onDishSelect(this.state.selectedDish)} */}
                    {this.renderDish(this.state.selectedDish)}
                </div>
                {/* <div className="col-12 col-md-5 m-1">
                    {this.renderComment(this.state.selectedDish)}
                </div> */}
            </div>
            </div>
        );
    }
}
export default MenuCard;






































// // Work on function 

// class MenuCard extends Component {


//     // componentDidMount()
//     // {
//     //     console.log("Menucard Componet did mount");
//     // }



//     // renderDish(dish) {
//     //     if (dish != null)

//     //         return (

//     //             <Card >
//     //                 <CardImg top src={dish.image} alt={dish.name} />
//     //                 <CardBody>
//     //                     <CardTitle>{dish.name}</CardTitle>
//     //                     <CardText>{dish.description}</CardText>
//     //                     <CardText>{dish.id}</CardText>

//     //                 </CardBody>
//     //             </Card>
//     //         );
//     //     else
//     //         return (
//     //             <div></div>
//     //         );
//     // }


//     // renderComment(dish) {


//     //     const menucard1 = this.props.dishes.map((dish) => {
//     //         var tempdate = new Date(dish.comments[dish.id].date);
//     //         var date = tempdate.getDate();
//     //         const month = tempdate.toLocaleString('default', { month: 'long' });
//     //         var year = tempdate.getFullYear();
//     //         return (
//     //             <ul>
//     //                 <CardText>{dish.comments[dish.id].comment}</CardText>
//     //                 <CardText>-- {dish.comments[dish.id].author}, {date} {month},{year}</CardText>

//     //             </ul>
//     //         );
//     //     });
//     //     return (
//     //         <div className="row">

//     //             <h4 >Comments </h4>
//     //             <div>
//     //                 {menucard1}
//     //             </div>

//     //         </div>
//     //     )
//     // }


// function RenderMenuItem({dish , onClick})
// {
//     return(
//         <Card key={dish.id}
//                         onClick={()=>onClick(dish.id)}>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardImgOverlay>
//                             <CardTitle>{dish.name}</CardTitle>

//                         </CardImgOverlay>
//                     </Card>
//     );
// }

//   const Menu=(props)=>
//   {
//     const menucard =props.dishes.map((dish) => {
//         return (
//             <div key={dish.id} className="col-12 col-md-5 m-1">
//                 <RenderMenuItem dish={dish} onClick={props.onClick} />
//             </div>
//         );
//     });

//     return (
//         <div className="container">
//             <div className="row">
//                 {menucard}
//             </div>
//             {/* <div className="row">
//                 <div className="col-12 col-md-5 m-1">
//                     {this.renderDish(this.state.selectedDish)}
//                 </div>
//                 <div className="col-12 col-md-5 m-1">
//                     {this.renderComment(this.state.selectedDish)}
//                 </div>
//             </div> */}
//         </div>
//     );
//   }


// export default MenuCard;


