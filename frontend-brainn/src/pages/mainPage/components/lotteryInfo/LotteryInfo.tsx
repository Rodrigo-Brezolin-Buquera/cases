import { useEffect } from "react";
import { useRequestData } from "../../../../hooks/useRequestData";
import { MainContainer } from "./styled";
import { Lottery, LotteryProps } from "../../../../types/types";



export const LotteryInfo = ({setLotteryId}:LotteryProps) => { 
  const [lotteries, getLotteries] = useRequestData({
    initialData: [],
    url: "/loterias",
  });

  useEffect(() => {
    getLotteries();
  }, []);

  const handleLoterries = (e: { target: { value: string; }; }): void => {
    setLotteryId(e.target.value)
  }

  const showSelectOptions = ():HTMLSelectElement[] => {
    return lotteries?.map((item:Lottery) =>{ 
      return(
        <option value={item.id}> {item.nome} </option>
      )

    })
  }

  return (
    <MainContainer>
      <select 
      placeholder="Loteria" 
      onChange={handleLoterries}
      required>
        <option value={""}> Escolha uma opção </option>
        {showSelectOptions()}
      </select>

      <h3>Mega sena</h3>

      <p>some info</p>
    </MainContainer>
  );
};
