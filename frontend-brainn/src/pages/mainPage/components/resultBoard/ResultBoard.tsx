import { BoardProps } from "../../../../types/types";
import { MainContainer } from "./styled";

export const ResultBoard = ({ contestResults }: BoardProps) => {
  const showResults = () => {
    const list = contestResults?.map((item: string) => {
      return <div key={item}>{item}</div>;
    });

    return list?.length ? list : <p>Selecione uma loteria</p>;
  };

  return <MainContainer>{showResults()}</MainContainer>;
};
