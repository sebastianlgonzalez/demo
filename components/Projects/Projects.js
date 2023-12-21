"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import styles from './projects.module.css'
import Sidebar from '@/components/Sidebar/Sidebar'

export default function Projects() {
  const query = useSearchParams().get('project')
  return (
    <>
      <div id={styles.wrapper}>
        <h2>Projects</h2>
        <ul>
          <li>
            <Link
              data-toggled={query == "voice_assistant" ? true : false}
              className={styles.link}
              href={query == "voice_assistant" ? "/" : "/?project=voice_assistant"}
              scroll={false}
            >
              A.I. Voice Assistant
            </Link>
          </li>
          <li>
            <Link
              data-toggled={query == "ecoli_machine_learning" ? true : false}
              className={styles.link}
              href={query == "ecoli_machine_learning" ? "/" : "/?project=ecoli_machine_learning"}
              scroll={false}
            >
              Ecoli Sample Analysis with Machine Learning
            </Link>
          </li>
        </ul>
      </div>
      <Sidebar query={query} />
    </>
  )
}
