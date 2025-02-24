const passTroughtTable = {
    "4.00-12.00": 8.33,
    "4.00-17.00": 13.54,
    "4.00-18.00": 14.58,
    "4.00-19.00": 15.63,
    "4.00-19.50": 16.15,
    "4.00-20.00": 16.67,
    "4.00-20.50": 17.19,
    "4.00-21.00": 17.71,
    "4.00-22.00": 18.75,
    "7.00-12.00": 5.38,
    "7.00-17.00": 10.75,
    "7.00-18.00": 11.83,
    "7.00-19.00": 12.90,
    "7.00-19.50": 13.44,
    "7.00-20.00": 13.98,
    "7.00-20.50": 14.52,
    "7.00-21.00": 15.05,
    "7.00-22.00": 16.13,
    "12.00-12.00": 0.00,
    "12.00-17.00": 5.68,
    "12.00-18.00": 6.82,
    "12.00-19.00": 7.95,
    "12.00-19.50": 8.52,
    "12.00-20.00": 9.09,
    "12.00-20.50": 9.66,
    "12.00-21.00": 10.23,
    "12.00-22.00": 11.36,
  };
  
  export const applyPassTroughRule = (icmsInterestadual, icmsInterno) => {
    const key = `${icmsInterestadual.toFixed(2)}-${icmsInterno.toFixed(2)}`;
  
    if (passTroughtTable.hasOwnProperty(key)) {
      return passTroughtTable[key];
    } else {
      throw new Error("Combinação de ICMS Interestadual e ICMS Interno não encontrada na tabela.");
    }
  }