const config = {
    websocketURI: "ws://localhost:6789",
    backgroundColor: '#000000',
    pages: [{
        title: "",
        gauges: [{
            key: "state_of_charge",
            min: 0,
            max: 100,
            type: "arc"
        },{
            key: "charger_status",
            min: -400,
            max: 400,
            type: "arc"
        }]
    }]
}

export default config