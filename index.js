import { useState } from 'react';
import { get, set, merge } from 'lodash';

const useObject = (initialValue = {}) => {
    if(typeof initialValue !== 'Object') {
        throw new Error("Initial value must be of object type");
    }
    const [state, setObj] = useState(initialValue || {});

    const setState = (value, path) => path ? 
        setObj(set(state, path, value)) :
        setObj(value);

    const mergeState = newState => {
        setObj(merge(state, newState));
    }

    const getState = path => get(obj, path);
    
    return {
        state,
        setState,
        getState,
        mergeState,
    };
}

export default useObject;
