import React from "react";
import GaugePage from "./GaugePage"

class GaugeCluster extends React.Component {
    render() {
      return <div className="GaugeCluster">
          {this.props.pages.map((p, i) =>
            <GaugePage key={i} page={p} />
          )}
      </div>;
    }
  }

export default GaugeCluster