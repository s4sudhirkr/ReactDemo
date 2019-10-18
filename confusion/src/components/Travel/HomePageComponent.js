import React, { Component } from 'react';
import { Media , Card,CardBody, CardImg} from 'reactstrap';

class TravelHome extends Component {
    constructor(props) {
        super(props);
        this.state =
            {

            }
    }
    Display() {
        return (
            <div> HII</div>
        );
    }

    render() {
        return (

            <Card>
           
            <div className="row infinite-item item">



                <div className="col-8 item-image-col">

                <CardBody>
                    <a href="/">
                        <div>
                        <CardImg width="100%"  size="50%" src="\assets\travelimages\1.png" alt="imge" />
                            <p>Hello </p>
                        </div>>
                       
                        <p>
                       
                            <a href="\assets\travelimages\1.png"><span className="badge badge-primary">FACE ANONYMIZATION</span></a>

                        </p>

                    </a>
                    </CardBody>


{/* ----------------- */}
{/* <div className="col-8 item-content"> */}
    <p>
<div className="col-12 right m-1">
                
<h1><a href="/paper/deepprivacy-a-generative-adversarial-network">DeepPrivacy: A Generative Adversarial Network for Face Anonymization</a></h1>
            
</div>
            <p >
                
                <span class="author-name-text">10 Sep 2019</span>
                

                
                    
                    • <a href="https://github.com/hukkelas/DeepPrivacy" onclick="captureOutboundLink('https://github.com/hukkelas/DeepPrivacy'); return true;">hukkelas/DeepPrivacy</a>
                    
                    
                    
                        
                          
                        •  <Media src="/static/frameworks/pytorch.28a00358044f.png " />
                          
                        
                    
                

                <p className="item-strip-abstract">Our model is based on a conditional generative adversarial network, generating images considering the original pose and image background.</p>

                <div className="col-12 sota">

    
        <p>
            <a href="/sota/face-anonymization-on-2019_test-set">
                <i className="em em-trophy"></i>
            </a>
            &nbsp;SOTA for
            <a className="sota-task"
               href="/sota/face-anonymization-on-2019_test-set">
                Face Anonymization
                on 2019_test set
            </a>
            
                
                    (using extra training data)
                
            

        </p>
    

{/* </div> */}


            <p>
                
                <a href="/task/face-anonymization"><span className="badge badge-primary">FACE ANONYMIZATION</span></a>
                
            </p>
            </div>
            </p>
            </p>
        </div>








{/* ----------------------------- */}














                    <div className="col-lg-3 item-interact text-center">
                        <div className="entity-stars">

                            <span className="badge badge-secondary"><ion-icon name="star"></ion-icon> 374</span>

                        </div>
                        <div className="entity">

                            <a href="/paper/deepprivacy-a-generative-adversarial-network" className="badge badge-light">
                                <ion-icon name="document"></ion-icon> Paper
                    </a>

                            <br />



                            <a href="/paper/deepprivacy-a-generative-adversarial-network#code" className="badge badge-dark">
                                <ion-icon name="logo-github"></ion-icon> Code
                        </a>

                            <br />

                        </div>

</div>

</div>
 
</Card>



                );
            }
        }
export default TravelHome;