import React from 'react';
import { connect } from "react-redux";
import './AccountHistory.css';

function AccountHistory({accountHistory}) {
    return (
        <section className="account-history">
            <div className="account-history-lbl">History</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Action</td>
                            <td>Amount</td>
                            <td>Description</td>
                            <td>From</td>
                            <td>To</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        accountHistory.map( (item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.date}</td>
                                <td><span className={item.action==='CREDIT'?'credit-lbl':'debit-lbl'}>{item.action}</span></td>
                                <td>{item.currency} {item.amount}</td>
                                <td>{item.description}</td>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        accountHistory: state.accountHistory
      }
}

export default connect(mapStateToProps,{})(AccountHistory)
