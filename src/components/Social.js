import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class Social extends Component{
      render(){
        return(
          <div className="card">
                <div className="card-block">
                  <h2>Social Network</h2>
                  <div className="row">
                    <div className="col-md-3">
                      <p className="social-buttons"><a href="https://twitter.com/" title><span className="social-round-icon fa-icon"><i className="fa fa-twitter" /></span>@David_Folley</a></p>
                    </div>
                    <div className="col-md-3">
                      <p className="social-buttons"><a href="https://www.linkedin.com/" title><span className="social-round-icon fa-icon"><i className="fa fa-linkedin" /></span>David Folley</a></p>
                    </div>
                    <div className="col-md-3">
                      <p className="social-buttons"><a href="https://dribbble.com/" title><span className="social-round-icon fa-icon"><i className="fa fa-dribbble" /></span>David Folley</a></p>
                    </div>
                  </div>
                </div>
              </div>
              );
      }
}


export default Social;