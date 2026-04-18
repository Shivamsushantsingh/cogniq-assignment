'use client'

import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image 
        src="/IdeaIconHero.svg" 
        alt="Idea Icon" 
        width={30} 
        height={30}
        className={styles.iconLeft}
      />
      
      <Image 
        src="/BullsEyeHero.svg" 
        alt="Bullseye Icon" 
        width={30} 
        height={30}
        className={styles.iconTopRight}
      />
      
      <Image 
        src="/MagicSparklesHero.svg" 
        alt="Magic Sparkles Icon" 
        width={30} 
        height={30}
        className={styles.iconBottomRight}
      />

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Building <span className={styles.highlight}>Intelligent</span>, scalable AI
          solutions for the <span className={styles.highlight}>Next </span>Generation
        </h1>

        <p className={styles.heroSubtitle}>
          Your premier AI & Software engineering partner - transforming ideas into
          reliable, high-performance products.
        </p>

        <div className={styles.heroButtons}>
          <button className="btn btn-secondary">Explore our services</button>
          <button className="btn btn-primary">Book a Strategy Call</button>
        </div>
      </div>
    </section>
  )
}
