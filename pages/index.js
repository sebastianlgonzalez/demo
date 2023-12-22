import Head from 'next/head'
import Link from 'next/link'

import styles from '@/pages/main.module.css'

import Wireframe from '@/components/Wireframe/Wireframe'
import Projects from '@/components/Projects/Projects'

export default function Page() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id={styles.header}>
        <Link className={styles.button} href="/Resume.pdf" scroll={false}>Resume</Link>
        <Link className={styles.button} href="/CV.pdf" scroll={false}>CV</Link>
      </header>
      <section id={styles.landing}>
        <div id={styles.info}>
          <h1>
            <span>Sebastian</span>
            <br />
            <span>Gonzalez</span>
          </h1>
          <h2>Computer Engineer</h2>
        </div>
        <Wireframe />
      </section>
      <section id={styles.projects}>
        <Projects />
      </section>
    </>
  )
}
