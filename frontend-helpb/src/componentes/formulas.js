export const calculateAdjustedFinalPrice = (icms, pf18) => {
    return (pf18*0,82) /  (1-icms)
}

export const calculateFinalPriceWithPassThrough = (pf18, pt) => {
 return pf18 - (pf18*pt)
}

export const calculateFinalCost = (pfpt, discount) => {
 return pfpt - (pfpt*discount)   
}

export const calculateLiquidCost = (fc, icms) => {
    return fc*(1-icms)
}

export const calculatePrice = (pfa, discount ) => {
    return pfa*(1-discount)
}

export const calculateRB = (price, quant ) => {
    return price * quant
}

export const calculateRL = (rb, taxes) => {
    return rb*(1-taxes)
}

export const calculateMB = (lb, rb) => {
    return lb/rb
}

export const calculateLB = (rl, bf, cmv) => {
    return (rl-cmv) + rl*bf
}

export const calculateCMV =(cl, quant) => {
    return cl, quant
}