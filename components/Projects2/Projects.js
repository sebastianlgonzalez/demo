"use client"
import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import styles from './projects.module.css'
import Sidebar2 from '@/components/Sidebar2/Sidebar'

export default function Projects() {
  const query = useSearchParams().get('project')
  const pathname = usePathname()
  return (
    <>
      <div id={styles.wrapper}>
        <h2>Projects</h2>
        <ul>
          <li>
            <Link
              data-toggled={query == "voice_assistant" ? true : false}
              className={styles.link}
              href={query == "voice_assistant" ? pathname : pathname + "?project=voice_assistant"}
              scroll={false}
            >
              A.I. Voice Assistant
            </Link>
          </li>
          <li style={{ marginTop: query == "voice_assistant" ? "15rem" : "1rem" }}>
            <Link
              data-toggled={query == "ecoli_machine_learning" ? true : false}
              className={styles.link}
              href={query == "ecoli_machine_learning" ? pathname : pathname + "?project=ecoli_machine_learning"}
              scroll={false}
            >
              Ecoli Sample Analysis with Machine Learning
            </Link>
          </li>
        </ul>
      </div>
      <Sidebar2 query={query} />
    </>
  )
}