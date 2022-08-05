import styled from "styled-components";
import { diadesorteColor, fontTheme, lotofacilColor, lotomaniaColor, megasenaColor, quinaColor, timemaniaColor } from "../../constants/theme";

export const MainContainer = styled.div<{ lotteryId: string }>`
display: flex;
height:100vh;
width: 100vw;
justify-content: space-between;
font-family: ${fontTheme};
background: ${(props) => {
    switch (props.lotteryId) {
      case "0":
        return megasenaColor;
      case "1":
        return quinaColor;
      case "2":
        return lotofacilColor;
      case "3":
        return lotomaniaColor;
      case "4":
        return timemaniaColor;
      case "5":
        return diadesorteColor;
      default:
        return "gray";
    }
  }};
`