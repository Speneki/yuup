import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        const mapOptions = {
            center: { lat: 40.7128, lng: 74.0060 },
            zoom: 5
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        // debugger 
        return (
            <div ref={map => this.mapNode = map} className="bizMap" />
        )
    }
}

export default Map;