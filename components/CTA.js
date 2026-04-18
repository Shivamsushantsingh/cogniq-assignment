'use client'

import Image from 'next/image'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaIconWrapper}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L19.2 12H29.6L21.4 17.2L24.6 27L16 21.8L7.4 27L10.6 17.2L2.4 12H12.8L16 2Z" fill="white" stroke="white" strokeWidth="1"/>
              </svg>
            </div>
            <div>
              <h3 className={styles.ctaTitle}>Unlock AI Potential</h3>
              <p className={styles.ctaSubtitle}>Discover how we can transform your operations</p>
            </div>
          </div>

          <button className={`btn btn-secondary ${styles.ctaButton}`}>
            Explore Solutions →
          </button>
        </div>
      </div>
    </section>
  )
}
