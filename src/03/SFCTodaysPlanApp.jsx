import React from 'react';
import TodaysPlan from "./TodaysPlan.jsx";

function SfcTodaysPlanApp(props) {
    const {onButtonClick, hasPlan} = props;
    return (
        <div className="body">
            {hasPlan?<TodaysPlan/>:null}
            <button onClick={onButtonClick}>
                ęłíěě
            </button>
        </div>
    );
}

export default SfcTodaysPlanApp;