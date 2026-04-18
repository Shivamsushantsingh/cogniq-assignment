'use client'

import Image from 'next/image'
import styles from './ReadyToTransform.module.css'

export default function ReadyToTransform() {
  return (
    <section className={styles.readyToTransform}>
      <Image
        src="/ReadyToTransform.jpg"
        alt="Ready to Transform"
        fill
        className={styles.backgroundImage}
        priority
      />
      <div className={styles.overlay}></div>
      
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to transform Your Workflow?</h2>
          <p className={styles.description}>
            Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI
          </p>
          <button className="btn btn-primary">Book a Strategy Call →</button>
        </div>
      </div>
    </section>
  )
}
