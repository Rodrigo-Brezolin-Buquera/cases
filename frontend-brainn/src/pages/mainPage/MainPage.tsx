import { LotteryInfo } from "./components/lotteryInfo/LotteryInfo"
import { ResultBoard } from "./components/resultBoard/ResultBoard"
import { MainContainer } from "./styled"


export const MainPage = () => {
    return (
        <MainContainer>
            <LotteryInfo/>
            <ResultBoard/>
        </MainContainer>
    )
}