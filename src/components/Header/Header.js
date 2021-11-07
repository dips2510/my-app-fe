import React from 'react';
import { useNavigate } from "react-router-dom";
import './Header.css';

function Header() {
    const navigate = useNavigate();

    return (
        <div className="my-app-header">
            <label className="title-lbl">My App</label>
            <div>
                <button className="accounts-lbl" onClick={() => navigate('/')}>Accounts</button>
                <button className="transfer-lbl" onClick={() => navigate('/transfer')}>Transfer</button>
            </div>
            
        </div>
    )
}

export default Header
