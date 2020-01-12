import React from 'react';

const initializeContext = {
    progress: false,
    account: JSON.parse(localStorage.getItem('account') || '{}')
}

const RootContext = React.createContext();
export  {
    initializeContext
}
export default RootContext;