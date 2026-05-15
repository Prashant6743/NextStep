'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rahul S.',
    role: 'Software Engineering Student',
    service: 'Resume & ATS',
    quote: 'My resume was completely transformed by Nextstep Careers. Within days of applying with the new ATS-friendly resume, I started receiving interview calls. The formatting, keywords, and presentation were highly professional.',
    stars: 5,
    initials: 'RS',
    color: '#8b5cf6',
  },
  {
    name: 'Aparna Yadav',
    role: 'B.Ed Student',
    service: 'LinkedIn Optimisation',
    quote: 'I never realized how important LinkedIn optimization was until Nextstep Careers redesigned my profile. My profile views increased significantly, and I even received recruiter messages.',
    stars: 5,
    initials: 'AY',
    color: '#a855f7',
  },
  {
    name: 'Aman K.',
    role: 'Freelance Designer',
    service: 'Portfolio Creation',
    quote: 'The portfolio created for me looked clean, modern, and premium. It perfectly showcased my skills and helped me gain more client trust.',
    stars: 5,
    initials: 'AK',
    color: '#7c3aed',
  },
  {
    name: 'Sneha R.',
    role: 'Final-Year Student',
    service: 'Career Guidance',
    quote: 'What I liked most was the genuine guidance. Instead of generic advice, they gave me a proper roadmap based on my goals and strengths.',
    stars: 5,
    initials: 'SR',
    color: '#9333ea',
  },
  {
    name: 'Arjun P.',
    role: 'Startup Founder',
    service: 'Website Design',
    quote: 'The website delivered by Nextstep Careers exceeded my expectations. It was responsive, visually attractive, and professionally structured for client conversion.',
    stars: 5,
    initials: 'AP',
    color: '#c084fc',
  },
  {
    name: 'Vikash T.',
    role: 'Freelancer',
    service: 'Client Acquisition',
    quote: 'Their client acquisition strategies actually worked for me. I started getting responses from outreach messages and learned how to position my services properly.',
    stars: 5,
    initials: 'VT',
    color: '#8b5cf6',
  },
  {
    name: 'Kiran',
    role: 'CA Intermediate',
    service: 'General',
    quote: 'Very responsive and easy to work with. The quality of output was well beyond what I expected for the price.',
    stars: 5,
    initials: 'KI',
    color: '#a855f7',
  },
];

// Two rows: row 1 = first 4, row 2 = last 3 + repeat
const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
const row2 = [...testimonials.slice(3), ...testimonials.slice(3)];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className={styles.star} />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className={styles.card}>
      {/* Corner glow */}
      <div className={styles.cardGlow} style={{ background: `radial-gradient(circle at 0% 0%, ${t.color}25, transparent 60%)` }} />

      {/* Quote icon */}
      <Quote size={20} className={styles.quoteIcon} style={{ color: t.color }} />

      <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>

      <StarRating count={t.stars} />

      <div className={styles.cardFooter}>
        <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${t.color}40, ${t.color}15)`, borderColor: `${t.color}40` }}>
          <span style={{ color: t.color }}>{t.initials}</span>
        </div>
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{t.name}</span>
          <span className={styles.authorRole}>{t.role}</span>
        </div>
        <div className={styles.serviceTag} style={{ color: t.color, borderColor: `${t.color}35`, background: `${t.color}10` }}>
          {t.service}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      {/* Background glow */}
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Client Stories</span>
          <h2 className={styles.title}>
            Real People. <span className="gradient-text">Real Results.</span>
          </h2>
          <p className={styles.sub}>
            Professionals from every field who trusted us to transform their career presence.
          </p>
        </motion.div>
      </div>

      {/* Marquee track — Row 1 (left) */}
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
        >
          {row1.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Marquee track — Row 2 (right, reversed) */}
      <div className={styles.marqueeWrap}>
        <div className={styles.fadeLeft} />
        <div className={styles.fadeRight} />
        <motion.div
          className={styles.marqueeTrack}
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        >
          {row2.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Stats strip */}
      <motion.div
        className={styles.statsRow}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { value: '200+', label: 'Happy Clients' },
          { value: '5★', label: 'Average Rating' },
          { value: '95%', label: 'Satisfaction Rate' },
          { value: '7+', label: 'Service Categories' },
        ].map((s) => (
          <div key={s.label} className={styles.statChip}>
            <span className={styles.statVal}>{s.value}</span>
            <span className={styles.statLbl}>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
