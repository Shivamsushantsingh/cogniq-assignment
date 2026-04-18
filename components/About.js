'use client'

import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutLeft}>
            <div className={styles.accentBar}></div>
            <Image 
              src="/HomeAboutUsRobotHandImage.png" 
              alt="Robot Hand" 
              width={430}
              height={280}
              className={styles.robotImage}
            />
          </div>

          <div className={styles.aboutRight}>
            <span className={styles.aboutTag}>ABOUT US</span>
            
            <h2 className={styles.aboutTitle}>
              Engineering Trust. <span className={styles.highlight}>Delivering Intelligence.</span>
            </h2>

            <div className={styles.companyInfo}>
              <h3 className={styles.companyName}>At Cogniq AI</h3>
              
              <p className={styles.aboutDescription}>
we don&apos;t just develop features, we build <span className={styles.highlight}>full-scale</span> AI systems designed for clarity, transparency, and long-term growth. From startups to enterprises, we partner with teams that want to innovate without compromising on <span className={styles.highlight}>quality.</span>
              </p>

              <button className="btn btn-primary">
                Know more about Us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
