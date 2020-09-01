import React, { useState, useEffect } from 'react';

const Title = (props) => {

    const { data, name } = props;
    const [value, setValue] = useState('');

    useEffect(() => {
        const initialValue = data && data[name] ? data[name] : undefined;
        if (initialValue !== undefined) setValue(initialValue)
    }, [name, data]);

    const inputProps = {
        value: value || ''
    };

    return (
        <span className="text-default" {...inputProps} >{value}</span>
    );
};

export default Title;