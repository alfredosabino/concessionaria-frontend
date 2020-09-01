import React, { useState, useEffect } from 'react';

const Img = (props) => {

    const { data, src, alt } = props;
    const [value, setValue] = useState('');

    useEffect(() => {
        const initialValue = data && data[src] ? data[src] : undefined;
        if (initialValue !== undefined) setValue(initialValue)
    }, [src, data]);

    const inputProps = {
        alt,
        src: value || ''
    };

    return (
        <img className="" {...inputProps} alt="" />
    );
};

export default Img;