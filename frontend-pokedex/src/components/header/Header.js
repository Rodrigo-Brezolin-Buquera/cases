import { useRouter } from "next/router"
import { HomeLink, PokedexLink } from "../Links"
import styles from "./header.module.scss"
import Image from "next/image"
import classNames from "classnames"

export const Header = ({ deleteFromPokedex }) => {
    const router = useRouter()


    return (
        <header className={styles['flex-div']}>
            <div className={styles['button-div']}  >
                {
                    router.pathname === "/" || (
                        <HomeLink>
                            <p className={styles['link-text']}>
                                Ir para lista
                            </p>
                        </HomeLink>
                    )
                }
            </div>

            <Image src={"/images/Logo.svg"} width="163" height="60" ></Image>

            <div className={styles['button-div']} >

                {
                    router.pathname === "/pokedex" || (
                        <PokedexLink>
                            <button
                                className={
                                    classNames(
                                        styles['header-button'],
                                        router.pathname === "/" ? styles['blue-button'] : styles['red-button']
                                    )
                                } >
                                {router.pathname === "/" ?
                                    <p>pokedex</p>
                                    :
                                    <p onClick={deleteFromPokedex} >Excluir da pokedex</p>
                                }
                            </button>
                        </PokedexLink>
                    )
                }
            </div>
        </header>
    )
}