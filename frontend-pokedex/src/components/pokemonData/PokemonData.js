import styles from "./PokemonData.module.scss"
import classNames from "classnames"
import Image from "next/image"
import { typesStyles } from "../types/types"

export const PokemonData = ({ pokemon }) => {
 
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
    )
}


