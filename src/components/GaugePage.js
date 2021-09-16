import React from "react";
import ArcGauge from "./ArcGauge";
import "./GaugePage.css";

class GaugePage extends React.Component {
    render() {
      let style = {
        'grid-template-columns': 'repeat(2, 1fr)'
      }
      if (this.props.page.cols) {
        style['grid-template-columns'] = 'repeat(' + this.props.page.cols + ', 1fr)'
      }
      return <div className="GaugePage" style={style}>
          {this.props.page.gauges.map((g) =>
            <ArcGauge key={g.key} config={g}/>
          )}
      </div>;
    }
  }

export default GaugePage