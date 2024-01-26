import { AggregatedData } from "../model/order";
import { ProductStatistic } from "../model/product";
import { Repository } from "./Repository";

export class Business {
  constructor(private database: Repository ){}

  public async findProductsData(): Promise<ProductStatistic[]> {

    const orders = await this.database.findOrders();

    const totalAmounts: AggregatedData = {};
    orders.forEach(({ products }) => {
      products.forEach(({ productId, amount }) => {
        totalAmounts[productId] = (totalAmounts[productId] || 0) + amount;
      });
    });

    const productIds = Object.keys(totalAmounts);

    const productsPromises = productIds.map(async (id) => {
      const product = await this.database.findProductById(Number(id));
      const amountSold = totalAmounts[id]
      const productRevenue = (product.price * amountSold).toFixed(2)
      return {
        ...product,
        amountSold,
        totalRevenue: Number(productRevenue),
      };
    });

    const result: ProductStatistic[] = await Promise.all(productsPromises);
    return result
  }
}
