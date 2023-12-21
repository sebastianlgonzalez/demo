import VoiceAssistant from '@/components/Projects/VoiceAssistant'
import EcoliMachineLearning from '@/components/Projects/EcoliMachineLearning'
import Link from 'next/link';
import styles from './sidebar.module.css'
import { useEffect, useRef, useState } from 'react';


const projectLinks = {
  voice_assistant: 'https://github.com/sebastianlgonzalez/A.I.-Voice-Assistant',
  ecoli_machine_learning: 'https://github.com/sebastianlgonzalez/Ecoli-Machine-Learning',
};



const Sidebar = ({ query }) => {
  const [fade, setFade] = useState(false)
  const [content, setContent] = useState()

  useEffect(() => {
    if (!!query) {
      if (fade == "in") {
        setFade("out")
        setTimeout(() => {
          setContent(query)
          setFade("in")
        }, 150)
      } else {
        setContent(query)
        setFade("in")
      }
    } else {
      setFade("out")
      setTimeout(() => {
        setContent(query)
      }, 150)
    }

  },[query])

  return (
    <div data-fade={fade} id={styles.wrapper}>
      {content ? (
      <>
        <section>
          {content == 'voice_assistant' ? <VoiceAssistant /> : content === 'ecoli_machine_learning' ? <EcoliMachineLearning /> : null}
        </section>
        <p>More Info: {projectLinks[content] && <a href={projectLinks[content]} target="_blank" rel="noopener noreferrer">{projectLinks[content]}</a>}</p>
        <div>
          <Link href={content == 'voice_assistant' ? 'https://github.com/sebastianlgonzalez/A.I._Voice_Assistant' : content === 'ecoli_machine_learning' ? 'https://github.com/sebastianlgonzalez/Ecoli_Machine_Learning' : null} scroll={false}>Open in this tab.</Link>
          <Link href={content == 'voice_assistant' ? 'https://github.com/sebastianlgonzalez/A.I._Voice_Assistant' : content === 'ecoli_machine_learning' ? 'https://github.com/sebastianlgonzalez/Ecoli_Machine_Learning' : null} scroll={false} target="_blank" rel="noopener noreferrer">Open in new tab.</Link>
        </div>
      </>
      ) : null}
    </div>
  )
}


export default Sidebar;
