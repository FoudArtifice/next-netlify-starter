import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Inscription terminée !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenue sur Fou d'Artifice !" />
        <p className="description">
          Vous pouvez désormais vous connecter à votre compte.
        </p>
      </main>

    </div>
  )
}
