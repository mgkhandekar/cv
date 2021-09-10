import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class About extends Component{
      render(){
        return(
        <div className="card">
                <div className="card-block">
                  <h2>About me</h2>
                  <div className="row">
                    <div className="col-md-4">
                      <p><img src={mee} className="img-responsive" alt="" /></p>
                    </div>
                    <div className="col-md-8">
                      <p>Always hustling for knowledge, I am a strong believer in finding lasting solutions by creativity. </p>
                      <p>Learning to be a Developer driven by user centred design.</p>
                      <p>I love talking to people, learn new things everyday and pour my heart and soul into anthing that I do.</p>
                      <p>You will find me reading a book or an article, listening to a podcast or learning to play a new song on guitar in my free time.</p>
                      <p>My belief in one line is - Code.Design.Create.</p>
                    </div>
                  </div>
                </div>
              </div>
              );
      }
}

export default About;