import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, Button
    , ModalHeader, ModalBody, Form, FormGroup, Input, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                isNavOpen: false,
                isModalOpen: false
                // username: ' ',
                // password: ' ',
                // remember : ' '
            };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleModal() {
        alert("In");
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
        alert(this.state.isModalOpen);
        alert(this.innerRef);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });

    }
    handleLogin(event) {
        alert("H");
        this.toggleModal();
        console.log(this.username.value);
        alert("Hi");
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <div className="col-4 ">
                            <NavbarToggler onClick={this.toggleNav} />

                            {/* <div class="navbar-header">
                                <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon icon-bar"></span>
                                    <span class="icon icon-bar"></span>
                                    <span class="icon icon-bar"></span>
                                </button>
                                <img src="/assets/images/logo.png" height="30" width="41" alt="Sudhir" />
                            </div> */}


                            <NavbarBrand className="mr-auto" href="/">

                                <img src="/assets/images/logo.jpg" height="30" width="41" alt="JMK" /> 
                                <span className="icon icon-bar"> JMK </span>

                            </NavbarBrand>
                        </div>
                        <div>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav className="ml-auto" navbar >
                                    <NavItem>
                                        <NavLink className="nav-link" to="/home">
                                            <span className="fa fa-home fa-lg">  </span>
                                            Home
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/aboutus">
                                            <span className="fa fa-info fa-lg">  </span>
                                            About us
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/menu">
                                            <span className="fa fa-list fa-lg">  </span>
                                            Events
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-info fa-lg">  </span>
                                            Blog
                                </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus">
                                            <span className="fa fa-address-card fa-lg">  </span>
                                            Contactus
                                </NavLink>
                                    </NavItem>
                                </Nav>
                                {/* //Add a Button for modal */}
                                <Nav className="ml-right" navbar>



                                    {/* <NavItem>
                                        <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg">Login</span></Button>
                                    </NavItem> */}
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>
                {/* <Jumbotron>
                    <div className="container">
                        <div className="row row-header">

                            <div className="col-12 col-sm-6" color="secondary">
                                {/* <h1>Travel  </h1> */}
                                {/* <p> We take inpiration from the world's best leadres. Our lipsmaking creaton will tackle this world</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron> */} 
                {/* Introduce Modal Here */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Login </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlfor="username"> Username </Label>
                                <input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlfor="password"> Password </Label>
                                <input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary" >Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        )
    }
}
export default Header;