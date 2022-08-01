import { useEffect } from "react";
import { useRequestData } from "../../../../hooks/useRequestData";
import { MainContainer } from "./styled";

export const LotteryInfo = () => {
  const [Lotteries, getLotteries] = useRequestData({
    initialData: [],
    url: "/loterias",
  });

  useEffect(()=>{
    getLotteries()
  }, [])

  console.log(Lotteries)
  return (
    <MainContainer>
      <select></select>

      <h3>Mega sena</h3>

      <p>some info</p>
    </MainContainer>
  );
};
