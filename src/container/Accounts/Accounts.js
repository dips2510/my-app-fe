import React from 'react';
import { connect } from "react-redux";
import Header from '../../components/Header/Header';

function Accounts(props) {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        accountHistory: state.accountHistory
      }
}

export default connect(mapStateToProps,{})(Accounts);
