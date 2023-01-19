import { useState } from "react"
import styles from "../../styles/MainPage.module.css"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import RoomCard from "../components/RoomCard/RoomCard"
import SideGallery from "../components/SideGallery/SideGallery"
import { calculateCansQuantity } from "../utils/calculateCansQuantity"

export default function MainPage() {
  const [roomsList, setRoomsList] = useState([])
  const [paintQuantity, setPaintQuantity] = useState(null)

  const handleRooms = (e) => {
    const roomCardList = Array.from({ length: e.target.value }, (_, i) => {
      return {
        id: i,
        area: 0
      }
    })
    setRoomsList(roomCardList)
  }

  const handleTotalArea = () => {
    const totalArea = roomsList.reduce((a, b) => { return a + b.area }, 0)
    const cansQuantity = calculateCansQuantity(totalArea)
    setPaintQuantity(cansQuantity)
    setRoomsList([])
  }

  const cardList = roomsList.map((i) => {
    return (
      <RoomCard
        key={i.id}
        wallId={i.id}
        setRoomsList={setRoomsList}
        roomsList={roomsList}
      />
    )
  })

  const showFinalCalculation = () => {
    return Object.keys(paintQuantity).map((can) => {
      return (
        <section className={`${styles["flex-section"]} ${styles["border-card"]}`}>
          <h3> Você precisa de:</h3>
          <p> {paintQuantity[can]} lata(s) de {can} </p>
        </section>
      )
    })
  }

  return (
    <body >
      
      <Header/>

      <main className={styles["flex-container"]}>
        <section className={styles["flex-section"]}>

          <div className={styles["flex-line"]}>
            <h4> Quantos cômodos você irá pintar?  </h4>
            <input
              value={roomsList.length}
              onChange={(e) => handleRooms(e)}
              className={styles["quantity-input"]}
            />
          </div>

          {
            cardList?.length ? <>
              <p> Entre com as dimensões de cada cômodo</p>
              {cardList}
              <button onClick={handleTotalArea} >Calcular </button>
            </>
              : null
          }

          {paintQuantity && cardList?.length === 0 && showFinalCalculation()}

        </section>

        <SideGallery/>
      </main>

      <Footer/>
      
    </body>
  )
}