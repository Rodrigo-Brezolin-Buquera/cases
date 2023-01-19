import styles from "../../../styles/MainPage.module.css"

const PHOTO1_URL = "/assets/photos/photo1.png"

const SideGallery = () => {

    return (
        <section className={styles["flex-section"]}>
        <img src={PHOTO1_URL} className={styles["main-photo"]} />

        <h3 className={styles["center-text"]} >Facilite sua vida! Calcule a quantidade de tinta que você precisa e já faça a encomenda conosco!</h3>
      </section>
    )
}

export default SideGallery