import { Database } from "../data/Database";
import { CustomError } from "../error/CustomError";
import { Data, DataInputDTO } from "../model/types";
import * as yup from "yup";

const database = new Database();
export class Business {
  public findData = async (): Promise<Data[]> => {
    const result = await database.findData();
    return result;
  };

  public insertData = async ({
    id,
    firstName,
    lastName,
    participation,
  }: DataInputDTO): Promise<void> => {
   
    const schema = yup.object().shape({
      id: yup
        .number()
        .required("id não fornecido")
        .positive("id precisa ser positivo fornecido")
        .integer("id precisa ser inteiro"),
      firstName: yup.string().required("primeiro nome não fornecido"),
      lastName: yup.string().required("sobrenome não fornecido"),
      participation: yup
        .number()
        .required("participação não fornecido")
        .positive("participação precisa ser positiva"),
    });

    await schema.validate({
      id,
      firstName,
      lastName,
      participation,
    })

    const data: Data = {
      id,
      firstName,
      lastName,
      participation,
    };

    const result = await database.insertData(data);
    return;
  };
}
