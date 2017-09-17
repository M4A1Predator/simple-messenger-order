import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './destinationbox.styl'

class DestinationBox extends Component {

    constructor(props){
        super(props)
        this.state = {
            placeName: '',
            name: '',
            mobile: '',
        }
    }

    componentWillMount() {
        const nameData = this.props.dest.placeName
        let placeName = ''
        if(nameData.name != null){
            placeName += (nameData.name + " - ")
        }

        if(nameData.address != null){
            placeName += nameData.address
        }

        this.setState({placeName})
    } 

    render() {
        let placeName = ''
        if(this.props.dest.placeName.name != null){
            placeName = this.props.dest.placeName.name
        }
        return (
            <div className="destination-box">
                <div className="location-box">
                    <div className="icon">
                        <img width="20px" height="20px" src="/public/mats/img/map-marker.svg" />
                    </div>
                    <div className="location-name">
                        <div className="name">
                            <span style={{fontWeight: "600"}}>{placeName || ''}</span>
                            {placeName && ' - '}
                            <span>{this.props.dest.placeName.address}</span>
                        </div>
                    </div>
                </div>
                <div className="order-form">
                    <input onChange={this.handleChange.bind(this, "name")} value={this.state.name} type="text" placeholder="name" />
                    <input onChange={this.handleChange.bind(this, "mobile")} value={this.state.mobile} type="text" placeholder="mobile" />
                </div>
            </div>
        );
    }

    handleChange(name, e){

        const data = {
            name : this.state.name,
            mobile : this.state.mobile
        }

        data[name] = e.target.value;
        this.setState({
            name: data.name,
            mobile: data.mobile
        })
        this.props.onChange(data, this.props.index);
    }
}

DestinationBox.propTypes = {
    dest : PropTypes.object,
    index : PropTypes.number.isRequired
}

export default DestinationBox;