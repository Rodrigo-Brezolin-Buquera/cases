import styles from "../../../styles/MainPage.module.css"
import { useState } from "react"
import { calculateRoomArea } from "../../utils/calculateRoomArea"

export default function RoomCard({ wallId, roomsList, setRoomsList }) {
    const [error, setError] = useState([])
    const [wallAreaList, setWallAreaList] = useState([
        {
            i: 0,
            height: 0,
            width: 0,
            windows: 0,
            doors: 0,
        },
        {
            i: 1,
            height: 0,
            width: 0,
            windows: 0,
            doors: 0
        },
        {
            i: 2,
            height: 0,
            width: 0,
            windows: 0,
            doors: 0
        },
        {
            i: 3,
            height: 0,
            width: 0,
            windows: 0,
            doors: 0
        }
    ])

    const handleArea = (e, index, prop) => {
        const wallList = [...wallAreaList]
        wallList[index][prop] = e.target.value
        setWallAreaList(wallList)
        const list = [...roomsList]
        list[wallId].area = calculateRoomArea(wallAreaList, setError, error)
        setRoomsList(list)
    }

    console.log("error", error)


    const wallMeasuresList = wallAreaList.map(wall => {
        return (
            <div className={styles['flex-line']} key={wall.i} >
                <p>Altura:</p>
                <input
                    value={wall.height}
                    onChange={(e) => handleArea(e, wall.i, "height")}
                />
                <p>Largura:</p>
                <input
                    value={wall.width}
                    onChange={(e) => handleArea(e, wall.i, "width")}
                />
                <p>Janelas:</p>
                <input
                    value={wall.windows}
                    onChange={(e) => handleArea(e, wall.i, "windows")}
                />
                <p>Portas:</p>
                <input
                    value={wall.doors}
                    onChange={(e) => handleArea(e, wall.i, "doors")}
                />            
            </div>
        )
    })
  
    return (
        <card className={styles["card"]} >
            {wallMeasuresList}  
            {/* <p className={`${styles["center-text"]} ${styles["error-mensage"]}`}>{error}</p>       */}
        </card>
    )
}