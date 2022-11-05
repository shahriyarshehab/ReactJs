import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


var mountNode = document.getElementById("root");
ReactDOM.render(<App/>, mountNode);

/*
ReactDOM.render(
<React.StrictMode>
    <app/>
    </React.StrictMode>,
    document.getElementById('root'));


function Element({ locale }) {
return (
<div>
   <h1>{new Date().toLocaleTimeString(locale)}</h1>
  </div>
  
    );
}
*/

