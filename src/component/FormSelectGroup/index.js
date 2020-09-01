import React, { useState, useEffect } from 'react';

const FormSelectGroup = (props) => {

    const { data, name, label, type } = props;
    const [value, setValue] = useState('');

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined;
        if (initialValue !== undefined) setValue(initialValue)
    }, [name, data]);

    const handlerChange = (e) => {
        if (value === e.target.value) return;
        setValue(e.target.value);
    }

    const inputProps = {
        type,
        name,
        value: value || '',
        onChange: handlerChange
    };

    return (
        <div className="form-group">
            <label for={`select${label}`}>{label}</label>
            <select class="form-control" id={`select${label}`}>
                <option>{...inputProps}</option>
            </select>
        </div>
    );
};

export default FormSelectGroup;