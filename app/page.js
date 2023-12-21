import styles from '@/app/main.module.css'
import Link from 'next/link'

import Wireframe from '@/components/Wireframe/Wireframe'
import Projects from '@/components/Projects/Projects'
export default function page() {
  return (
    <>
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
        <Projects/>
      </section>
    </>

  )
}