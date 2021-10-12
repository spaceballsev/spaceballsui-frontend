const config = {
    websocketURI: "ws://" + window.location.hostname + ":6789",
    theme: 'dark',
    pages: [{
        title: "",
        cols: 6,
        rowHeight: "300px",
        gauges: [{
            key: "state_of_charge",
            min: 0,
            max: 100,
            type: "arc",
            title: "State of Charge",
            unit: '%',
            colSpan: 2,
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
            max: 10,
            type: "linear",
            unit: 'A',
            colSpan: 1,
            colors: [{
                start: 0,
                end: 5,
                color:'#00ff3d'
            },{
                start: 6,
                end: 10,
                color:'#a01818'
            }]
        }, {
            key: "temperature",
            type: "combined_tempertaure",
            title: "Temperatures",
            colSpan: 1,
            data: [{
                key: 'motor_temperature',
                ok_min: 10,
                ok_max: 50
            }, {
                key: 'inverter_temperature',
                ok_min: 10,
                ok_max: 80
            }]
        }]
    }]
}

export default config