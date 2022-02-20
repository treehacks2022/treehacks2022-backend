import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>box with rounded corners SERVER</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/boxlogo2.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          "box with rounded corners" server
        </h1>

        <p className={styles.description}>
          You shouldn't be here
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
