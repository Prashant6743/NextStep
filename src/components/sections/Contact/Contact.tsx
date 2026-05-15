'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Mail,
  MessageCircle,
  Send,
  Globe,
  Camera,
  Play,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Contact.module.css';

const WHATSAPP_NUMBER = '919606037499';
const CONTACT_EMAIL = 'nextstepcareersai24@gmail.com';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const socials = [
  { icon: Globe, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Send, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Camera, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Play, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgOrb} aria-hidden />
      <div className={styles.bgOrb2} aria-hidden />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="section-label">Contact Us</div>
          <h2 className={styles.title}>
            Let&apos;s Build Your Professional
            <br />
            Presence <span className="gradient-text">Together</span>
          </h2>
          <p className={styles.subtitle}>
            Ready to take the next step in your career? Reach out for a consultation
            and let&apos;s discuss how we can help you grow with strategic branding,
            optimized profiles, and a powerful digital presence.
          </p>
        </motion.div>

        <div className={styles.contentWrapper}>

          {/* LEFT — Illustration + CTA */}
          <motion.div
            className={styles.ctaColumn}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.illustrationWrap}>
              <Image
                src="/retro-pc.png"
                alt="Professional at a desk surrounded by communication icons"
                width={520}
                height={520}
                className={styles.illustration}
                priority={false}
              />
              <div className={styles.illustrationGlow} aria-hidden />
            </div>

            <div className={styles.ctaCard}>
              <h3 className={styles.ctaCardTitle}>Have a project in mind?</h3>
              <p className={styles.ctaCardDesc}>
                Fill out our quick inquiry form and we&apos;ll get back to you within 24 hours with a personalized plan.
              </p>
              <Link href="/contact" className={`btn btn-primary ${styles.ctaFormBtn}`}>
                Go to Contact Form <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — Get in Touch */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div className={styles.infoCard} variants={fadeUp}>
              <h3 className={styles.infoTitle}>Get in Touch</h3>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.infoDetails}>
                    <h4>Email Us</h4>
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <MessageCircle size={20} />
                  </div>
                  <div className={styles.infoDetails}>
                    <h4>WhatsApp</h4>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 96060 37499
                    </a>
                    <p className={styles.infoNote}>We typically reply within 2 hours.</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className={styles.whatsappBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <div className={styles.socialSection}>
                <h4 className={styles.socialTitle}>Follow Our Journey</h4>
                <div className={styles.socialGrid}>
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className={styles.socialBtn}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
