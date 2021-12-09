import React, { Component } from 'react';
//import './App.css';
import './Navigation.css'
class Navigation extends Component {
  render(){
      const Section = ['Home','About','Services','Portfolio','Contact']
      const NavLink = Section.map(section=>{
          return(
              <li><a href={'#' + section}>{section}</a></li>
          )
      })
      return (
        <nav>
            <h2 className='logo'>{this.props.logoTitle}</h2>
            <ul>
               {NavLink}
            </ul>
        </nav>
     );
    }
}
export default Navigation;
