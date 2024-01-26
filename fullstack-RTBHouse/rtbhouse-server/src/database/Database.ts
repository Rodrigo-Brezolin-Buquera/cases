import { Repository } from "../business/Repository";
import { CustomError } from "../error/customError";
import { Order, OrderDB, toModelOrders } from "../model/order";
import { Product, ProductDB, toModelProduct } from "../model/product";
import ordersJson from "./data/orders.json";
import productsJson from "./data/products.json";

export class Database implements Repository {
  public async findOrders(): Promise<Order[]> {
    const orders: OrderDB[] = ordersJson
    const result = orders.map(order => toModelOrders(order))
    return result
  }

  public async findProductById(id:number): Promise<Product> {
    const products: ProductDB[] = productsJson
    const selectedProduct = products.find(i=> i.id === id)

    if(!selectedProduct){
      throw new CustomError("Product not found", 404)
    }

    return toModelProduct(selectedProduct)
  }
}