import { Order } from "../model/order"
import { Product } from "../model/product"

export interface Repository {
    findOrders(): Promise<Order[]> 
    findProductById(id:number): Promise<Product>
}