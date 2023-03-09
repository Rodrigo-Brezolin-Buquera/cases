export const formatContribution =(value, n) => {
    const stringValue = value?.toFixed(n).replace('.', ',').toString()
    return  "R$ " + stringValue
}