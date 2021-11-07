import React from 'react';
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import './AccountList.css';

function AccountList({accountList}) {
    const navigate = useNavigate();
    const openAccountHistory = (acctNo) => {
        navigate('/history');
    }
    return (
        <section className="account-section">
            <div className="account-section-lbl">Accounts</div>
            <div>
                <ul className="account-items">
                {accountList.map((item,index) => {
                    return(
                        <li key={index} id="account-items-list">
                            <label onClick={()=>openAccountHistory(item.accountNumber)}>{item.name}</label>
                            <label onClick={()=>openAccountHistory(item.accountNumber)}>{item.accountNumber}</label>
                        </li>
                    )
                })}
                </ul>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        accountList: state.accountList
      }
}

export default connect(mapStateToProps,{})(AccountList)
