import React from 'react';
import PropTypes from "prop-types";

const Sfc = (props, context) => {
    const {somePropValue} = props;
    const {someContextValue}=context;
    return (
        <h1>hello, {somePropValue}</h1>
    );
};

Sfc.propTypes = {
    somePropValue: PropTypes.any,
};
Sfc.defaultProps={
    somePropValue:'default Value'
};
export default Sfc;