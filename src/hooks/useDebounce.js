import { Reac, useState, useCallback, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDeboucedvalue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDeboucedvalue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
};

export default useDebounce;
