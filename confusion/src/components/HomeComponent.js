import React from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Container, Row, Col
} from 'reactstrap';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponet';
import Header from './HeaderComponent';
function RenderCard({ item }) {

    return (
        // <div className="col-12  m-1">
            <Container>
                <Row>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

                <CardImg src="/assets/images/index.jpg" alt={item.name}  />
                <CardImgOverlay color="danger">

                    <CardTitle color="danger" size="100"><span ><b>JMK Sarv Jeev Kalyan Sanstha, working in the field of Health & sustainable development since April, 2016.  </b> </span>
                    </CardTitle>
                    <CardBody>
                        {/* {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null} */}
                        <Button  color="danger" href="/contactus">JOIN US</Button>
                    </CardBody>
                </CardImgOverlay>
            </Card>
            </Row>
            </Container>
       
    );

}



function Home(props) {
    return (

        <div className="container">

            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} />
                    <hr />
                </div>
                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div> */}





            </div>
            <div className="col-12 col-md m-1">
                <About leaders={props.leader} />
                <Menu dishes={props.dish} />
                <Contact />
            </div>
        </div>


    );
}
export default Home;