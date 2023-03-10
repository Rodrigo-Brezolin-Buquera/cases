import { useRouter } from "next/router"


export const Header = () => {
    const router = useRouter()



    return (
        <header style={{ display: "flex", justifyContent: "space-around" }}>

            <div>
                <p style={{ display: router.pathname === "/" ? "none" : "inline" }} >Lista</p>
            </div>


            <p> Logo</p>

            <div>
                <button
                    style={{ display: router.pathname === "/pokedex" ? "none" : "inline" }}
                // onClick={"mesma lógica de baixo"}
                >
                    {router.pathname === "/" ? "Pokedex" : "Exluir da Pokedex"} // ou add pokedex


                </button>
            </div>
        </header>
    )
}