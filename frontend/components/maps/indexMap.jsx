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


        var marker, i;

        for (i = 0; i < this.props.businesses.length; i++) {
            debugger
            marker = new google.maps.Marker({
                // position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                // map: map
            });

            // google.maps.event.addListener(marker, 'click', (function (marker, i) {
            //     return function () {
            //         infowindow.setContent(locations[i][0]);
            //         infowindow.open(map, marker);
            //     }
            // })(marker, i));
        }


        marker.setMap(map);
    }

    render() {
        debugger
        return (
            <div ref={map => this.mapNode = map} className="index-map" />
        )
    }
}

export default indexMap;