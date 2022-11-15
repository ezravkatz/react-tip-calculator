import { useState } from "react";

// style
import "./index.css";
// images
import logo from "./assets/logowhite.png";

// components
import Display from "./components/display/Display";
import Form from "./components/form/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="wrapper">
      <img src={logo} alt="Tip Calc Logo" />
      <div className="container">
        <Form />
        <Display />
      </div>
      <div className="display"></div>
    </div>
  );
}

export default App;
