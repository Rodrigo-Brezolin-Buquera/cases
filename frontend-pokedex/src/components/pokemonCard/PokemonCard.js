import { memo } from "react"
import styles from "./PokemonCard.module.scss"
import classNames from "classnames"
import { DetailsLink } from "../Links"
import Image from "next/image"
import { typesStyles } from "../types/types"
import { useRouter } from "next/router"
import { PokemonData } from "../pokemonData/PokemonData"

const PokemonCard = ({ pokemon, handler }) => {
    const router = useRouter()
 
    return (
        <div
            className={styles['flex-card']}
            style={{ backgroundColor: typesStyles[pokemon.types[0]]?.background }}
        >
            <PokemonData pokemon={pokemon}/>
          
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
