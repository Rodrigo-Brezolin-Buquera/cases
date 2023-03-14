import classNames from 'classnames'
import React from 'react'
import { PokemonData } from '../pokemonData/PokemonData'
import { typesStyles } from '../types/types'
import styles from "./detailsCard.module.scss"

const DetailsCard = ({ pokemon }) => {

    const statsColors = (value) => {
        if (value >= 75) {
            return "#70B873"
        } else if (value < 75 && value >= 50) {
            return "#FFDE6A"
        } else {
            return "#FF7B2D"
        }
    }

    return (
        <>
            {pokemon.types &&
                <div
                    className={styles['flex-big-card']}
                    style={{ backgroundColor: typesStyles[pokemon?.types[0]]?.background }}
                >
                    <div className={styles["image-cont"]}>
                        <div className={classNames(styles["image-flex"], styles["white-cont"])}>
                            <img src={pokemon.frontImage} width={160} height={160} alt={pokemon.name + "- frente"} />
                        </div>
                        <div className={classNames(styles["image-flex"], styles["white-cont"])}>
                            <img src={pokemon.backImage} width={160} height={160} alt={pokemon.name + "-  trás"} />
                        </div>

                    </div>
                    <div className={classNames(styles["white-cont"], styles["column-cont"])}
                    >
                        <h4> Stats</h4>
                        {
                            pokemon?.stats && pokemon.stats.map(i => {
                                return <div className={styles["card-flex"]}>
                                    {i.name}
                                    <div style={
                                        {
                                            width: `${i.base_stat}px`,
                                            backgroundColor: statsColors(i.base_stat),
                                            color: "white",
                                            fontSize: "smaller",
                                            paddingLeft: "0.5em"
                                        }

                                    } >  {i.base_stat}  </div>

                                </div>
                            }
                            )
                        }
                       <p>Total: {pokemon?.stats?.reduce((a, b)=> a+b.base_stat, 0)}</p> 
                    </div>
                    <div
                    >
                        <PokemonData pokemon={pokemon} />
                        <div className={classNames(styles["white-cont"], styles["column-cont"])}

                        >
                            <h4>Moves:</h4>
                            {
                                pokemon?.moves && pokemon.moves.map(i => <div className={styles["move-card"]}> {i.replace("-", " ")}</div>)
                            }
                        </div>
                    </div>



                </div>


            }
        </>


    )
}

export default DetailsCard