'use client'

import Image from 'next/image'
import styles from './WhyChooseUs.module.css'

const reasons = [
  {
    id: 1,
    title: 'High-Trust Engineering',
    description: 'Research-backed methods with transparent communication.',
    icon: '/WhyUsHandshake.svg'
  },
  {
    id: 2,
    title: 'Built for Scale',
    description: 'Your product grows without breaking.',
    icon: '/WhyUsScale.svg'
  },
  {
    id: 3,
    title: 'Gen AI Expertise',
    description: 'Deep experience with LLMs and custom AI.',
    icon: '/WhyUsAI.svg'
  },
  {
    id: 4,
    title: 'User-Centered Design',
    description: 'Every feature is intuitive and purposeful.',
    icon: '/WhyUsDesign.svg'
  }
]

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChooseUs} id="why-us">
      <div className="container">
        <div className={styles.whyWrapper}>
          <div className={styles.whyHeader}>
            <h2 className={styles.whyTitle}>WHY CHOOSE US</h2>
            <p className={styles.whySubtitle}>
              Passion for precision, commitment to quality.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {reasons.map(reason => (
              <div key={reason.id} className={styles.whyCard}>
                <div className={styles.whyIconWrapper}>
                  <Image 
                    src={reason.icon}
                    alt={reason.title}
                    width={22}
                    height={22}
                    className={styles.whyIcon}
                  />
                </div>
                <h3 className={styles.whyCardTitle}>{reason.title}</h3>
                <p className={styles.whyCardDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
