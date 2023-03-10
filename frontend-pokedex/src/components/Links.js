import Link from 'next/link'


export const HomeLink = ({children}) => {
    return (
        <Link href="/">{children}</Link>
    )
} 

export const PokedexLink = ({children}) => {
    return (
        <Link href="/pokedex">{children}</Link>
    )
} 

export const DetailsLink = ({id, children}) => {
    return (
        <Link href={"/details/"+id} >{children}</Link>
    )
} 
