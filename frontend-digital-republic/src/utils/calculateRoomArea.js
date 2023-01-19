import { minWallWithDoorHeight, doorMeasures, windowMeasures, emptyWallThreshold } from "../constants/measures"

export const calculateRoomArea = (wallAreaList, setError, error) => {
   let totalRoomArea = 0
   wallAreaList.forEach(wall => {
      const totalWallArea = wall.height * wall.width
      const totalWindowArea = wall.windows * windowMeasures
      const totalDoorArea = wall.doors * doorMeasures
      const finalWallArea = totalWallArea - totalDoorArea - totalWindowArea

      if (totalWallArea < 1 || totalWallArea > 50) {
         setError([...error, "As parede não podem ter menos de 1 nem mais de 50 metros quadrados"])
      } else if ((totalWindowArea + totalDoorArea) > totalWallArea * emptyWallThreshold) {
         setError([...error, `As portas e janelas deve ser no máximo ${emptyWallThreshold * 100}% da área de parede`])
      } else if (totalDoorArea && wall.height < minWallWithDoorHeight) {
         setError([...error, `A altura de paredes com porta deve ser, no mínimo: ${minWallWithDoorHeight}m`])
      } else {
         totalRoomArea += finalWallArea
      }
   })
   return totalRoomArea
}