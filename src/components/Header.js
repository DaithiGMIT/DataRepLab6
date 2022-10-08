
import '../App.css';
import React from 'react';


//Ensure to leave export on the class so it can be imported to other pages
export class Header extends React.Component{

  render() {

    return (
      <div className="App">
        <h1>My Header in another component!</h1>
      </div>
    );
  }
}

