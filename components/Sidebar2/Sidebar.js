import VoiceAssistant from '@/components/Projects/VoiceAssistant'
import EcoliMachineLearning from '@/components/Projects/EcoliMachineLearning'
import Link from 'next/link';
import styles from './sidebar.module.css'
import { useEffect, useState } from 'react';

const projectComponents = {
  voice_assistant: {
    component: VoiceAssistant,
    paddingTop: "2.5rem",
    link: 'https://github.com/sebastianlgonzalez/A.I.-Voice-Assistant'
  },
  ecoli_machine_learning: {
    component: EcoliMachineLearning,
    paddingTop: "4.5rem",
    link: 'https://github.com/sebastianlgonzalez/Ecoli-Machine-Learning'
  },
};

const Sidebar = ({ query }) => {
  const [fade, setFade] = useState("in");
  const [content, setContent] = useState(null);

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

  const selectedProject = projectComponents[content];

  return (
    <div data-content={content} data-fade={fade} id={styles.wrapper}>
      {content && selectedProject && (
        <>
          <section style={{ paddingTop: selectedProject.paddingTop }}>
            {content && selectedProject.component && <selectedProject.component />}
          </section>
          <p>More Info: {selectedProject.link}</p>
          <div>
            <Link href={selectedProject.link} scroll={false} target="_blank" rel="noopener noreferrer">
              Open in new tab.
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;