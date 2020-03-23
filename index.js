import { useState } from 'react';
import { get, set, merge, clone } from 'lodash';

const useObject = (initialValue = {}) => {
    if(typeof initialValue !== 'object') {
        throw new Error("Initial value must be of object type");
    }
    const [state, setObj] = useState(initialValue || {});

    const setStatePath = (value, path) => path ? 
        setObj(clone(set(state, path, value))) :
        setObj(clone(value));

    const setState = newState => {
        setObj(clone(merge(state, newState)));
    };

    const getState = path => get(state, path);

    return {
        state,
        setState,
        getState,
        setStatePath,
    };
};

export default useObject;
