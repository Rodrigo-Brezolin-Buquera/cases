import { Repository } from "../../src/business/Repository";
import {ProductStatistic} from "../../src/model/product"

export class BusinessMock {
  constructor(private database: Repository) {}


  public async findProductsData(): Promise<ProductStatistic[]> {
    return [
      {
        id: 101,
        name: "Smart TV",
        price: 899,
        storeName: "ElectroMart",
        amountSold: 1,
        totalRevenue: 899,
      }
    ];
  }
}
