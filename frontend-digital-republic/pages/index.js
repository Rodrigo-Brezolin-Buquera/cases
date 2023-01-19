import Head from 'next/head'
import MainPage from '../src/screens/MainPage'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Case Digital Republic</title>
        <meta name="description" content="Case Digital Republic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage />
    </div>
  )
}
