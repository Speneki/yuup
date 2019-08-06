import React from 'react';

class indexMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        const mapOptions = {
            center: { lat: 40.7621937, lng: -73.9775307 },
            zoom: 12
        };
        const map = this.map = new google.maps.Map(this.mapNode, mapOptions);
        
        // const marker = new google.maps.Marker({
        //     position: { lat: this.props.business.latitude, lng: this.props.business.longitude },
        //     map: map,
        //     gestureHandling: 'none',
        //     zoomControl: false
        // });


        let marker, i;

        for (i = 0; i < this.props.businesses.length; i++) {
            debugger
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(this.props.businesses[i].latitude, this.props.businesses[i].longitude),
                map: map
            });

            marker.setMap(map);
        }


    }

    render() {
        return (
            <div ref={map => this.mapNode = map} className="index-map" />
        )
    }
}

export default indexMap;