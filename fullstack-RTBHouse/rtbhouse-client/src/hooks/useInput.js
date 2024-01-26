import { useState } from "react";

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleValue = (e) => {
        setValue(e.target.value);
    };

    const clear = () => {
        setValue(initialValue)
    }

    return [value, handleValue, clear];
};

