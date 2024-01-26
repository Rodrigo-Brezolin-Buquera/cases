import { Database } from "../../src/database/Database"
import { describe, test, expect } from "@jest/globals";


describe("Database tests", ()=>{
  const database = new Database()

  test("FindOrders method", async ()=>{
    const result = await database.findOrders()
    expect(result.length).toBe(20)   
    expect(result[0]).toEqual(
      {
        customerId: 1,
        products: [
          { productId: 101, amount: 1 },
          { productId: 112, amount: 2 },
          { productId: 107, amount: 1 }
        ],
        purchaseDate: "2023-01-15",
        purchaseId: "P001"
      }
    )
  })

  test("FindProductById method", async ()=>{
    const result = await database.findProductById(101)
    expect(result).toEqual(
      {id: 101, name: "Smart TV", price: 899.00, storeName: "ElectroMart"}
    )
  })

  test("FindProductById method: error message", async ()=>{
    expect.assertions(1)
    try {
      await database.findProductById(0)
    } catch (error: any) {
      expect(error.message).toBe("Product not found")
    }
  })
})