import { BoardProps } from "../../../../types/types";
import {
  Circle,
  MainContainer,
  ResultContainer,
  TextContainer,
} from "./styled";

export const ResultBoard = ({ contestResults }: BoardProps) => {
  const showResults = () => {
    const list = contestResults?.map((item: string) => {
      return <Circle key={item}>{item}</Circle>;
    });

    return list?.length ? list : <p>Selecione uma loteria</p>;
  };

  return (
    <MainContainer>
      <ResultContainer>{showResults()}</ResultContainer>
      <TextContainer>
        Esse sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA
      </TextContainer>
    </MainContainer>
  );
};
