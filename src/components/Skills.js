import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class Skills extends Component{
      render(){
        return(
           <div className="card">
                <div className="card-block">
                  <h2>Skills</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">HTML5 <small>Intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">CSS3 <small>Intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Javascript  <small>Intermediate</small></h3>
                    </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">React <small>Intermediate</small></h3>
                      </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Python  <small>Intermediate</small></h3>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Django <small>Intermediate</small></h3>
                      </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Java <small>Intermediate</small></h3>
                      </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">C <small>Intermediate</small></h3>
                      </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">R <small>Beginner</small></h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-md-4">
                  <br/>
                  <br/>
                  </div>
                  </div>
                  <h2>Tools</h2>
                  <div className="row">
                   <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Adobe XD <small>Beginner</small></h3>
                      </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Figma <small>Beginner</small></h3>
                      </div>
                    </div>
                     <div className="col-md-4">
                      <div className="language-experience">
                        <h3 className="h5">Git <small>Beginner</small></h3>
                      </div>
                    </div>
                </div>
              </div>
              </div>
              );
      }
}

export default Skills;