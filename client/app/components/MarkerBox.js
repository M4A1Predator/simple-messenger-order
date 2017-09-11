import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './markerbox.styl'

class MarkerBox extends Component {

    constructor(props){
        super(props)

        this.state ={
            placeName: 'test'
        }
    }

    componentWillMount() {
        const placeName = this.getPlaceName(this.props.point)
        this.setState({
            placeName
        })
    }

    componentWillReceiveProps(nextProps) {

    }
    
    render() {
        const placeName = this.getPlaceName(this.props.point)
        const removeComponent = { component: ""}

        if(this.props.removeable === true){
            removeComponent.component = (
                <div className="remove-icon">
                    <a onClick={this.props.onRemove} role="button" style={{cursor: "pointer"}}>
                        <img className="icon" src="/public/mats/img/minus-sign-inside-a-black-circle.svg" />
                    </a>
                </div>
            )
        }

        return (
            <div className="marker-box">
                <div className="marker-container">
                    <div className="marker-icon">
                        <img className="icon" src="/public/mats/img/map-marker.svg" />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            value={placeName || ''} 
                            onFocus={this.onSelect.bind(this)} 
                            onChange={this.handleChanged.bind(this, 'placeName')}
                        />
                    </div>
                    {removeComponent.component}
                </div>
            </div>
        );
    }

    handleChanged(n, e){
        this.setState({[n]: e.target.value})
    }

    onSelect(){
        this.props.onSelect(this.props.index)
    }

    getPlaceName(results){
        if(results == undefined || results.length == 0){
            return '';
        }
        
        return results[0].formatted_address
    }
}

MarkerBox.propTypes = {
    index: PropTypes.number.isRequired,
    placeName: PropTypes.string,
    point: PropTypes.any
}
MarkerBox.defaultProps = {
    removeable : false
}

export default MarkerBox;