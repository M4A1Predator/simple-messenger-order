import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import MarkerBox from './components/MarkerBox'
import { getPlaceName } from './helpers/PlaceUtils'
import axios from 'axios'
import './home.styl'

const displayMarkers = (markers) => {
    return markers.map( (marker, i) => {
        return (
            <Marker
                position={marker.pos}
                key={marker.key}
                icon = {{
                    url: '/public/mats/img/map-marker.svg',
                    scaledSize: new google.maps.Size(32, 32)
                }}
            />
        )
    })

}

const displayDirections = (directions) => {
    return directions.map( (direction, i) => {
        
        if(direction == undefined){
            return ""
        }

        return(
            <DirectionsRenderer 
                directions={direction}
                options={{
                    preserveViewport: true,
                    suppressMarkers: true
                }}
                key={i} />
        )
    })
}

const Gmap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={14}
        center={props.pos}
        mapElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        onClick={props.onClickMap}
        onDragStart={props.forceBlur}
    >   
        {displayMarkers(props.markers)}
        {displayDirections(props.directions)}
    </GoogleMap>
));

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            isShowGmap : false,
            pos : {lat: 13.7246812, lng: 100.5006702},
            totalDistance : 0,
            markers : [],
            points : [],
            directions: [],
            selectedMarker: -1,
            boxNum : 2,
            map : null
        }

    }

    componentWillMount() {
        if(this.props.orderData != null){
            const ms = []
            const ps = []
            this.props.orderData.dests.forEach((dest) => {
                ms.push(dest.marker)
                ps.push(dest.point)
            })

            this.setState({
                boxNum : this.props.orderData.dests.length,
                markers: ms,
                points : ps,
                directions: this.props.orderData.directions,
                totalDistance: this.props.orderData.totalDistance
            })
        }
    }

    displayBoxes(){
        const bs = []
        for(let i=0;i<this.state.boxNum;i++){

            let removeable = false
            if(this.state.boxNum > 2 && i >= 1){
                removeable = true
            }

            let isSelected = false
            if(this.state.selectedMarker === i){
                isSelected = true
            }

            bs.push(
                <MarkerBox
                    index={i}
                    isSelected={isSelected}
                    point={this.state.points[i]}
                    key={i}
                    removeable={removeable}
                    onSelect={this.onSelectMarkerBox.bind(this)}
                    onRemove={this.removeMarkerBox.bind(this, i)}
                    onSearchPlace={this.handleSearchPlace.bind(this)}
                />
            )
        }
        return bs
    }
    
    render() {
        
        return (
            <div className="home">
                <div className="markerbox-container">
                    <div className="markerbox-box">
                        {
                            this.displayBoxes().map( (mk) => {
                                return mk
                            })
                        }
                        <div className="option-box">
                            <div className="option-icon">
                                <a onClick={this.addMarkerBox.bind(this)} role="button" style={{cursor: "pointer"}}>
                                    <img className="icon" width="20px" height="20px" src="/public/mats/img/plus-sign-in-a-black-circle.svg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gmap" style={{height: "calc(90% - 140px)", display: this.state.isShowGmap?'block':'block'}}>
                    <Gmap
                        pos={this.state.pos}
                        onMapLoad={this.handleMapLoad.bind(this)}
                        containerElement={<div style={{ height: `100%` }}/>}
                        mapElement={<div style={{ height: `100%` }} />}
                        onClickMap={this.handleMapClick.bind(this)}
                        markers={this.state.markers}
                        directions={this.state.directions}
                        ref="gmap"
                        forceBlur={this.forceBlur.bind(this)}
                    />
                </div>
                <div className="total-box">
                    <div className="total-text">Total {this.state.totalDistance.toFixed(1) + " KM"}</div>
                    <div className="btn-container">
                        <button onClick={this.order.bind(this)}>Next</button>
                    </div>    
                </div>
                
            </div>
        );
    }

    componentDidMount() {
        // Get position
        const promise = new Promise( (resolve, reject) => {
            if(this.props.orderData != null){
                if(this.props.orderData.dests[0] != undefined){
                    const firstDest = this.props.orderData.dests[0];
                    const pos = firstDest.marker.pos;
                    resolve({pos})
                    return;
                }
            }
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    const data = {
                        pos
                    }
                    resolve(data)
                }, function() {
                    reject({"msg": "geolocation err"})
                });
            } else {
                // Browser doesn't support Geolocation
                reject({"msg": "Browser doesn't support Geolocation"})
            }
        })
        .then(data => {
            this.setState({pos: data.pos, isShowGmap: true})
        })
        .catch(err => {
            this.setState({pos: this.state.pos, isShowGmap: true})
        })
        // new google.maps.places.PlacesService();
    }
    
    handleMapLoad(ref){
        // this.refs.map = ref;
        // if(ref){
            // new google.maps.places.PlacesService(ref.getDiv())
            // console.log(ref.props.mapElement)
        // }
    }

    handleMapClick(e){
        if(this.state.selectedMarker >= 0){
            const m = {
                pos: e.latLng,
                defaultAnimation: 2,
                key: Date.now(),
            }

            const markers = this.state.markers;
            markers[this.state.selectedMarker] = m
            this.setState({
                markers
            })

            $('input').each(function(){
                $(this).trigger('blur');
            })

            // Geocoder
            const geocoder = new google.maps.Geocoder;
            new Promise( (resolve, reject) => {
                geocoder.geocode({'location': e.latLng}, function(results, status) {
                    if(status != google.maps.GeocoderStatus.OK){
                        return;
                    }

                    if(results.length == 0){
                        return;
                    }
                    // geocoder.geocode({'placeId': results[0].place_id}, function(results, status){
                    //     console.log(results)
                    //     if(status != google.maps.GeocoderStatus.OK){
                    //         return;
                    //     }
                    // })
                    resolve(results)
                })
            }).then(results => {
                const points = this.state.points
                points[this.state.selectedMarker] = results
                this.setState({points})
            })
            
            // Direction
            this.calculateDirections(this.state.selectedMarker, markers)
        }
    }

    handleSearchPlace(index, location){
        const markers = this.state.markers;
        const points = this.state.points
        const m = {
            pos: location.geometry.location,
            defaultAnimation: 2,
            key: Date.now(),
        }
        
        markers[index] = m
        const pos = {lat:m.pos.lat(), lng:m.pos.lng()}
        points[index] = [location]
        this.setState({
            points,
            markers,
            pos
        })

        this.calculateDirections(index, markers)
    }

    onSelectMarkerBox(e){
        this.setState({
            selectedMarker: e
        })
    }

    addMarkerBox(e){

        const curIndex = this.state.selectedMarker
        const boxNum = this.state.boxNum
        
        let selectedIndex = boxNum
        
        this.setState({
            boxNum : boxNum + 1,
            selectedMarker: selectedIndex
        })
    }

    removeMarkerBox(index){
        const markers = this.state.markers
        const points = this.state.points
        let selectedMarker = 0

        // Calculate directions
        const directions = this.state.directions
        if(index == 0){
            directions.splice(0, 1)
        }else if(index == markers.length - 1){
            directions.splice(directions.length - 1, 1)
            selectedMarker = this.state.selectedMarker - 1
            this.setState({
                totalDistance : this.getTotalDistanceData(directions).totalDistance
            })
        }else{
            this.getDirection(markers[index - 1], markers[index + 1])
            .then(result => {
                directions[index - 1] = result
                directions.splice(index, 1) 
                this.setState({
                    directions,
                    totalDistance : this.getTotalDistanceData(directions).totalDistance
                })
            })
            selectedMarker = this.state.selectedMarker - 1
        }

        // Remove point
        markers.splice(index, 1)
        points.splice(index, 1)

        // Set state
        this.setState({
            markers,
            points,
            boxNum: this.state.boxNum - 1,
            selectedMarker
        })
    }

    calculateDirections(selectedIndex, markers){
        // Direction
        if(markers.length >= 2){
            const DirectionsService = new google.maps.DirectionsService();
            const directions = this.state.directions
            
            if(selectedIndex - 1 >= 0 && markers[selectedIndex - 1] != undefined){
                this.getDirection(markers[selectedIndex - 1], markers[selectedIndex])
                .then( result => {
                    directions[selectedIndex - 1] = result
                    const distance = parseFloat(result.routes[0].legs[0].distance.text)
                    this.setState({
                        directions,
                        totalDistance : this.getTotalDistanceData(directions).totalDistance
                    })
                })
                .catch(err => {
                    markers.splice(selectedIndex, 1)
                    this.setState({markers})
                })
            }

            if(selectedIndex + 1 < markers.length && markers[selectedIndex + 1] != undefined){
                this.getDirection(markers[selectedIndex], markers[selectedIndex + 1])
                .then( result => {
                    directions[selectedIndex] = result
                    const distance = parseFloat(result.routes[0].legs[0].distance.text)
                    this.setState({
                        directions,
                        totalDistance : this.getTotalDistanceData(directions).totalDistance
                    })
                })
                .catch(err => {
                    markers.splice(selectedIndex, 1)
                    this.setState({markers})
                })
            }
        }
    }

    getDirection(start, end){
        return new Promise( (resolve, reject) => {
            if(start == undefined || end == undefined){
                reject("Undefined point")
                return;
            }

            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: start.pos,
                destination: end.pos,
                travelMode: google.maps.TravelMode.DRIVING,
                // preserveViewport: true,
                // suppressMarkers: true
                }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    const totalDistance = result.routes[0].legs[0].distance
                    resolve(result)
                } else {
                    console.error('error fetching directions ' + result);
                    reject({"err": 'error fetching directions ' + result});
                }
            });
        })
    }

    getTotalDistanceData(directions){
        const data ={
            totalDistance: 0.0
        }
        for(let i=0;i<directions.length;i++){
            if(directions[i] != undefined){
                const distance = parseFloat(directions[i].routes[0].legs[0].distance.text)
                data.totalDistance += distance
            }else{
                console.log("wrong dis")
            }
        }

        return data
    }

    forceBlur(e){
        $('input').each(function(){
            $(this).trigger('blur');
        })
    }

    // getPlaceName(results){
    //     if(results == undefined || results.length == 0){
    //         return '';
    //     }

    //     if(results[0].name != undefined){
    //         return results[0].name + ' - ' + results[0].formatted_address
    //     }
        
    //     return results[0].formatted_address
    // }

    order(e){
        // Get data
        const points = this.state.points
        const markers = this.state.markers

        const dests = []
        for(let i=0;i<markers.length;i++){
            if(points[i] == undefined || markers[i] == undefined){
                continue;
            }
            const nameData = getPlaceName(points[i])
            const dest = {
                marker : markers[i],
                point : [points[i][0]],
                placeName : nameData
            }
            dests.push(dest)
        }

        if(dests.length < 2){
            return;
        }

        const data = {
            dests,
            directions: this.state.directions,
            totalDistance: this.state.totalDistance
        }

        // get option data
        if(this.props.orderData != undefined && this.props.orderData.options != undefined){
            data.options = this.props.orderData.options;
        }

        // Redirect
        this.props.order(data);
        this.props.history.push('/orderDetail')
    }
    
}

const mapStateToProps = (state) => {
    return {
        orderData : state.orderData
    }
}

const mapDispatchToProps = (dispatch, prevState) => {
    return {
        order : (orderData) => {
            const action = {
                type: 'ORDER',
                data: orderData
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
