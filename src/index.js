import React from "react";
import ReactDOM from "react-dom";
function Element({ locale }) {
return (
<div>
   <h1>{new Date().toLocaleTimeString(locale)}</h1>
  </div>
  
    );
}
ReactDOM.render(<Element locale="bn-BD" />, document.getElementById('root'));
  