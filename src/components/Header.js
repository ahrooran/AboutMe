import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';


export default class Header extends Component {
  
  render() {
    return (
      <React.Fragment>
      
      <header id="home">
         <div className="row banner">
            <div className="banner-text">

               <h1 className="responsive-headline"><ReactTypingEffect
      text={["Hello, I am Arun."]}
    /></h1>
               <hr/>
               <ul className="social">
                 <li key="github">
                   <a href="http://github.com/ahrooran"><i className="fa fa-github"></i></a></li>    
                 <li key="linkedin">
                   <a href="https://www.linkedin.com/in/ahrooran-sivananthan-225542b5/"><i className="fa fa-linkedin"></i></a></li>    
               </ul>
            </div>
         </div>
         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}

