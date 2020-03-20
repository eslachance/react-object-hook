import { useState } from 'react';
import { get, set } from 'lodash';

const useObject = (initialValue = {}) => {
    if(typeof initialValue !== 'Object') {
        throw new Error("Initial value must be of object type");
    }
    const [obj, setObj] = useState(initialValue || {});
    const setValue = (value, path) => path ? 
        setObj(set(obj, path, value)) :
        setObj(value);
    const getValue = path => get(obj, path);
    return [obj, setValue, getValue];
}

export default useObject;
