// write your custom hook here to control your checkout form
import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setvalues] = useState(initialValues);

    const handleChanges = e => {
        setvalues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

const clearForm = e => {
    e.preventDefault();
    setvalues('');  
}
return [values, handleChanges, clearForm];
}

export default useForm;