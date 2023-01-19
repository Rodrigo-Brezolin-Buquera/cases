import styles from "../../../styles/MainPage.module.css"

const FACEBOOK_LOGO_URL = "/assets/icons/FacebookWhite.png"
const INSTAGRAM_LOGO_URL = "/assets/icons/InstagramWhite.png"

const Footer = () => {

    return (
        <footer>
            <img src={FACEBOOK_LOGO_URL} className={styles["logo"]} />
            <img src={INSTAGRAM_LOGO_URL} className={styles["logo"]} />
        </footer>
    )
}

export default Footer