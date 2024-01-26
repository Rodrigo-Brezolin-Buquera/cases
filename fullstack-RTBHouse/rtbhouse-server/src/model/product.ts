export interface Product {
    id: number,
    name: string, 
    price: number,
    storeName: string
}

export interface ProductDB {
    id: number,
    name: string, 
    price: number,
    store_name: string
}

export const toModelProduct = (product:ProductDB): Product => {
  return {
    id: product.id,
    name: product.name, 
    price: product.price,
    storeName: product.store_name
  }
}

export interface ProductStatistic {
    id: number,
    name: string, 
    price: number,
    storeName: string,
    amountSold: number,
    totalRevenue: number
}