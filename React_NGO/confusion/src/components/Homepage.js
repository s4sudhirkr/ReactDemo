import React, {Component} from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
//import '../App.css';
class Home extends Component
{
    constructor(props)
    {
        super(props)
    };

    componentDidMount()
    {
        console.log("MenuDeatils Component did mount");
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate Component .....");
    }
    render()
    {
        console.log("Render Component .....");
        return(

            <div>
                <Header />
                Hello

                <Footer />
                </div>
        );
    }
}
export default Home;