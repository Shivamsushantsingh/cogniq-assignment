'use client'

import Image from 'next/image'
import styles from './Process.module.css'

const processes = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Understand challenges and design a strategic AI roadmap.',
    image: '/ProcessDiscovery.png'
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Prototype',
    description: 'Detailed wireframes and interactive prototypes.',
    image: '/ProcessDesign.png'
  },
  {
    id: 3,
    number: '03',
    title: 'Development & Testing',
    description: 'Rigorous testing and continuous collaboration.',
    image: '/ProcessDevelopment.png'
  },
  {
    id: 4,
    number: '04',
    title: 'Launch & Growth',
    description: 'Deploy and optimize for continued success.',
    image: '/ProcessLaunch.png'
  }
]

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className="container">
        <div className={styles.processHeader}>
          <h2 className={styles.processTitle}>OUR PROCESS</h2>
          <p className={styles.processSubtitle}>From concept to creation, seamlessly.</p>
        </div>

        <div className={styles.processGrid}>
          {processes.map(proc => (
            <div key={proc.id} className={styles.processCard}>
              <Image
                src={proc.image}
                alt={proc.title}
                width={400}
                height={280}
                className={styles.processImage}
              />
              <div className={styles.processOverlay}></div>
              
              <div className={styles.processBadge}>{proc.number}</div>
              
              <div className={styles.processContent}>
                <h3 className={styles.processCardTitle}>{proc.title}</h3>
                <p className={styles.processDescription}>{proc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
