import React, {Component} from 'react';
import mee  from '../mee.JPG';

import './Card.css';


class Carousel extends Component{
      render(){
        return(
           <div className="card">
                <div className="card-block">
                  <h2>Projects</h2>
                  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    {/* Wrapper for slides */}
                    <div className="carousel-inner" role="listbox">
                      <div className="item active">
                        <img src="./assets/images/img-05.jpg" className="img-responsive" alt="..." />
                        <div className="carousel-caption">
                          <h3 className="h5">Jules for Bastion</h3>
                          <p>2017</p>
                        </div>
                      </div>
                      <div className="item">
                        <img src="./assets/images/img-06.jpg" className="img-responsive" alt="..." />
                        <div className="carousel-caption">
                          <h3 className="h5">Jules for Bastion</h3>
                          <p>2017</p>
                        </div>
                      </div>
                      <div className="item">
                        <img src="./assets/images/img-08.jpg" className="img-responsive" alt="..." />
                        <div className="carousel-caption">
                          <h3 className="h5">Jules for Bastion</h3>
                          <p>2017</p>
                        </div>
                      </div>
                    </div>
                    {/* Indicators */}
                    <ol className="carousel-indicators">
                      <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                      <li data-target="#carousel-example-generic" data-slide-to={1} />
                      <li data-target="#carousel-example-generic" data-slide-to={2} />
                    </ol>
                  </div>
                </div>
              </div>
              );
      }
}


export defaultCarousel;