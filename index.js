import { useState } from 'react';
import { get, set, merge } from 'lodash';

const useObject = (initialValue = {}) => {
    if(typeof initialValue !== 'Object') {
        throw new Error("Initial value must be of object type");
    }
    const [obj, setObj] = useState(initialValue || {});
    const setValue = (value, path) => {
        if(!path) {
            setObj(value);
        } else if (path === 'merge') {
            setObj(merge(obj, value));
        } else {
            setObj(set(obj, path, value));
        }
    };

    const getValue = path => get(obj, path);
    return [obj, setValue, getValue];
}

export default useObject;
