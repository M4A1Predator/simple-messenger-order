import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import initMap from './map/initMap'
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";
// import { SearchBox } from 'react-google-maps/lib/places/SearchBox'
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
            pos : {lat: 13.7246812, lng: 100.5006702},
            totalDistance : 0,
            markers : [],
            points : [],
            directions: [],
            selectedMarker: -1,
            boxNum : 2
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
                />
            )
        }
        return bs
    }
    
    render() {
        return (
            <div className="home">
                <div className="markerbox-container">
                    <div className="markerbox-box" style={{position: "relative", left: "-50%"}}>
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
                <div className="gmap" style={{height: "80%", display: this.state.isShowGmap?'block':'block'}}>
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
                <div className="total-box">
                    <div className="total-text">Total {this.state.totalDistance + " KM"}</div>
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
            boxNum : this.state.boxNum + 1,
            selectedMarker: this.state.selectedMarker  + 1
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

    order(e){
        // Get data
        const points = this.state.points
        const markers = this.state.markers

        const dests = []
        for(let i=0;i<markers.length;i++){
            if(points[i] == undefined || markers[i] == undefined){
                continue;
            }

            let placeName = points[i][0].formatted_address
            if(placeName == undefined){
                placeName = markers[i].getPosition().lat() + " " + markers[i].getPosition().lng();
            }

            const dest = {
                marker : markers[i],
                point : points[i],
                placeName : placeName
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
