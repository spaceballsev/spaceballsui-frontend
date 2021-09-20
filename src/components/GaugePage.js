import React from "react";
import ArcGauge from "./ArcGauge";
import LinearGauge from "./LinearGauge";
import CombinedTemperature from "./CombinedTemperature";

import "./GaugePage.css";

class GaugePage extends React.Component {
    render() {
      let style = {
        gridTemplateColumns: 'repeat(2, 1fr)'
      }
      if (this.props.page.cols) {
        style.gridTemplateColumns = 'repeat(' + this.props.page.cols + ', 1fr)'
      }
      return <div className="GaugePage" style={style}>
          {this.props.page.gauges.map((g,i) =>
            this.renderGauge(g, i)
          )}
      </div>;
    }

    renderGauge(gauge, index) {
        if (gauge.type === 'arc') {
            return (<ArcGauge key={index} config={gauge} rowHeight={this.props.page.rowHeight}/>)
        } else if (gauge.type === 'linear') {
            return (<LinearGauge key={index} config={gauge} rowHeight={this.props.page.rowHeight}/>)
        } else if (gauge.type === 'combined_tempertaure') {
            return (<CombinedTemperature key={index} config={gauge} rowHeight={this.props.page.rowHeight}/>)
        }
    }
  }

export default GaugePage