import React from 'react';
import './Label.css';

function Label({mandatory, name}) {
    return (
        <>
        {mandatory?<label>{name}<span className="mandatory">*</span></label>
        :<label>{name}</label>}
        </>
    )
}

export default Label
