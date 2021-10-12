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
        //calculate value as a percentage of range
        const valuePercentage = this.state.value / (this.props.config.max - this.props.config.min)
        //y2 - y1
        const steps = (100 - 10) * valuePercentage

        let colour = '#fff'
        if (this.props.config.colors) {
            this.props.config.colors.forEach(function(c) {
                if (this.state.value >= c.start && this.state.value <= c.end) {
                    colour = c.color
                    return
                }
            }, this)
        }

        return (
            <div className="gauge-container">
                <span className="value-title">{this.props.config.title}</span>
                <svg viewBox="0 0 100 100">
                    <line className="dial" x1="30" y1="10" x2="30" y2="100" style={{ "strokeWidth":30}} />
                    <line x1="30" y1={100 - steps} x2="30" y2="100" style={{"strokeWidth":25, "stroke": colour }} />
                    <text x="70" y="50" fill="#999" className="value-text" fontSize="100%" fontFamily="sans-serif" fontWeight="normal" textAnchor="middle" alignmentBaseline="middle" dominantBaseline="central">{this.state.value}{this.props.config.unit}</text>
                </svg>
            </div>
        );
    }
}

export default LinearGauge