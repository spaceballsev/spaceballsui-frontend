import React from "react";
import Datastream from '../Datastream';
import './ArcGauge.css';
import SvgGauge from "svg-gauge";

const defaultOptions = {
    animDuration: 1,
    showValue: true,
    initialValue: 0,
    dialStartAngle: 180,
    dialEndAngle: 0,
    max: 100,
    viewBox: "0 0 100 60"
    // Put any other defaults you want. e.g. dialStartAngle, dialEndAngle, radius, etc.
  };

class ArcGauge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '0'};
        this.recieveValue = this.recieveValue.bind(this)
        this.gaugeElRef = React.createRef();
    }

    recieveValue(data) {
        if (data.key === this.props.config.key) {
            this.setState({value: data.value})
            this.gaugeRef.setValue(this.state.value)

        }
    
    }

    componentDidMount() {
        this.subscriptionId = Datastream.subscribe(this.recieveValue);
        const options = { ...defaultOptions, ...this.props.config };

        if (options.colors) {
            options.color = function(value) {
                var color 
                options.colors.forEach(function(c) {
                    if (value <= c.end && value >= c.start) {
                        color = c.color
                    }
                })
                return color
            }
        }

        if (options.unit) {
            options.label = function(value) {
                return value + options.unit
            }
        }
        this.gaugeRef = SvgGauge(this.gaugeElRef.current, options)

    }

    componentWillUnmount() {
        if (this.subscriptionId != null) {
          Datastream.unsubscribe(this.subscriptionId);
        }
    }

    render() {
        return (
            <div className="gauge-container" style={{height:this.props.rowHeight, gridColumnStart:"span " + this.props.config.colSpan}}>
                <span className="value-title">{this.props.config.title}</span>
                <div ref={this.gaugeElRef}>
                </div>
            </div>
        );
    }
}

export default ArcGauge