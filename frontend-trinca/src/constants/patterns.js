export const positiveNumberPattern = {
    value: /^[0-9]\d*(\.\d+)?$/,
    message: "Entre com valores possitivos"
}

export const stringLengthPattern = {
    value: /^.{3,20}$/,
    message: "Os textos devem ter entre 3 e 20 caracteres"
}

export const stringMaxLengthPattern = {
    value: /^.{0,20}$/,
    message: "A observação pode conter no máximo 20 caracteres"
}
