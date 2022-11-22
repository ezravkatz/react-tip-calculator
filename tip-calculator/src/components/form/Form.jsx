import React from "react";
import "./form.css";

//icons
import { TbCurrencyDollar } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";

const Form = ({
  handleBillAmtInput,
  billAmt,
  handleSelectedTip,
  showBillAmtError,
  handleDinersInput,
  diners,
  showDinersError,
}) => {
  return (
    <div className="form">
      <div className="label__group">
        <div className="label__container">
          <label className="label" htmlFor="bill">
            Bill
          </label>
          <p className="error">
            {showBillAmtError ? "Please enter a valid number" : ""}
          </p>
        </div>
        <div className="number__wrapper">
          <input
            type="text"
            class="number__input"
            id="bill"
            onChange={(e) => handleBillAmtInput(e)}
            value={billAmt}
          />
          <div className="icon" aria-hidden="true">
            <TbCurrencyDollar />
          </div>
        </div>
      </div>

      <div className="tip__section">
        <label htmlFor="label">Select a Tip Percentage</label>
        <div className="tip-amount__container">
          <div className="tip__amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value=".05"
            />
            <div className="tip__btn"> 15%</div>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value=".10"
            />
            <div className="tip__btn"> 20%</div>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value=".15"
            />
            <div className="tip__btn"> 25%</div>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value=".25"
            />
            <div className="tip__btn"> 30%</div>
          </div>
          <div className="tip__amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value=".5"
            />
            <div className="tip__btn"> 50%</div>
          </div>
          <input type="text" className="tip__custom" />
        </div>
      </div>

      <div className="label__group">
        <div className="label__container">
          <label htmlFor="diners">Number of Diners</label>
          <p className="error">
            {showDinersError ? "Please enter a valid number" : ""}
          </p>
        </div>
        <div className="number__wrapper">
          <input
            type="text"
            class="number__input"
            onInput={handleDinersInput}
            value={diners}
            id="diners"
          />
          <div className="icon" aria-hidden="true">
            <BsPeople />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
