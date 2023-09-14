import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { cityPattern, countryPattern, emailPattern, genderPattern, namePattern, phonePattern, statePattern, stringPattern } from '../../constants/patterns';
import useForm from '../../hooks/useForm';
import { createUser } from '../../store/reducers/users';
import { StyledButton } from '../../styles/StyledButton';
import { StyledInput } from '../../styles/StyledInput';
import { ErrorText, ModalContent, ModalWrapper, StyleForm } from './styled';

const validationRules = {
    name: namePattern,
    email: emailPattern,
    gender: genderPattern,
    phone: phonePattern,
    country: countryPattern,
    state: statePattern,
    city: cityPattern,
};


const CreateUserModal = ({ isOpen, handleModal }) => {
    const modalRef = useRef(null);
    const dispatch = useDispatch()
    const [form, onChange, clear, inputErrors] = useForm({
        name: "",
        email: "",
        gender: "",
        phone: "",
        country: "",
        state: "",
        city: ""
    },
    validationRules
    );

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const closeModal = () => {
        handleModal(false)
        clear()
    }


    const onSubmitForm = (e) => {
        e.preventDefault()        
        const emptyFields = Object.keys(form).filter(key => form[key] === '');
        if (emptyFields.length > 0) {
            alert("Preencha todos os campos")
        } else {
            dispatch(createUser(form));
            closeModal();
        }
    };

    return (
        <ModalWrapper >
            <ModalContent ref={modalRef}>

                <h3>Dados do usuários</h3>
                <StyleForm >

                    <StyledInput
                        placeholder='Nome'
                        type="text"
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                    />
                    <StyledInput
                        placeholder='Email'
                        type="text"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}

                    />
                    <StyledInput
                        placeholder='Gênero'
                        type="text"
                        name={"gender"}
                        value={form.gender}
                        onChange={onChange}

                    />
                    <StyledInput
                        placeholder='Telefone'
                        type="text"
                        name={"phone"}
                        value={form.phone}
                        onChange={onChange}

                    />
                    <StyledInput
                        placeholder='País de origem'
                        type="text"
                        name={"country"}
                        value={form.country}
                        onChange={onChange}

                    />
                    <StyledInput
                        placeholder='Estado'
                        type="text"
                        name={"state"}
                        value={form.state}
                        onChange={onChange}

                    />
                    <StyledInput
                        placeholder='Cidade'
                        type="text"
                        name={"city"}
                        value={form.city}
                        onChange={onChange}

                    />
                    <p>Uma imagem aleatória será usada para foto</p>

                    {inputErrors.name && <ErrorText>{inputErrors.name}</ErrorText>}
                    {inputErrors.email && <ErrorText>{inputErrors.email}</ErrorText>}
                    {inputErrors.gender && <ErrorText>{inputErrors.gender}</ErrorText>}
                    {inputErrors.phone && <ErrorText>{inputErrors.phone}</ErrorText>}
                    {inputErrors.country && <ErrorText>{inputErrors.country}</ErrorText>}
                    {inputErrors.state && <ErrorText>{inputErrors.state}</ErrorText>}
                    {inputErrors.city && <ErrorText>{inputErrors.city}</ErrorText>}

                    <StyledButton onClick={onSubmitForm}>Criar novo usuário</StyledButton>

                </StyleForm>

            </ModalContent>
        </ModalWrapper>
    );
};

export default CreateUserModal;
