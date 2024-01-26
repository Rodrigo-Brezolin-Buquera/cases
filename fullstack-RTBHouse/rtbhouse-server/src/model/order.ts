interface ProductQuantity {
  productId: number;
  amount: number;
}

export interface Order {
  customerId: number;
  products: ProductQuantity[];
  purchaseDate: string;
  purchaseId: string;
}

interface ProductQuantityDB {
  product_id: number;
  amount: number;
}

export interface OrderDB {
  customer_id: number;
  products: ProductQuantityDB[];
  purchase_date: string;
  purchase_id: string;
}

export const toModelOrders = (order: OrderDB): Order => {
  return {
    customerId: order.customer_id,
    products: order.products.map((prod) => {
      return {
        productId: prod.product_id,
        amount: prod.amount,
      };
    }),
    purchaseDate: order.purchase_date,
    purchaseId: order.purchase_id,
  };
};

export interface AggregatedData {
  [productId: string]: number;
}