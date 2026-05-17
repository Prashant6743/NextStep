'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Play, Users, Award, TrendingUp, Star,
  Sparkles,
} from 'lucide-react';
import styles from './Hero.module.css';

/* ── Data ── */
const STATS = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Award, value: '98%', label: 'Satisfaction Rate' },
  { icon: TrendingUp, value: '3x', label: 'Avg Career Growth' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
];

const CLIENT_LOGOS = [
  'LinkedIn', 'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Spotify',
  'LinkedIn', 'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Spotify',
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] as const },
  },
});

/* ── Component ── */
export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* ── Background Layer (CSS-only, zero JS overhead) ── */}
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgOrb1} aria-hidden />
      <div className={styles.bgOrb2} aria-hidden />

      {/* ── Liquid Glass Element (static — no scroll transform, no mouse tilt) ── */}
      <div className={styles.glassWrap} aria-hidden>
        <Image
          src="/liquid_glass.png"
          alt=""
          width={700}
          height={700}
          priority
          className={styles.glassImg}
        />
      </div>

      {/* ── Main Content ── */}
      <div className={`container relative z-[2] ${styles.content}`}>

        {/* Badge */}
        <motion.div
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <span className={styles.badgePulse} />
          Trusted by 500+ Professionals &nbsp;⭐ 4.9 / 5
        </motion.div>

        {/* Headline */}
        <motion.h1
          className={styles.headline}
          variants={fadeUp(0.15)}
          initial="hidden"
          animate="visible"
        >
          Transform Your{' '}
          <span className={`gradient-text ${styles.gradientAnimate}`}>
            Career Presence
          </span>
          <br />
          <span className={styles.subline}>
            with Nextstep Careers
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className={styles.subheading}
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
        >
          We help students, professionals, freelancers, and creators build powerful
          personal brands, optimized profiles, and professional digital presence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className={styles.ctaGroup}
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
        >
          <Link href="#contact" className={`btn btn-primary ${styles.ctaPrimary}`}>
            <Sparkles size={16} />
            Get Started Free <ArrowRight size={18} />
          </Link>
          <Link href="#services" className={`btn btn-outline ${styles.ctaSecondary}`}>
            View Services
          </Link>
          <Link href="#portfolio" className={styles.ctaGhost}>
            <div className={styles.playIcon}>
              <Play size={13} fill="currentColor" />
            </div>
            See Our Work
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className={styles.statCard}>
              <div className={styles.statIcon}>
                <Icon size={17} />
              </div>
              <div className={styles.statValue}>{value}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trusted-by Ticker */}
        <motion.div
          className={styles.tickerWrap}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span className={styles.tickerLabel}>Our clients work at</span>
          <div className={styles.tickerTrack}>
            <div className={styles.tickerFadeLeft} />
            <div className={styles.tickerFadeRight} />
            <div className={styles.tickerInner}>
              {CLIENT_LOGOS.map((name, i) => (
                <span key={`${name}-${i}`} className={styles.tickerItem}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className={styles.scrollHint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span className={styles.scrollLabel}>Scroll</span>
      </motion.div>
    </section>
  );
}
