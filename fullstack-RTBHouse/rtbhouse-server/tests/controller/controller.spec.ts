import {BusinessMock} from "../mocks/businessMock"
import {Controller} from "../../src/controller/Controller"
import { DatabaseMock } from "../mocks/databaseMock"
import { Business } from "../../src/business/Business"
import { describe, test, expect, jest } from "@jest/globals";

describe("Controller tests", ()=>{
  const businessMock = new BusinessMock(new DatabaseMock()) as unknown as Business
  const controller = new Controller(businessMock)
  const req: any = {}
  const res: any = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis(),
  };

  test("FindProductsData method", async () => {
    await controller.findProductsData(req, res)
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ result: [
      {
        id: 101,
        name: "Smart TV",
        price: 899,
        storeName: "ElectroMart",
        amountSold: 1,
        totalRevenue: 899,
      }
    ] })
  })
})