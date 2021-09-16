import React from "react";
import ArcGauge from "./ArcGauge";

class GaugePage extends React.Component {
    render() {
      console.log(this.props.page)
      return <div className="GaugePage">
          {this.props.page.gauges.map((g) =>
            <ArcGauge key={g.key} config={g}/>
          )}
      </div>;
    }
  }

export default GaugePage