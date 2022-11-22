import { useState } from "react";

// style
import "./index.css";
// images
import logo from "./assets/logowhite.png";

// components
import Display from "./components/display/Display";
import Form from "./components/form/Form";

function App() {
  const [billAmt, setBillAmt] = useState(null);
  const [showBillAmtError, setShowBillAmtError] = useState(false);
  const [diners, setDiners] = useState("");
  const [showDinersError, setShowDinersError] = useState(false);
  const [isTipSelected, setIsTipSelected] = useState(false);
  const [selectedTip, setSelectedTip] = useState(0);
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  function calculateTip() {
    setCalculatedTip((billAmt * selectedTip) / diners);
  }

  // TO DO: fix RegExp.......

  function handleBillAmtInput(e) {
    const input = e.target.value;
    const pattern = /^[0-9]*(\.[0-9]{0,2})?$/;
    setBillAmt(input);
    if (pattern.test(input)) {
      setShowBillAmtError(false);
    } else {
      setShowBillAmtError(true);
    }
  }

  function handleSelectedTip(e) {
    setSelectedTip(e.target.value);
  }

  function handleDinersInput(e) {
    const input = e.target.value;
    const pattern = /^[0-9]+$/;
    showDinersError(input);
    if (pattern.test(input)) {
      setShowDinersError(false);
    } else {
      setShowDinersError(true);
    }
  }

  function handleDinersInput(e) {
    setDiners(e.target.value);
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="Tip Calc Logo" />
      <div className="container">
        <Form
          handleBillAmtInput={handleBillAmtInput}
          //   handleSelectedTip={handleSelectedTip}
          billAmt={billAmt}
          showBillAmtError={showBillAmtError}
          //   handleDinersInput={handleDinersInput}
          //   showDinersError={showDinersError}
        />
        <Display />
      </div>
    </div>
  );
}

export default App;
