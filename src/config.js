const config = {
    websocketURI: "ws://localhost:6789",
    backgroundColor: '#000000',
    pages: [{
        title: "",
        cols: 3,
        gauges: [{
            key: "state_of_charge",
            min: 0,
            max: 100,
            dialStartAngle: 180,
            dialEndAngle: 0,
            type: "arc",
            title: "State of Charge",
            unit: '%',
            colors: [{
                start: 0,
                end: 14,
                color:'#F32450'
            }, {
                start: 14,
                end: 29,
                color:'#f3de24'
            }, {
                start: 30,
                end: 100,
                color:'#00ff3d'
            }]
        },{
            title: "Charging Current",
            key: "charging_current",
            min: 0,
            max: 40,
            dialStartAngle: 180,
            dialEndAngle: -90,
            type: "arc",
            unit: 'A'
        }]
    }]
}

export default config