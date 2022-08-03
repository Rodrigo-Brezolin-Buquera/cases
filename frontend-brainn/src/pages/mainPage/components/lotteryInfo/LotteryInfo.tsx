import { useEffect } from "react";
import { useRequestData } from "../../../../hooks/useRequestData";
import { MainContainer, Img, LogoContainer, Select } from "./styled";
import { Lottery, LotteryProps } from "../../../../types/types";
import { ajustDate } from "../../../../services/moment";
import Logo from "../../../../assets/Logo.png";

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
    <MainContainer lotteryId={lotteryId}>
      <Select placeholder="Loteria" onChange={handleLoterries} required>
        <option value={""}> Escolha uma opção </option>
        {showSelectOptions()}
      </Select>

      <LogoContainer>
        <Img src={Logo} alt="logo caixa" />
        <h3>{lotteryId === "" ? "Loteria" : lotteryName()}</h3>
      </LogoContainer>

      <section>
        <p>Concurso</p>
        {lotteryId === "" ? (
          <p>Nenhum concurso selecionado</p>
        ) : (
          <p>
            {contestId} - {ajustDate(contestDate!)}
          </p>
        )}
      </section>
    </MainContainer>
  );
};
