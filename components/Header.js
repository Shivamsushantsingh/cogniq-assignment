'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = () => setMobileOpen(!mobileOpen)

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
            <a href="#home" className={`${styles.navLink} ${styles.active}`}>Home</a>
            <a href="#about" className={styles.navLink}>About Us</a>
            <a href="#services" className={styles.navLink}>Services</a>
            <a href="#lab" className={styles.navLink}>Our Lab</a>
            <a href="#blogs" className={styles.navLink}>Blogs</a>
          </nav>

          <button className="btn btn-contact">Contact Us</button>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {mobileOpen && (
          <div className={styles.mobileOverlay} onClick={toggleMenu}>
            <nav className={styles.mobileNav}>
              <a href="#home" className={`${styles.navLink} ${styles.active}`} onClick={toggleMenu}>Home</a>
              <a href="#about" className={styles.navLink} onClick={toggleMenu}>About Us</a>
              <a href="#services" className={styles.navLink} onClick={toggleMenu}>Services</a>
              <a href="#lab" className={styles.navLink} onClick={toggleMenu}>Our Lab</a>
              <a href="#blogs" className={styles.navLink} onClick={toggleMenu}>Blogs</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
