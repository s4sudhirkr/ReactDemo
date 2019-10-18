import React, { Component } from 'react';
import { Card, CardBody, CardImg, Media, CardText, CardImgOverlay, Row, Col, UncontrolledCarousel, Button, CardFooter,Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as ReactDOM from "react-dom";
import Example from './CarouselComponent';


// import { COMMENTS } from '.../shared/comments';

function RenderCard() {
    return (<div>
        <div className="e-card e-card-horizontal">
            <img src="./Code.png" alt="Sample" />
            <div className="e-card-stacked">
                <div className="e-card-header">
                    <div className="e-card-header-caption">
                        <div className="e-card-header-title">Philips Trimmer</div>
                    </div>
                </div>
                <div className="e-card-content">
                    Powered by the innovative DuraPower Technology which optimizes power consumption, Philips trimmers are designed to last longer
                    than 4 ordinary trimmers.
            </div>
            </div>
        </div>
    </div>);

}


// function RenderLeader({ leader }) {
//     console.log(leader);
//     return (
//         <div key={leader.id} className="col-12 mt-5">
//             <>
//             <Card bg="primary" text="white" >
//                 <CardBody>
//                     <div className="col-4 mt-5">

//                         <h2>{leader.name}</h2>
//                         <CardText left>{leader.designation}</CardText>
//                         <p>{leader.description}</p>


//                     </div>
//                     <div className="col-4 mt-1">

//                         {/* <CardImgOverlay variant="right"  right src={leader.image} alt={leader.name} size="5*5"  className="col-12 mt-5"/> */}
//                         <CardImg top variant="right" right src={leader.image} alt={leader.name} size="2*5"  />


//                 </div>
//                 </CardBody>
//             </Card>
//         </div>
//     );


// }

function RenderLeader({ leader }) {
    console.log(leader);
    return (
        <div>
            <Container>
            <Card body inverse color={leader.color}>
            <Link to="/contactus" >
                <Row >
                    <Col sm="7">
                        <Row>
                            <CardBody body>
                                <h2>{leader.name}</h2>
                                <CardText left>{leader.designation}</CardText>
                                <p>{leader.description}</p>
                            </CardBody>
                        </Row>
                        <Row >

                        </Row>
                    </Col>

                    <Col sm="5">
                        <Container>
                        <CardBody body>
                            <Example />
                        </CardBody >
                        </Container>
                        {/* <CardImg top variant="right" right src={leader.image} alt={leader.name} size="20*5" /> */}
                    </Col>
                </Row>
<Container>
                <Row>
                    <Col sm="1">
                        <Button color="danger" onClick={<Example />} >View</Button>
                    </Col>
                    <Col sm="1">
                        <Button color="secondary">watch</Button>
                    </Col>
                    <Col sm="1">
                        <Button color="danger">count</Button>
                    </Col>
                </Row>
                </Container>
</Link>
            </Card>

</Container>
<div><span> &nbsp;  </span>
<span> &nbsp;  </span>
<span> &nbsp;  </span>
</div>
        </div>
        // <Card bg="primary" text="white" >
        //     <CardBody>
        //         <div className="col-4 mt-5">

        //             <h2>{leader.name}</h2>
        //             <CardText left>{leader.designation}</CardText>
        //             <p>{leader.description}</p>


        //         </div>
        //         <div className="col-4 mt-1">

        //             {/* <CardImgOverlay variant="right"  right src={leader.image} alt={leader.name} size="5*5"  className="col-12 mt-5"/> */}
        //             <CardImg top variant="right" right src={leader.image} alt={leader.name} size="2*5" />


        //         </div>
        //     </CardBody>
        // </Card>

    );


}




function CardPage(props) {
    console.log(props);
    const dishes = props.dishes.map((dish) => {
        return (
            <div>
                {/* <RenderCard /> */}
                <RenderLeader leader={dish} /> { '  '}
            </div>

        );
    });
    console.log(props.dishes[0].name);
    return (
        <div className="col-12">
            <Media list>
                {dishes}
            </Media>
        </div>
    );
}
export default CardPage;
// class CardPage extends Component
// {
//     constructor(props)
//     {
//         super(props);
//         // this.state={
//         //     dish : DISHES

//         // }
//     }

//     render()
//     {
//         return(
//              <div> Hii 
//                  {this.props.dish.name}
//              </div>
//         );
//     }
// }
