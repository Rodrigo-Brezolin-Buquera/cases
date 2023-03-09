import { paintCans, paintYieldInMperL } from "../constants/measures"

export const calculateCansQuantity = (totalArea) => {

    let totalLiters = totalArea / paintYieldInMperL

    let totalCans = []
    const cansList = Object.keys(paintCans)
    for (let size of cansList) {
      while (totalLiters >= paintCans[size]) {
        totalCans.push(size)
        totalLiters -= paintCans[size]
      }
    }

    if (totalLiters > 0) {
      totalCans.push(cansList[cansList.length - 1])
    }

    const finalCount = {};
    totalCans.forEach((x) => finalCount[x] = (finalCount[x] || 0) + 1);

    return finalCount
}