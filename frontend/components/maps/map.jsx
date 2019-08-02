import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.730610, lng: -73.935242},
            zoom: 11    
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        // debugger 
        return (
            <div ref={map => this.mapNode = map} className="biz-map" />
        )
    }
}

export default Map;