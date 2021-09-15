import React from "react";

class GaugePage extends React.Component {
    render() {
      console.log(this.props.page)
      return <div className="gauge-page">
          {this.props.page.gauges.map((g) =>
            <span>{g.key}</span>
          )}
      </div>;
    }
  }

export default GaugePage