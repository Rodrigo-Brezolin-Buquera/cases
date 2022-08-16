import { Data } from "../model/types";
import { BaseDatabase } from "./BaseDatabase";


export class Database extends BaseDatabase {
  public findData = async (): Promise<Data[]> => {
    const data = await Database.connection("case_cubo_data")
    const result = data.map((item)=> {
      return(
        {
          id: item.id,
          firstName: item.first_name,
          lastName: item.last_name,
          participation: item.participation
        }
      )
    })
    return result
  }

  public insertData = async (data:Data): Promise<void> => {
    const users = await Database.connection("case_cubo_data").insert(
      {
        id: data.id,
        first_name: data.firstName,
        last_name: data.lastName,
        participation: data.participation
      }
    )
  }
}
