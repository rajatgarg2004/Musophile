import React from 'react';

const DropDown = props => {

    const dropdownChanged = e => {
        props.changed(e.target.value);
    }

    return (
        <div>
            <div className="hola123">
            </div>
            <div className="dropdown1">
                <div className="marginboi">
                    <label className="dropdown2" >{props.label}</label>
                </div>
                <select value={props.selectedValue} onChange={dropdownChanged} className="dropdown3">
                    <option key={0} id="bensto">Select...</option>
                    {props.options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
                </select>
            </div>
        </div>
    );
}

export default DropDown;