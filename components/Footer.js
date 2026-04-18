'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const footerLinks = {
  company: [
    { label: 'About us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blogs', href: '#blogs' }
  ],
  aiSolutions: [
    { label: 'Custom AI Agents', href: '#custom-ai' },
    { label: 'Voice AI', href: '#voice-ai' },
    { label: 'Customer Support AI', href: '#support-ai' }
  ],
  services: [
    { label: 'Workflow Automation', href: '#workflow' },
    { label: 'Predictive Analytics', href: '#analytics' },
    { label: 'All Services →', href: '#services' }
  ],
  products: [
    { label: 'All Products', href: '#products' },
    { label: 'JobMail AI', href: '#jobmail' },
    { label: 'PostGenius AI', href: '#postgenius' }
  ]
}

const socialLinks = [
  { 
    icon: '/SocialInstagram.svg',
    label: 'Instagram',
    href: 'https://instagram.com'
  },
  { 
    icon: '/SocialX.svg',
    label: 'X',
    href: 'https://twitter.com'
  },
  { 
    icon: '/SocialLinkedin.svg',
    label: 'LinkedIn',
    href: 'https://linkedin.com'
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Logo and About */}
          <div className={styles.footerLeft}>
            <Link href="/" className={styles.footerLogo}>
              <Image 
                src="/FooterCompanyLogo.svg" 
                alt="Cogniq AI Logo" 
                width={143.56} 
                height={32}
              />
            </Link>
            <p className={styles.footerTagline}>A Cogniq Labs Division</p>
            <p className={styles.footerAbout}>
              Building intelligent AI apps that transform how you interact with technology.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map(social => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <Image 
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Solutions Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>AI Solutions</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.aiSolutions.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Services</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.services.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerColumnTitle}>Products</h4>
            <ul className={styles.footerLinks}>
              {footerLinks.products.map(link => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Cogniq AI. All Rights Reserved.
          </p>
          <div className={styles.footerBottomLinks}>
            <a href="#terms">Terms of service</a>
            <span className={styles.separator}>•</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
