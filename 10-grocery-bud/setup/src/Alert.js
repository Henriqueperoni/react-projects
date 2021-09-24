import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeout);
    }, [list]); // by adding list to the depency array every the list change a new set of timeout is run. Withou it when adding a new item to the list, the timeout would star, if I click to delete it fast the previous timeout would still be running.

    return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
