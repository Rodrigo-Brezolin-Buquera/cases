import {useState} from 'react';

function useForm(initialValue, validationRules) {
    const [form, setForm] = useState(initialValue)
    const [inputErrors, setInputErrors] = useState({});

    const validateField = (name, value) => {
        if (validationRules[name]) {
            const pattern = new RegExp(validationRules[name].value);
            if (!pattern.test(value)) {
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: validationRules[name].message,
                }));
                return false;
            }
        }
        setInputErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        return true;
    };


    const onChange = (event) => {
        const {name, value} = event.target
        setForm({...form, [name]: value})
        validateField(name, value);
    }

    const clear = () => {
        setForm(initialValue);
        setInputErrors({});
    }
    return [form, onChange, clear, inputErrors]
}

export default useForm;