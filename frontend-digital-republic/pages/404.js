import Head from 'next/head'
import { NextLink } from '../src/components/Link'
import styles from "../styles/Page404.module.css"

export default function Page404() {
    return (
        <main className={styles['column-container']} >
            <Head>
                <title>404 Não encontrado</title>
                <meta name="description" content="Página não encontrada" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1> Página não encontrada</h1>
            <NextLink href="/">
                Ir para home
            </NextLink>
        </main>
    )
}