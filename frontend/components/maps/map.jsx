import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    

    componentDidUpdate () {
            const mapOptions = {
                center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
                zoom: 15
            };
            const map = this.map = new google.maps.Map(this.mapNode, mapOptions);
            
            const marker = new google.maps.Marker({
                position: { lat: this.props.business.latitude, lng: this.props.business.longitude },
                map: map,
                gestureHandling: 'none',
                zoomControl: false
            });

            marker.setMap(map);
    }
    
    componentDidMount () {
            const mapOptions = {
                center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
                zoom: 15
            };
            const map = this.map = new google.maps.Map(this.mapNode, mapOptions);

    }
    
    render() {
        return (
            <div ref={map => this.mapNode = map} className="biz-map" />
        )
    }
}

export default Map;