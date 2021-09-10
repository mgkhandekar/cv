import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class Education extends Component{
      render(){
        return(
          <div className="card">
                <div className="card-block">
                  <h2>Education</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="education-experience">
                        <small className="date">2021-2017</small>
                        <h3 className="h5 date-title">BTech in Electronics and Telecommunications</h3>
                        <p>Cummins College of Engineering, Pune</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="education-experience">
                        <small className="date">2017-2015</small>
                        <h3 className="h5 date-title">Junior College</h3>
                        <p>Fergusson College</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="education-experience">
                        <small className="date">2015</small>
                        <h3 className="h5 date-title">High School</h3>
                        <p>Abhinava Vidyalaya English Medium School</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
      }
}

export default Education;