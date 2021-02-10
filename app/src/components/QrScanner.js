import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import QrReader from 'react-qr-reader';

export const QrScanner = () => {

    let history = useHistory();

    const handleScan = (data) => {
        if(data){
            history.push(`/box/${data}`);
        }
    };
    
    const handleError = (err) => {
        console.error(err);
    };

    return(
        <div style={{padding: 10}}>
            <QrReader
                delay={100}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%' }}
                facingMode={'environment'}
            />
        </div>
    )
}