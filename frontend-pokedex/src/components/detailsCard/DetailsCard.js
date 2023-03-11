import React from 'react'
import { PokemonData } from '../pokemonData/PokemonData'
import { typesStyles } from '../types/types'
import styles from "./detailsCard.module.scss"

const DetailsCard = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <>
            {pokemon.types &&
                <div
                    className={styles['flex-big-card']}
                    style={{ backgroundColor: typesStyles[pokemon.types[0]].background }}
                >
                                    <div>
                                        <div className={styles["image-flex"]}>
                                            <img src={pokemon.frontImage}  width={96} height={96} alt={pokemon.name+"- frente"}/>
                                        </div>
                                        <div className={styles["image-flex"]}>
                                            <img src={pokemon.backImage}  width={96} height={96} alt={pokemon.name+"-  trás"}/>
                                        </div>

                                    </div>
                                    <div></div>
                                    <div
                                    >
                                        <PokemonData pokemon={pokemon} />  

                                    </div>



                </div>


            }
        </>


    )
}

export default DetailsCard