import { useEffect, useState } from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { findContestResults } from "../../services/requests";
import { Contest, ContestInfo } from "../../types/types";
import { LotteryInfo } from "./components/lotteryInfo/LotteryInfo";
import { ResultBoard } from "./components/resultBoard/ResultBoard";
import { MainContainer } from "./styled";

export const MainPage = () => {
  const [lotteryId, setLotteryId] = useState<string>("");
  const [contestInfo, setContestInfo] = useState<ContestInfo>();
  const [contests, getContests] = useRequestData({
    initialData: [],
    url: "/loterias-concursos",
  });

  useEffect(() => {
    getContests();
  }, []);

  useEffect(() => {
    if (lotteryId !== "") {
      const currentContest: Contest = findConstest(Number(lotteryId));
      findContestResults(currentContest.concursoId, setContestInfo);
    }
  }, [lotteryId]);

  const findConstest = (id: number) => {
    return contests.find((item: Contest) => item.loteriaId === id);
  };

  return (
    <MainContainer  lotteryId={lotteryId}>
      <LotteryInfo
        lotteryId={lotteryId}
        setLotteryId={setLotteryId}
        contestDate={contestInfo?.data}
        contestId={contestInfo?.id}
      />
      <ResultBoard contestResults={contestInfo?.numeros} />
    </MainContainer>
  );
};
