import React from 'react';
import Datastream from '../Datastream';

class ArcGauge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
        this.recieveValue = this.recieveValue.bind(this)
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
        return (
            <div>{this.state.value}</div>
        );
    }
}

export default ArcGauge