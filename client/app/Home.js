import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import initMap from './map/initMap'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
import MarkerBox from './components/MarkerBox'
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
                key={i} />
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
        {displayDirections(props.directions)}
    </GoogleMap>
));

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            isShowGmap : false,
            pos : {lat: 13.7246812, lng: -100.5006702},
            totalDistance : 0,
            markers : [],
            points : [],
            directions: [],
            selectedMarker: -1,
            boxNum : 2
        }

    }

    componentWillMount() {
        
    }

    displayBoxes(){
        const bs = []
        for(let i=0;i<this.state.boxNum;i++){

            let removeable = false
            if(this.state.boxNum > 2 && i >= 1){
                removeable = true
            }

            bs.push(
                <MarkerBox
                    index={i}
                    point={this.state.points[i]}
                    key={i}
                    removeable={removeable}
                    onSelect={this.onSelectMarkerBox.bind(this)}
                    onRemove={this.removeMarkerBox.bind(this, i)}
                />
            )
        }
        return bs
    }
    
    render() {
        return (
            <div className="home">
                <div className="markerbox-container">
                    {
                        this.displayBoxes().map( (mk) => {
                            return mk
                        })
                    }
                    {/* <MarkerBox
                        index={0}
                        point={this.state.points[0]}
                        key={0}
                        onSelect={this.onSelectMarkerBox.bind(this)}
                    />
                    <MarkerBox
                        index={1}
                        point={this.state.points[1]}
                        key={1}
                        onSelect={this.onSelectMarkerBox.bind(this)}
                    /> */}
                    <div className="option-box">
                        <div className="option-icon">
                            <a onClick={this.addMarkerBox.bind(this)} role="button" style={{cursor: "pointer"}}>
                                <img className="icon" src="/public/mats/img/plus-sign-in-a-black-circle.svg"/>
                            </a>
                        </div>
                    </div>
                </div>
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

                TOTAL : {this.state.totalDistance + " KM"}
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
            this.setState({pos: data.pos, isShowGmap: true})
        })
        .catch(err => {
            this.setState({pos: this.state.pos, isShowGmap: true})
        })

    }
    
    handleMapLoad(map){
        
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
                    resolve(results)
                })
            }).then(results => {
                const points = this.state.points
                points[this.state.selectedMarker] = results
                this.setState({points})
            })
            
            // Direction
            if(markers.length >= 2){
                const DirectionsService = new google.maps.DirectionsService();
                const markers = this.state.markers
                const directions = this.state.directions
                
                if(this.state.selectedMarker - 1 >= 0 && markers[this.state.selectedMarker - 1] != undefined){
                    this.getDerection(markers[this.state.selectedMarker - 1], markers[this.state.selectedMarker])
                    .then( result => {
                        directions[this.state.selectedMarker - 1] = result
                        const distance = parseFloat(result.routes[0].legs[0].distance.text)
                        this.setState({
                            directions,
                            totalDistance : this.getTotalDistanceData(directions).totalDistance
                        })
                    })
                }

                if(this.state.selectedMarker + 1 < markers.length && markers[this.state.selectedMarker + 1] != undefined){
                    this.getDerection(markers[this.state.selectedMarker], markers[this.state.selectedMarker + 1])
                    .then( result => {
                        directions[this.state.selectedMarker] = result
                        const distance = parseFloat(result.routes[0].legs[0].distance.text)
                        this.setState({
                            directions,
                            totalDistance : this.getTotalDistanceData(directions).totalDistance
                        })
                    })
                }
                
                // this.getDerection(markers[markers.length - 2], markers[markers.length - 1])
                // .then( result => {

                //     const directions = this.state.directions
                //     directions.push(result)

                //     const distance = parseFloat(result.routes[0].legs[0].distance.text)

                //     this.setState({
                //         directions,
                //         totalDistance: this.state.totalDistance + distance
                //     })
                // })
            }
        }
    }

    onSelectMarkerBox(e){
        this.setState({
            selectedMarker: e
        })
    }

    addMarkerBox(e){
        this.setState({
            boxNum : this.state.boxNum + 1
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
        }else{
            this.getDerection(markers[index - 1], markers[index + 1])
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

    getDerection(start, end){
        return new Promise( (resolve, reject) => {
            const DirectionsService = new google.maps.DirectionsService();
            DirectionsService.route({
                origin: start.pos,
                destination: end.pos,
                travelMode: google.maps.TravelMode.DRIVING,
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
