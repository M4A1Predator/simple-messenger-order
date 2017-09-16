import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
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
        const placeName = this.getPlaceName(nextProps.point)
        this.setState({
            placeName
        })
    }
    
    render() {
        // const placeName = this.getPlaceName(this.props.point)
        const removeComponent = { component: "" }

        if(this.props.removeable === true){
            removeComponent.component = (
                <div className="remove-icon">
                    <a onClick={this.props.onRemove} role="button" style={{cursor: "pointer"}}>
                        <img className="icon" width="20px" height="20px" src="/public/mats/img/minus-sign-inside-a-black-circle.svg" />
                    </a>
                </div>
            )
        }

        const intStyle = {}
        if(this.props.isSelected === true){
            intStyle.backgroundColor="#e1f4fc"
        }

        return (
            <div className="marker-box">
                <div className="marker-container">
                    <div className="marker-icon">
                        <img className="icon" width="20px" height="20px" src="/public/mats/img/map-marker.svg" />
                    </div>
                    <div className="input-box">
                        <input
                            ref={"findLocation"}
                            style={intStyle}
                            type="text"
                            value={this.state.placeName}
                            onFocus={this.onSelect.bind(this)} 
                            onChange={this.handleChanged.bind(this, 'placeName')}
                        />
                    </div>
                    {removeComponent.component}
                </div>
            </div>
        );
    }

    componentDidMount() {
        const autocomplete = new google.maps.places.Autocomplete(this.refs.findLocation)
        autocomplete.addListener('place_changed', () => {
            // console.log(autocomplete.getPlace())
            // this.setState({
            //     placeName: autocomplete.getPlace().formatted_address
            // })
            // console.log(autocomplete.getPlace().geometry)
            this.props.onSearchPlace(this.props.index, autocomplete.getPlace())
        })
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
    removeable : false,
    isSelected: false
}

export default MarkerBox;