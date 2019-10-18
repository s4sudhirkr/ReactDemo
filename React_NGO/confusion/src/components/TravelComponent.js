import React, {Component} from 'react';
import {Media} from 'reactstrap';
//import './App.css';
class TravelMenu extends Component
{
    constructor(props) { 
        super(props);
        this.state={
            dishes: [

                {
                    id: 0,
                    name:'Trip',
                    image: '/assets/travelimages/1.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
                 {
                    id: 1,
                    name:'Zucchipakoda',
                    image: '/assets/travelimages/2.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
                 {
                    id: 2,
                    name:'Vadonut',
                    image: '/assets/travelimages/3.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
                 {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: '/assets/travelimages/4.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                       
                 },
                 {
                    id: 4,
                    name:'ElaiCheese Cake',
                    image: '/assets/travelimages/5.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, with Graham cracker crust and spiced with Indian cardamoms'                       
                 }
                 ]
        }
    }

    render()
    {
        const travelmenu=this.state.dishes.map((dish)=>
        {
           
            return (
                <div key={dish.id} className="col-12 mt-5">
                   <Media tag="li">
                     <Media left middle>
                        <Media object src={dish.image} alt={dish.name}  size="200*800" className=" col-9"/>
                         </Media>
                         <Media  center body className="mt-3">
                             <Media right center body heading>{dish.name}</Media>
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
    {travelmenu}
    </Media>
        </div>
</div>
        );
    }
}
export default TravelMenu;