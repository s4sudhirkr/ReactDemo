import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardFooter,
    CardGroup, CardDeck, CardHeader, Media, CardText, Table, Container, bg
} from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderLeader({ leader }) {
    console.log(leader);
    return (
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
                <Media left middle>
                    <Media object src={leader.image} alt={leader.name} size="200*800" className=" col-9" />
                </Media>
                <Media center body className="mt-3">
                    <h2>{leader.name}</h2>
                    <Media right center body >{leader.designation}</Media>
                    <p>{leader.description}</p>
                </Media>
            </Media>
        </div>
    );


}


function RenderTeamMember({ leader }) {
    console.log(leader);
    return (

        <div key={leader.id} className="col-12 mt-5">

            <Card variant="top" bg="primary" color="secondary" text="white" style={{ width: '16rem', height: '18rem' }}>
                {/* <Card bg="primary" text="white" style={{ width: '18rem' }}> */}

                <CardImg variant="top" src={leader.image} alt={leader.name} style={{ width: '16rem', height: '10rem' }} />
                <CardBody>
                    <CardText><b>{leader.name}</b></CardText>
                    <CardText><b>{leader.designation}</b></CardText>
                    <CardText><b>{leader.mobile}</b></CardText>

                    {/* <p>{leader.description}</p> */}
                </CardBody>

            </Card>

            {/* <CardText>{leader.designation} {' '}</CardText> */}

        </div>

    );


}


function About(props) {
    console.log(props);
    const leaders = props.leaders.map((leader) => {
        return (
            <div>

                <RenderTeamMember leader={leader} />

                {/* <RenderLeader leader={leader} /> */}
            </div>

        );
    });


    return (
        <div className="container">
            <div className="row">
                {/* <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb> */}

            </div>
            <div className="row row-content">
                <div className="col-12">
               
                    <h3>About Us</h3>
                    <hr />
                </div>
                <div className="col-12 ">
                    <h2>Our History</h2>
                    <p>JMK Sarv Jeev Kalyan Sanstha, working in the field of Health & sustainable development since April, 2016. Since its inception, JMK Sarv Jeev Kalyan, Sanstha has effectively launched & completed several development projects in Kurukshetra, Haryana  slums. In principle, we strive for sustainable development through primary health care, Adult Literacy including legal literacy, diversified agriculture, gender empowerment and community participation. Besides implementing various activities directly by the organization.</p>
                    <h6> Date of Operation: January 2016</h6>
                    {/* <br>    </br> */}
                    <h6>Date of Registration : 20th April 2016</h6>
                    <h4> Registration No.</h4>
                    <p>  <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>State Code</th>
                                <th>District Code</th>
                                <th>Year of Registration</th>
                                <th>Registration Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>H R </td>
                                <td> 4 </td>
                                <td>2 0 1 6 </td>
                                <td>0 1 1 1 1</td>
                            </tr>
                        </tbody>
                    </Table>
                    </p>

                    <span> &nbsp; </span>
                </div>

                <div className="col-12">
                    <Card>
                        <CardBody>
                            <h4> Legal :</h4>

                            <CardText>  <b>Society Registered under Department of Industries & Commerce, Haryana.
Certificate of Registration to be issued under Section 9(1) of the Haryana Registration and Regulation of Societies Act, 2012
</b></CardText>
                        </CardBody>
                    </Card>
                    <span> &nbsp; </span>
                </div>



                <div className="col-12">
                    <Card>
                        <CardBody>
                            <h4> Mission :</h4>

                            <CardText>   Enhance capacity and confidence of poor and disadvantaged people to have access on essential services, particularly women and children of weaker section of the society with comprehensive health care services and sustainable development interventions with the help of all the stakeholders in the field of health and development. Our mission is reaching un-reached people with right message, right service at the right time.</CardText>
                        </CardBody>
                    </Card>
                    <span> &nbsp; </span>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody>
                            <h4> Objectives: :</h4>

                            <CardText>   It maintains a very high standard in its working and the projects it takes up.  Each of its staff is dedicated to serve the needy and involve with great commitment as they consider this noble cause next to loving & serving God. </CardText>
                            <CardText > The registered Office and Head Quarter of JMK Sarv Jeev Kalyan Sanstha  is located in the city of Kurukshetra, Haryana and is setting an example for other NGOs to follow its remarkablestreak of devoted and uninterrupted service to humanity. </CardText>
                        </CardBody>
                    </Card>
                    <span> &nbsp; </span>
                </div>

                {/* <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div> */}
                {/* <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div> */}
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>OUR LEADERS</h2>
                </div>
                <div className="col-12">

                    <CardDeck>
                        {leaders}
                    </CardDeck>
                </div>
            </div>

            {/* <div className="row row-content">Hello</div> */}
        </div>
    );
}

export default About;    