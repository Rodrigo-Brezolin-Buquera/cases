import { memo } from "react"
import styles from "./PokemonCard.module.scss"
import classNames from "classnames"
import { DetailsLink } from "../Links"
import Image from "next/image"
import { typesStyles } from "../types/types"
import { useRouter } from "next/router"

const PokemonCard = ({ pokemon, handler }) => {
    const router = useRouter()
 
    // next Image no pokemon - ele rejeita a fonte??

    const TypeCard = ({ type }) => {
        return (
            <div className={styles["type-card"]} style={{ backgroundColor: typesStyles[type].color }} >
                <Image src={typesStyles[type].image} alt={type + "logo"} width={17} height={17} />
                <p  > {type}</p>
            </div>
        )
    }

    return (
        <div
            className={styles['flex-card']}
            style={{ backgroundColor: typesStyles[pokemon.types[0]].background }}
        >
            <div className={classNames(styles['card-line'], styles.info)}>
                <div className={styles["info-div"]}>
                    <p >#{pokemon?.id}</p>
                    <h3 >{pokemon?.name}</h3>
                    <div className={styles["type-div"]}>
                        {pokemon?.types.map(i => <TypeCard key={i} type={i} />)}
                    </div>
                </div>
                <img
                    className={styles["pokemon-image"]}
                    src={pokemon?.image}
                    width={136}
                    height={136}
                    alt={pokemon?.name}
                />
            </div>

            <div className={classNames(styles['card-line'], styles["button-line"])}>
                <DetailsLink id={pokemon?.id} >
                    <p >Detalhes</p>
                </DetailsLink>
                <button
                    onClick={()=> handler(pokemon)}
                    className={
                        router.pathname === "/pokedex" ? 
                        classNames(styles['card-button'], styles["remove-button"])
                        :
                        styles['card-button']
                    }
                >
                   {router.pathname === "/pokedex" ? "Excluir" :  "Capturar!" }
                </button>

            </div>

            <Image
                src={"/images/smallPokeball.png"}
                className={styles["background-image"]}
                width={200}
                height={160}
                alt="fundo pokebola"
            />
        </div>
    )
}

export default memo(PokemonCard)
