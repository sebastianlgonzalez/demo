import Head from 'next/head'
import Link from 'next/link'

import styles from '@/pages/main.module.css'

export default function Page() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={styles.wrapper}>
        <Link href={"/demo1"}>Demo 1</Link>
        <Link href={"/demo2"}>Demo 2</Link>
      </main>
      
    </>
  )
}
