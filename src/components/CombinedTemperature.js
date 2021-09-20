import React from "react";
import Datastream from '../Datastream';
import './CombinedTemperature.css';

class CombinedTemperature extends React.Component {

    constructor(props) {
        super(props);
        const current = {}
        this.props.config.data.forEach(function(d) {
            current[d.key] = 0
        })
        this.state = {value: 'warn', current: current};
        this.recieveValue = this.recieveValue.bind(this)
    }

    getNewStatusValue() {
        let allBelowMax = true
        let allAboveMin = true
        Object.keys(this.state.current).forEach(function(key) {
            this.props.config.data.forEach(function(d) {
                if (d.key === key) {
                    if (this.state.current[key] > d.ok_max) {
                        allBelowMax = false
                    } else if (this.state.current[key] < d.ok_min) {
                        allAboveMin = false

                    }
                }
            }, this)
        }, this)

        if (!allBelowMax) {
            return 'stop'
        }

        if (!allAboveMin) {
            return 'low'
        }

        return 'ok'
    }

    recieveValue(data) {
        let current = Object.assign({}, this.state.current);
        this.props.config.data.forEach(function(d) {
            if (data.key === d.key) {
                current[d.key] = data.value
            }
        })

        let newValue = this.getNewStatusValue();
        this.setState({current: current, value: newValue})
        
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
        return (
            <div className="gauge-container CombinedTemperature" style={{height:this.props.rowHeight, columnSpan:this.props.colSpan}}>
                <div className="value-title">{this.props.config.title}</div>
                <svg className={`icon ${this.state.value}`} width="200px" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} >
                    <g>
                        <path d="M272.695,331.958V82.852c0-9.22-7.475-16.696-16.696-16.696s-16.696,7.475-16.696,16.696V331.96
                            c-26.391,7.324-45.825,31.547-45.825,60.239c0,34.474,28.046,62.521,62.521,62.521s62.521-28.046,62.521-62.521
                            C318.52,363.507,299.086,339.284,272.695,331.958z M255.999,421.327c-16.062,0-29.129-13.067-29.129-29.129
                            s13.067-29.129,29.129-29.129s29.129,13.067,29.129,29.129S272.061,421.327,255.999,421.327z"/>
                        <path d="M329.438,297.539v-224.1C329.438,32.945,296.493,0,255.999,0c-40.495,0-73.439,32.945-73.439,73.439V297.54
                            c-28.963,22.463-46.133,56.928-46.36,93.909c-0.403,65.572,52.59,119.647,118.132,120.54c0.565,0.008,1.124,0.011,1.687,0.011
                            c66.016,0,119.784-53.378,119.784-119.802C375.801,354.909,358.63,320.167,329.438,297.539z M254.787,478.601
                            c-47.269-0.646-85.488-39.65-85.197-86.946c0.177-28.9,14.706-55.672,38.862-71.615c4.681-3.09,7.499-8.324,7.499-13.934V73.439
                            c0.001-22.082,17.966-40.047,40.048-40.047c22.082,0,40.047,17.966,40.047,40.047v232.665c0,5.61,2.817,10.844,7.499,13.935
                            c24.336,16.061,38.865,43.037,38.865,72.16C342.41,440.366,303.121,479.264,254.787,478.601z"/>
                    </g>
                </svg>
            </div>
        );
    }
}

export default CombinedTemperature