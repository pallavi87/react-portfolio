import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Services from './Sevices';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
  render() {
      return (
        <div>
              <Navigation logoTitle='React Portfolio'/>
              <Header title='Stylish Portfolio' button='Find out here'/>
              <Services />
        </div>

      );
  }

};
ReactDOM.render(
   <App />,
  document.getElementById('root')
);

reportWebVitals();
