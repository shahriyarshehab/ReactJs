import React from "react";
import Clock from "./components/Clock"
/*function App() {
  return <div> Hello </div>
}

export default App;
*/


class App extends React.Component {
  render() {
    return (
      <Clock locale="en-US"/>
    );
  }
}

export default App;
