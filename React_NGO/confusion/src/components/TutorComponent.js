import React, {Component} from 'react';
import {Media} from 'reactstrap';
class Tutor extends Component
{
    constructor(props) { 
        super(props);
        this.state={
            dishes: [

                {
                    id: 0,
                    name:'Mathmatics',
                    image: 'assets/images/Math.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:''                        },
                 {
                    id: 1,
                    name:'Economics',
                    image: 'assets/images/Economics.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:''                        },
                 {
                    id: 2,
                    name:'Accountancy',
                    image: 'assets/images/Accounting.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:''                        },
                 {
                    id: 3,
                    name:'Mercantile Law',
                    image: 'assets/images/BusinessLaw.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:''                       
                 }
                 ]
        }
    }

    render()
    {
        const menu=this.state.dishes.map((dish)=>
        {
            return (
                <div key={dish.id} className="col-12 mt-5">
                   <Media tag="li">
                     <Media left middle>
                        <Media object src={dish.image} alt={dish.name} width="20%"/>
                         </Media>
                         <Media body className="ml-5">
                             <Media heading><a href="https://www.youtube.com/">{dish.name}</a></Media>
                     <p>{dish.description}</p>
                     </Media>
                       </Media>
                    </div>
            );
        });

        return ( 
<div className="container">
    <div className="row">
<Media list>
    {menu}
    </Media>
        </div>
</div>
        );
    }
}
export default Tutor;