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

        let marker, i;

        for (i = 0; i < this.props.businesses.length; i++) {
            marker = new google.maps.Marker({   
                position: new google.maps.LatLng(this.props.businesses[i].latitude, this.props.businesses[i].longitude),
                map: map,
                title: this.props.businesses[i].business_name,
                animation: google.maps.Animation.DROP
            });

            marker.setMap(map);

            map.addListener('center_changed', function () {
                // 3 seconds after the center of the map has changed, pan back to the
                // marker.
            });

            marker.addListener('click', function () {
                map.setZoom(15);
                map.setCenter(marker.getPosition());
            });
        }



    }

    render() {
        return (
            <div ref={map => this.mapNode = map} className="index-map" />
        )
    }
}

export default indexMap;