import { useEffect } from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { Chart } from "react-google-charts";
import { Table } from "./components/Table/Table";
import { MainContainer, CenterContainer } from "./styled";
import { Header } from "./components/Header/Header";

function MainPage() {
    const [data, getData] = useRequestData([], "/data")
   
    useEffect(() => {
        getData()
    }, [])

    const chartData = data?.map((item) => {
        return [
            `${item.firstName} ${item.lastName}`,
            item.participation
        ]
    })
    chartData?.unshift(["Name", "Participation"])

    return (
        <MainContainer>
            <Header/>
           
            <CenterContainer>
                <Table data={data} />
                <Chart
                    chartType="PieChart"
                    data={chartData}
                    width={"100%"}
                    height={"400px"}
                />
            </CenterContainer>
        </MainContainer>
    );
}

export default MainPage;
