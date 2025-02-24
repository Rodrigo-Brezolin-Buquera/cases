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

      const precoFinalAjustado = calculateAdjustedFinalPrice(precoFinal18, icmsPercentual)

      const repassePercentual = applyPassTroughRule(icmsPercentual, icmsCompraPercentual)

      const precoComRepasse = calculateFinalPriceWithPassThrough(precoFinal18, repassePercentual)

      const custoFinal = calculateFinalCost(precoComRepasse, descontoPercentual)

      const custoLiquido = calculateLiquidCost(custoFinal,icmsCompraPercentual)

      const preco = calculatePrice(precoFinalAjustado, desconto )

      const rb = calculateRB(preco, quantidadePF)

      const cmv = calculateCMV(custoLiquido, quantidadePF)

      const rl = calculateRL(rb,impostos)

      const lb = calculateLB(rl,beneficioFiscal,cmv)

      const margemBrutaPercentual = calculateMB(lb,rb)


      finalProd.precoFinalAjustado = precoFinalAjustado;
      finalProd.repassePercentual = repassePercentual;
      finalProd.precoComRepasse = precoComRepasse;
      finalProd.custoFinal = custoFinal;
      finalProd.custoLiquido = custoLiquido;
      finalProd.preco = preco;
      finalProd.rb = rb;
      finalProd.rl = rl;
      finalProd.margemBrutaPercentual = margemBrutaPercentual;
      finalProd.lb = lb;
      finalProd.cmv = cmv;

     return finalProd 
}