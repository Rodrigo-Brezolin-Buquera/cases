export const calculateAdjustedFinalPrice = (pf18, icms) => {
    return ((pf18*0.82)/(1-icms/100)).toFixed(2)
}

export const calculateFinalPriceWithPassThrough = (pf18, pt) => {
 return (pf18 - (pf18*(pt/100))).toFixed(2)
}

export const calculateFinalCost = (pfpt, discount) => {
 return (pfpt - (pfpt*(discount/100))).toFixed(2) 
}

export const calculateLiquidCost = (fc, icms) => {
    return (fc*(1-icms/100)).toFixed(2)
}

export const calculatePrice = (pfa, discount ) => {
    return (pfa*(1-discount/100)).toFixed(2)
}

export const calculateRB = (price, quant ) => {
    return (price * quant).toFixed(2)
}

export const calculateRL = (rb, taxes) => {
    return (rb*(1-taxes/100)).toFixed(2)
}

export const calculateMB = (lb, rb) => {
    return (lb/rb).toFixed(2)
}

export const calculateLB = (rl, bf, cmv) => {
    return ((rl-cmv) + rl*bf).toFixed(2)
}

export const calculateCMV =(cl, quant) => {
    return (cl*quant).toFixed(2)
}