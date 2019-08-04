import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        // const mapOptions = {
        //     center: { lat: this.props.business.latitude, lng: this.props.business.longitude},
        //     zoom: 15
        // };
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    componentDidUpdate (prevProps) {
        if (this.props.business.latitude !== prevProps.business.latitude) {
            const mapOptions = {
                center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
                zoom: 15
            };
            const map = this.map = new google.maps.Map(this.mapNode, mapOptions);
            
            debugger
            const marker = new google.maps.Marker({
                position: { lat: this.props.business.latitude, lng: this.props.business.longitude },
                map: map,
                icon: window.logo
            });

            marker.setMap(map);
        }
    }
    
    render() {
        return (
            <div ref={map => this.mapNode = map} className="biz-map" />
        )
    }
}

export default Map;