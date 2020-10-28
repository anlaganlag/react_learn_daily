import React from 'react';

const Dropdown = ({changed,label,options,selectedValue}) => {    

    const dropdownChanged = e => {
        changed(e.target.value);

    }    

    return (
        <div className="col-sm-6 form-group row px-0">     
            <label className="form-label col-sm-3">{label}</label>       
            <select value={selectedValue} onChange={dropdownChanged} className="form-control form-control-sm col-sm-10">
                <option key={0}>请选择...</option>
                {options.map((item, idx) => <option key={idx + 1} value={item.id}>{item.name}</option>)}
            </select>            
        </div>
    );
}

export default Dropdown;