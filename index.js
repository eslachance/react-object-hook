import { useState } from 'react';
import { get, set, merge } from 'lodash';

const useObject = (initialValue = {}) => {
    if(typeof initialValue !== 'object') {
        throw new Error("Initial value must be of object type");
    }
    const [state, setObj] = useState(initialValue || {});

    const setStatePath = (value, path) => path ? 
        setObj(set(state, path, value)) :
        setObj(value);

    const setState = newState => {
        setObj(merge(state, newState));
    }

    const getState = path => get(obj, path);

    return {
        state,
        setState,
        getState,
        setStatePath,
    };
}

export default useObject;
