import { useState, useEffect } from 'react';

function useDebounce(data, delay) {
    const [dataInput, setDataInput] = useState(data);

    useEffect(() => {
        const timeOut = setTimeout(() => setDataInput(data), delay);
        return () => clearTimeout(timeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return dataInput;
}

export default useDebounce;
