import React, {Component} from 'react';

import './Card.css';


class Project extends Component{
      render(){
        return(
           <div className="card">
                <div className="card-block">
                  <h2>Projects</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="h5"> AICVS college club Website</h3>
                      <p> Link :  
                      <a href="https://aicvs.pythonanywhere.com">
                        https://aicvs.pythonanywhere.com
                      </a>
                      </p>
                      <p>March 2020</p>
                    </div>
                    <div className="col-md-4">
                      <h3 className="h5">Collge Tech Fest Website</h3>
                      <p> As part of the website development team for the college technical fest, gave the fest a digital face resulting in a footfall of 3000+.
                      </p>
                      <p>January 2020</p>
                    </div>
                    <div className="col-md-4">
                       <h3 className="h5">Filter for Speech Signal Processing</h3>
                      <p> 
                     As part of college course work, designed a filter to filter out noise of a particular frequency from speech file using MATLAB.
                      </p>
                      <p>March 2020</p>
                    </div>
                      <div className="col-md-4">
                       <h3 className="h5">Deepfake Detection using Neural Networks</h3>
                      <p> 
                     As part of college Project for final year, worked to detect deepfake forgery in videos. 
                      </p>
                      <p>June 2021</p>
                    </div>
                    <div className="col-md-4">
                       <h3 className="h5">Food Order App Design (Ongoing)</h3>
                      <p> 
                     Applying UX principles learnt to design a food order app.
                      </p>
                      <p>July 2021</p>
                      </div>
                    
                  </div>
                </div>
              </div>
              );
      }
}

export default Project;