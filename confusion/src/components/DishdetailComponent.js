
import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
//import { DISHES } from '../shared/dishes';
import { Link } from 'react-router-dom';
import Main from './maincomponent';



function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card >
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );

}


function RenderComment({ comments }) {
    console.log("!!!!RenderComment!!!");
    if (comments != null) {
        console.log("RenderComment!!!");
        return (
            <div className="col-12 col-md-5 m-1">

                <h4 >Comments!!! </h4>

                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>  {comment.author}    {comment.date} </p>
                            </li>
                        );
                    })
                    };
                </ul>
            </div>
        );
    }
    else {
        console.log("@@@@@RenderComment!!!");
        return (
            <div> </div>
        );

    }
}




const DishDetail = (props) => {
    console.log("Render Component .....");
    if (props.dish != null)
        return (
            <div className="container">

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h2>{props.dish.name}</h2>
                    </div>
                </div>


                <div className="row">

                    <RenderDish dish={props.dish} />
                    <RenderComment comment={props.comments} />
                </div>
            </div>

        );
    else {
        return (
            <div> </div>
        );

    }



}
export default DishDetail;



