import VoiceAssistant from '@/components/Projects/VoiceAssistant'
import EcoliMachineLearning from '@/components/Projects/EcoliMachineLearning'
import Link from 'next/link';
import styles from './sidebar.module.css'
import { useEffect, useState } from 'react';

const projectLinks = {
  voice_assistant: 'https://github.com/sebastianlgonzalez/A.I.-Voice-Assistant',
  ecoli_machine_learning: 'https://github.com/sebastianlgonzalez/Ecoli-Machine-Learning',
};

const Sidebar = ({query}) => {
  const [fade, setFade] = useState("in")
  const [content, setContent] = useState()
  useEffect(() => {
    if (!!query) {
      setFade("out");
      setTimeout(() => {
        setContent(query);
        setFade("in");
      }, 150);
    } else {
      setFade("out");
      setTimeout(() => {
        setContent(query);
      }, 150);
    }
  }, [query]);

  return (
    <div data-content={content} data-fade={fade} id={styles.wrapper}>
      {content ? (
      <>
        <section>
          {content == 'voice_assistant' ? <VoiceAssistant /> : content === 'ecoli_machine_learning' ? <EcoliMachineLearning /> : null}
        </section>
        <p>More Info: {projectLinks[content]}</p>
        <div>
          <Link href={content == 'voice_assistant' ? 'https://github.com/sebastianlgonzalez/A.I._Voice_Assistant' : content === 'ecoli_machine_learning' ? 'https://github.com/sebastianlgonzalez/Ecoli_Machine_Learning' : null} scroll={false} target="_blank" rel="noopener noreferrer">Open in new tab.</Link>
        </div>
      </>
      ) : null}
    </div>
  )
}

export default Sidebar;
/* 
<Link href={content == 'voice_assistant' ? 'https://github.com/sebastianlgonzalez/A.I._Voice_Assistant' : content === 'ecoli_machine_learning' ? 'https://github.com/sebastianlgonzalez/Ecoli_Machine_Learning' : null} scroll={false}>Open in this tab.</Link>
*/