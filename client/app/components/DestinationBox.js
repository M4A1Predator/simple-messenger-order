import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './destinationbox.styl'

class DestinationBox extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="destination-box">
                <div className="location-box">
                    <div className="icon">
                        <img width="20px" height="20px" src="/public/mats/img/map-marker.svg" />
                    </div>
                    <div className="location-name">
                        <div className="name">
                            {this.props.dest.placeName || this.props.key}
                        </div>
                    </div>
                </div>
                <div className="order-form">
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="mobile" />
                </div>
            </div>
        );
    }
}

DestinationBox.propTypes = {
    dest : PropTypes.object
}

export default DestinationBox;