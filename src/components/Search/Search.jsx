import React, {useState} from 'react';

const Search = (props) => {

    const [value, setValue] = useState('')

    const valueChangeHand = e => {
        setValue(e.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
    <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" onClick={()=>props.onSearch(value)}>Search</button>
    </div>
    <input type="text" className="form-control" value={value} onChange={valueChangeHand}/>
    </div>
    )
}

export default Search