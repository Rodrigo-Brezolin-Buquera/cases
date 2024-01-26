import {app} from "../src"
import request from "supertest";
import { describe, test, expect } from "@jest/globals";

describe("E2E Tests", () => {
  test("GET - /productsData ", async () => {
    const response = await request(app).get("/productsData");
    expect(response.status).toBe(200)
    expect(response.body.result.length).toBe(18);
    expect(response.body.result[0]).toEqual({
      id: 101,
      name: "Smart TV",
      price: 899,
      storeName: "ElectroMart",
      amountSold: 1,
      totalRevenue: 899
    });
    
  });
});
