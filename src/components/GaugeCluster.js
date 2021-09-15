import React from "react";
import GaugePage from "./GaugePage"

class GaugeCluster extends React.Component {
    render() {
      return <div className="gauge-cluster">
          {this.props.pages.map((p) =>
            <GaugePage page={p} />
          )}
      </div>;
    }
  }

export default GaugeCluster