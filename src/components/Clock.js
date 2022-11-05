import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };
  /*  constructor(props) {
    super (props);
   this.state = { date : new Date() };
  }*/

  componentDidMount() {
    this.clockTimer = setInterval(() => this.clockRun(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  clockRun() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h1 class="heading">
          <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }
}

export default Clock;
