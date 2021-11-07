import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import moment from "moment";
import "./AccountTransfer.css";
import "react-datepicker/dist/react-datepicker.css";
import { submitTransferAction } from "../../action/accountHistoryAction";
import Label from "../Label/Label";

function AccountTransfer({ accountList, submitTransferAction }) {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [description, setDescription] = useState("");
  const [from, setFrom] = useState("");
  const [toaccount, setToaccount] = useState("");
  const [error, setError] = useState("");

  const submitTransfer = () => {
    let obj = {
      date: moment(startDate).format("DD MMM YYYY"),
      action: "DEBIT",
      amount: amount,
      currency: currency,
      description: description,
      from: from,
      to: toaccount,
    };
    if (startDate && amount && from && toaccount) {
      submitTransferAction(obj);
      navigate("/history");
    } else {
      setError("*Please input all mandatory fields");
    }
  };
  useEffect(()=>{
    setError("");
  },[amount,from,toaccount])
  return (
    <section className="account-transfer-section">
      <div className="transfer-form-title">New Transfer</div>
      <div className="account-transfer-form">
        <div className="transfer-date">
          <Label mandatory={true} name="Date" />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="transfer-amount">
          <Label mandatory={true} name="Amount" />
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="transfer-currency">
          <Label mandatory={true} name="Currency" />
          <select
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="HKD">HKD</option>
          </select>
        </div>
        <div className="transfer-description">
          <Label mandatory={false} name="Description" />
          <textarea
            rows="4"
            maxLength="50"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <Label mandatory={true} name="From" />
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Please Select</option>
            {accountList.map((item, index) => {
              return (
                <option
                  value={item.accountNumber}
                  disabled={item.accountNumber === toaccount}
                  key={index}>
                  {item.accountNumber}
                </option>
              );
            })}
          </select>
        </div>
        <div className="transfer-to">
          <Label mandatory={true} name="To" />
          <select
            value={toaccount}
            onChange={(e) => setToaccount(e.target.value)}
          >
            <option value="">Please Select</option>
            {accountList.map((item, index) => {
              return (
                <option
                  value={item.accountNumber}
                  disabled={item.accountNumber === from}
                  key={index}
                >
                  {item.accountNumber}
                </option>
              );
            })}
          </select>
        </div>
        <div className="transfer-btn">
          <button className="transfer-submit" onClick={() => submitTransfer()}>
            Transfer
          </button>
          <button className="transfer-cancel" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
        <div className="error-lbl">
            {error}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    accountList: state.accountList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitTransferAction: (item) => dispatch(submitTransferAction(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountTransfer);
