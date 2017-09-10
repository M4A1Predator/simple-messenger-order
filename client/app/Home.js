import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import initMap from './map/initMap'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
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

const Gmap = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={13}
        center={props.pos}
        mapElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        onClick={props.onClickMap}
    >
        {displayMarkers(props.markers)}
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
));

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            isShowGmap : false,
            pos : {lat: 13.7246812, lng: -100.5006702},
            markers : [],
            points : [],
            directions: null,
            totalDistance : 0
        }

    }

    handleMapLoad(map){
        
    }

    handleMapClick(e){
        console.log(e)
        const m = {
            pos: e.latLng,
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
        }

        const markers = this.state.markers;
        markers.push(m)

        // Direction
        if(markers.length >= 2){
            const DirectionsService = new google.maps.DirectionsService();
            this.getDerection(markers[markers.length - 2], markers[markers.length - 1])
            .then( result => {
                this.setState({
                    directions: result,
                    totalDistance: result.routes[0].legs[0].distance.text
                })
            })
        }

        this.setState({
            markers
        })
    }

    render() {
        return (
            <div style={{height: '100vh'}}>
                Distance : {this.state.totalDistance}
                <div style={{height: "80%", display: this.state.isShowGmap?'block':'block'}}>
                    <Gmap
                        pos={this.state.pos}
                        onMapLoad={this.handleMapLoad.bind(this)}
                        containerElement={<div style={{ height: `100%` }}/>}
                        mapElement={<div style={{ height: `100%` }} />}
                        onClickMap={this.handleMapClick.bind(this)}
                        markers={this.state.markers}
                        directions={this.state.directions}
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {

        // Get position
        const promise = new Promise( (resolve, reject) => {
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
                    // handleLocationError(true, infoWindow, map.getCenter());
                    reject({})
                });
            } else {
                // Browser doesn't support Geolocation
                // handleLocationError(false, infoWindow, map.getCenter());
                reject({})
            }
        })
        .then(data => {
            console.log(data)
            this.setState({pos: data.pos, isShowGmap: true})
        })
        .catch(err => {
            this.setState({pos: this.state.pos, isShowGmap: true})
        })

        // const DirectionsService = new google.maps.DirectionsService();
        // DirectionsService.route({
        //     origin: new google.maps.LatLng(13.7071284, 100.4965502),
        //     destination: new google.maps.LatLng(13.7081284, 100.497552),
        //     travelMode: google.maps.TravelMode.DRIVING,
        //     }, (result, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //         console.log(result)
        //         const totalDistance = result.routes[0].legs[0].distance
        //         this.setState({
        //             directions: result,
        //             totalDistance: totalDistance.text
        //         });
        //     } else {
        //         console.error('error fetching directions ' + result);
        //     }
        // });
    }

    getDerection(start, end){
        return new Promise( (resolve, reject) => {
            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: start.pos,
                destination: end.pos,
                travelMode: google.maps.TravelMode.DRIVING,
                }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    console.log(result)
                    const totalDistance = result.routes[0].legs[0].distance
                    // this.setState({
                    //     directions: result,
                    //     totalDistance: totalDistance.text
                    // });
                    resolve(result)
                } else {
                    console.error('error fetching directions ' + result);
                    reject({"err": 'error fetching directions ' + result});
                }
            });
        })
    }
    
}

const mapStateToProps = (state) => {
    return {
        webData : state.webData
    }
}

const mapDispatchToProps = (dispatch, prev) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
