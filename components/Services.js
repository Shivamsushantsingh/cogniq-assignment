'use client'

import Image from 'next/image'
import styles from './Services.module.css'

const services = [
  {
    id: 1,
    title: 'AI-Powered Customer Service',
    description: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
    icon: '/OurServicesCustomer.svg'
  },
  {
    id: 2,
    title: 'Automated Scheduling & Operations',
    description: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
    icon: '/OurServicesScheduling.svg'
  },
  {
    id: 3,
    title: 'Intelligent Inventory Management',
    description: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
    icon: '/OurServicesInventory.svg'
  },
  {
    id: 4,
    title: 'Micro Tools & Extensions',
    description: 'Lightweight tools powered by AI to boost productivity.',
    icon: '/OurServicesTools.svg'
  }
]

export default function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.servicesHeader}>
          <h2 className={styles.servicesTitle}>OUR SERVICES</h2>
          <p className={styles.servicesSubtitle}>
            Solve your biggest challenges with end-to-end AI solutions.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <Image 
                  src={service.icon}
                  alt={service.title}
                  width={28}
                  height={28}
                  className={styles.serviceIcon}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.viewAllServices}>
          <a href="#services" className={styles.viewAllLink}>View all Services →</a>
        </div>
      </div>
    </section>
  )
}
