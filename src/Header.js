import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header style={{ backgroundImage: "url(img/placeholder.jpg)", backgroundSize: "cover", height:"50vh" }}>
           
                <h1>{this.props.title}</h1>
                <p>Small portfolio project using react</p>
                <a href='#  '>{this.props.button}</a>
          </header>
           
           // <img src={'img/placeholder.jpg'}   />
            
          
        );
    }

};

export default  Header;