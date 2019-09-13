import React, { Component } from 'react';
export default  class MoreInfo extends Component {
  render() {
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Hobbies</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>blah</h3>
                          <p className="info">
                          blah
                          </p>
                          <p>
                          blah
                          </p>
                       </div>
                    </div>
                  
                }
              
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Something of your choice</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>blah</h3>
                          <p className="info">
                          blah
                          </p>
                          <p>
                          blah
                          </p>
                       </div>
                    </div>
                  
                }
              
            </div>
         </div>

      </section>
    );
  }
}