import { Business } from "../../src/business/Business";
import { DatabaseMock } from "../mocks/databaseMock";
import { describe, test, expect } from "@jest/globals";

const business = new Business(new DatabaseMock());

describe("Business tests", () => {

  test("FindProductsData method", async () => {
    const result = await business.findProductsData();
    expect(result.length).toBe(2);
    expect(result[0]).toEqual({
      id: 101,
      name: "Smart TV",
      price: 899,
      storeName: "ElectroMart",
      amountSold: 1,
      totalRevenue: 899,
    });
  });
});
