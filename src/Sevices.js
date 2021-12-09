import React, { Component } from "react"
import './Services.css'

class Services extends Component{
    render(){
        return(
            <div className="services">
                <h3>Services</h3>
                <h2>What we offer</h2>
              <div className="row">
                
                        <Icon icon={IconObj[0].icon} title={IconObj[0].title} Desc={IconObj[0].Desc}/>
                        <Icon icon={IconObj[1].icon} title={IconObj[1].title} Desc={IconObj[1].Desc}/>
                        <Icon icon={IconObj[2].icon} title={IconObj[2].title} Desc={IconObj[2].Desc}/>
                        <Icon icon={IconObj[3].icon} title={IconObj[3].title} Desc={IconObj[3].Desc}/>

             </div>
            </div>
          
        );
    }
}

const IconObj =[
    {
        icon: <ion-icon name="phone-portrait-outline"></ion-icon>,
        title:'Responsive',
        Desc:'Looks greate on an screen size '
    },
    {
        icon:<ion-icon name="pencil-outline"></ion-icon>,
        title:'Registered',
        Desc:'freashly redesigned for Bootstrap'
    },
    {
        icon:<ion-icon name="thumbs-up-outline"></ion-icon>,
        title:'Favourite',
        Desc:`many of use${<ion-icon name="heart-outline"></ion-icon>} Bootstrap`
    },
    {
        icon:<ion-icon name="help-outline"></ion-icon>,
        title:'Question',
        Desc:'if you have a question'
    }
];
class Icon extends Component{
    render(){
        return(
            <div>
                <span>
                    {this.props.icon}
                </span>
                <h4>{this.props.title}</h4>
                <p>{this.props.Desc}</p>
            </div>
        )
    }
}

export default Services