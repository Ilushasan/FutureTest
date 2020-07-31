import React from 'react';
import './DataSelector.css'

const DataSelector = (props) => {

    const smallUrl = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    const bigUrl= `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`

    return(
        <div className="dataSelector">
            <button onClick={()=> props.onSelectData(smallUrl)} className="btn btn-primary btn-lg btn-block">Small Data</button>
            <button onClick={()=> props.onSelectData(bigUrl)} className="btn btn-secondary btn-lg btn-block">Big Data</button>
        </div>
    )
}

export default DataSelector