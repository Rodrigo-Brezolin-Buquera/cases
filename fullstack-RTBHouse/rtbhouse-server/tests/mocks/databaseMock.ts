import { Repository } from "../../src/business/Repository";
import { Order } from "../../src/model/order";
import { Product } from "../../src/model/product";

export class DatabaseMock implements Repository {
  public async findOrders(): Promise<Order[]> {
    return [
      {
        customerId: 1,
        products: [
          { productId: 101, amount: 1 },
          { productId: 112, amount: 2 },
        ],
        purchaseDate: "2023-01-15",
        purchaseId: "P001",
      },
    ];
  }

  public async findProductById(id: number): Promise<Product> {
    return id == 101
      ? { id: 101,
        name: "Smart TV",
        price: 899.0, 
        storeName: "ElectroMart" 
      }
      : {
        id: 112,
        name: "Fitness Tracker",
        price: 79.95,
        storeName: "SportsZone",
      };
  }
}
