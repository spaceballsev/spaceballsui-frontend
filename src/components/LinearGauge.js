import React from "react";
import Datastream from '../Datastream';
import './ArcGauge.css';

const defaultOptions = {
    animDuration: 1,
    showValue: true,
    initialValue: 0,
    max: 100
    // Put any other defaults you want. e.g. dialStartAngle, dialEndAngle, radius, etc.
  };

class LinearGauge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '0'};
        this.recieveValue = this.recieveValue.bind(this)
        this.gaugeElRef = React.createRef();
    }

    recieveValue(data) {
        if (data.key === this.props.config.key) {
            this.setState({value: data.value})
        }
    
    }

    componentDidMount() {
        this.subscriptionId = Datastream.subscribe(this.recieveValue);

    }

    componentWillUnmount() {
        if (this.subscriptionId != null) {
          Datastream.unsubscribe(this.subscriptionId);
        }
    }

    render() {
        const value= 30;
        const max = 120;
        const min = 0;    

        return (
            <div className="gauge-container">
                <span className="value-title">{this.props.config.title}</span>
                <svg viewBox="0 0 100 50">
                    <line x1="30" y1="10" x2="30" y2="80" style={{"stroke":"rgb(255,0,0)", "strokeWidth":15, "stroke": '#eee'}} />
                    <line x1="30" y1="30" x2="30" y2="80" style={{"stroke":"rgb(255,0,0)", "strokeWidth":13, "stroke": '#333'}} />

                </svg>
            </div>
        );
    }
}

export default LinearGauge