import { useRouter } from "next/router"
import { HomeLink, PokedexLink } from "./Links"


export const Header = () => {
    const router = useRouter()


    return (
        <header style={{ display: "flex", justifyContent: "space-around" }}>

            <div style={{ display: router.pathname === "/" ? "none" : "inline" }}>
                <HomeLink  >Ir para lista</HomeLink>
            </div>


            <p> Logo</p>

            <div>
                <button
                    style={{ display: router.pathname === "/pokedex" ? "none" : "inline" }}
                // onClick={"mesma lógica de baixo"}
                // ou add pokedex - abaixo
                >
                    {router.pathname === "/" ?

                     <PokedexLink>Pokedex</PokedexLink>
                     : "Exluir da Pokedex"  }
                    

                </button> 
            </div>
        </header>
    )
}