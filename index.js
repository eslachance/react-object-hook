import { useState } from 'react';
import { get, set, merge } from 'lodash';

const useObject = (initialValue = {}) => {
    if(typeof initialValue !== 'Object') {
        throw new Error("Initial value must be of object type");
    }
    const [value, setObj] = useState(initialValue || {});
    const setState = (value, path) => {
        if(!path) {
            setObj(value);
        } else if (path === 'merge') {
            setObj(merge(value, value));
        } else {
            setObj(set(value, path, value));
        }
    };

    const getState = path => get(obj, path);
    return {
        value,
        setState,
        getState,
        mergeState,
    };
}

export default useObject;
