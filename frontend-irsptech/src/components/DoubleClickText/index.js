import { useEffect, useState } from "react";
import { editUser } from "../../store/reducers/users";
import { Text, TextInput } from "./styled";

const DoubleClickText = ({ text, dispatch, field, id }) => {
    const [value, setValue] = useState("");
    const [showInput, setShowInput] = useState(false);

    useEffect(() => {
        setValue(text)
    }, [text])

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            dispatch(editUser({ id, field, value }))
            setShowInput(false)
        }
    };

    const onBlur = () => {
        dispatch(editUser({ id, field, value }))
        setShowInput(false)
    }

    const onChange = (e) => setValue(e.target.value)

    return (
        <>
            {
                showInput ?
                    (
                        <TextInput
                            type={"text"}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            onKeyPress={handleKeyPress}
                        />
                    )
                    :
                    (
                        <Text
                            onDoubleClick={() => setShowInput(true)}
                        >
                            {value}
                        </Text>
                    )
            }
        </>
    );
}

export default DoubleClickText