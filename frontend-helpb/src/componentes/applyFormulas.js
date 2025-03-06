import { applyPassTroughRule } from "./applyPassTroughtRule";
import { calculateAdjustedFinalPrice, calculateCMV, calculateFinalCost, calculateFinalPriceWithPassThrough, calculateLB, calculateLiquidCost, calculateMB, calculatePrice, calculateRB, calculateRL } from "./formulas";

export const applyFormulas = (prod) => {
    const finalProd = {...prod}
    const {
        precoFinal18,
        icmsPercentual,
        descontoPercentual,
        icmsCompraPercentual,
        quantidadePF,
        desconto,
        impostos,
        beneficioFiscal
      } = prod;

      finalProd.precoFinalAjustado = calculateAdjustedFinalPrice(precoFinal18, icmsPercentual)

      finalProd.repassePercentual = applyPassTroughRule(icmsPercentual, icmsCompraPercentual)

      finalProd.precoComRepasse = calculateFinalPriceWithPassThrough(precoFinal18, finalProd.repassePercentual)

      finalProd.custoFinal = calculateFinalCost(finalProd.precoComRepasse, descontoPercentual)

      finalProd.custoLiquido = calculateLiquidCost(finalProd.custoFinal,icmsCompraPercentual)

      finalProd.preco = calculatePrice(finalProd.precoFinalAjustado, desconto )

      finalProd.rb = calculateRB(finalProd.preco, quantidadePF)

      finalProd.cmv  = calculateCMV(finalProd.custoLiquido, quantidadePF)

      finalProd.rl = calculateRL(finalProd.rb,impostos)

      finalProd.lb = calculateLB(finalProd.rl,beneficioFiscal,finalProd.cmv)

      finalProd.margemBrutaPercentual = calculateMB(finalProd.lb,finalProd.rb)

     return finalProd 
}