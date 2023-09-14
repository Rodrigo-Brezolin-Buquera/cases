
export const namePattern = {
    value: /^[a-zA-Z ]{2,30}$/u,
    message: "O nome devem ter entre 2 e 30 caracteres sem caracteres especiais"
}

export const emailPattern = {
    value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Entre com um email válido"
}

export const genderPattern = {
    value: /^[a-zA-Z ]{1,10}$/u,
    message: "Gênero deve ter entre 1 e 10 caracteres"
}

export const phonePattern = {
    value: /^[0-9]{1,15}$/u,
    message: "O tefefone precisa ter até 15 números"
}

export const countryPattern = {
    value: /^[a-zA-Z ]{1,15}$/u,
    message: "País deve ter entre 1 e 10 caracteres"
}

export const statePattern = {
    value: /^[a-zA-Z]{1,15}$/u,
    message: "Estado deve ter entre 1 e 10 caracteres"
}

export const cityPattern = {
    value: /^[a-zA-Z]{1,15}$/u,
    message: "Cidade deve ter entre 1 e 10 caracteres"
}

export const stringPattern = {
    value: /^[a-zA-Z ]{1,20}$/u,
    message: "Os textos devem ter entre 1 e 20 caracteres"
}

