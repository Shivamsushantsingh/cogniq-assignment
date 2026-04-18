'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/HeaderCompanyLogo.svg" 
              alt="Cogniq AI Logo" 
              width={131.15} 
              height={28}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <a href="#home" className={`${styles.navLink} ${styles.active}`}>
              Home
            </a>
            <a href="#about" className={styles.navLink}>
              About Us
            </a>
            <a href="#services" className={styles.navLink}>
              Services
            </a>
            <a href="#lab" className={styles.navLink}>
              Our Lab
            </a>
            <a href="#blogs" className={styles.navLink}>
              Blogs
            </a>
          </nav>

          <button className="btn btn-contact">Contact Us</button>
        </div>
      </div>
    </header>
  )
}
