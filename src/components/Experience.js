import React, {Component} from 'react';
import './Card.css';

class Experience extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-block">
                  <h2>Experience</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="h5">Deutsche Bank</h3>
                      <p>Graduate Ananlyst
                      </p>
                      <p>July 2021 - Present *</p>
                    </div>
                    <div className="col-md-4">
                      <h3 className="h5">Birlasoft</h3>
                      <p>Intern
                      </p>
                      <p>May 2019 - July 2019</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Experience;
