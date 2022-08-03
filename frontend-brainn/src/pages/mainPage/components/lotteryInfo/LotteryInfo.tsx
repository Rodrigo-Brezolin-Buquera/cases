import { useEffect } from "react";
import { useRequestData } from "../../../../hooks/useRequestData";
import { MainContainer } from "./styled";
import { Lottery, LotteryProps } from "../../../../types/types";
import { ajustDate } from "../../../../services/moment";

export const LotteryInfo = ({
  lotteryId,
  setLotteryId,
  contestDate,
  contestId,
}: LotteryProps) => {
  const [lotteries, getLotteries] = useRequestData({
    initialData: [],
    url: "/loterias",
  });

  useEffect(() => {
    getLotteries();
  }, []);

  const handleLoterries = (e: { target: { value: string } }): void => {
    setLotteryId(e.target.value);
  };

  const showSelectOptions = (): HTMLSelectElement[] => {
    return lotteries?.map((item: Lottery) => {
      return (
        <option key={item.id} value={item.id}>
          {item.nome}
        </option>
      );
    });
  };

  const lotteryName = (): string => {
    const currentLottery: Lottery = lotteries.find(
      (item: Lottery) => item.id.toString() === lotteryId
    );
    return currentLottery?.nome.toUpperCase();
  };

  return (
    <MainContainer>
      <select placeholder="Loteria" onChange={handleLoterries} required>
        <option value={""}> Escolha uma opção </option>
        {showSelectOptions()}
      </select>

      <div>

      <h3>{lotteryName()}</h3>
      </div>
      

      <div>
        <p>Concurso</p>
        <p>
          {contestId} - {ajustDate(contestDate!)}
        </p>
      </div>
    </MainContainer>
  );
};
