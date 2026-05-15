'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { Target, Map, Wrench, Rocket, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import styles from './process.module.css';

/* ─── Data ─── */
const steps = [
  {
    number: '01',
    icon: Target,
    title: 'Understanding Client Goals',
    description:
      'Every journey starts with a deep-dive discovery call. We listen carefully to understand your background, aspirations, target audience, and unique challenges.',
    keyPoints: [
      'In-depth onboarding consultation',
      'Career history & skill assessment',
      'Identifying key goals and blockers',
      'Defining success metrics together',
    ],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.5)',
    tag: 'DISCOVER',
  },
  {
    number: '02',
    icon: Map,
    title: 'Strategic Planning',
    description:
      'Our career strategists craft a custom roadmap tailored specifically to you — researching your industry, target roles, and competitive landscape.',
    keyPoints: [
      'Industry-specific positioning strategy',
      'Competitor and market analysis',
      'Content and brand messaging framework',
      'Timeline and deliverables roadmap',
    ],
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.5)',
    tag: 'STRATEGIZE',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Professional Optimization',
    description:
      'Strategy meets execution. We craft, design, and optimize every asset — your resume, LinkedIn, portfolio, or website — to the highest professional standard.',
    keyPoints: [
      'ATS-optimized resume writing',
      'LinkedIn keyword and SEO strategy',
      'Portfolio and website design & dev',
      'Brand visuals, copy, and content',
    ],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.5)',
    tag: 'BUILD',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Final Delivery & Growth',
    description:
      "We don't just deliver and disappear. After launch, we provide revision rounds, growth tips, and ongoing guidance to make sure your presence actively works for you.",
    keyPoints: [
      'Final review and quality assurance',
      'Editable source files delivered',
      'Post-delivery revision rounds',
      'Ongoing mentorship and support',
    ],
    color: '#9333ea',
    glow: 'rgba(147,51,234,0.5)',
    tag: 'LAUNCH',
  },
];

const faqs = [
  {
    q: 'How long does the whole process take?',
    a: "Timelines vary by service. A resume typically takes 3–5 business days. A full website or brand identity takes 1–3 weeks. We'll give you a clear timeline at the start.",
  },
  {
    q: 'What do I need to provide to get started?',
    a: "Just bring your existing resume (or a summary of your experience), your career goals, and any references or examples you love. We handle the rest.",
  },
  {
    q: 'How many revision rounds are included?',
    a: "All projects include at least 2 rounds of revisions. We work collaboratively until you're fully satisfied with the results.",
  },
  {
    q: 'Is everything done remotely?',
    a: 'Yes! We work with clients globally. All consultations, deliveries, and communication happen online via Zoom, WhatsApp, or email — fully remote and hassle-free.',
  },
];

/* ─── Floating Particle ─── */
function Particle({ x, y, size, delay, color }: { x: number; y: number; size: number; delay: number; color: string }) {
  return (
    <motion.div
      className={styles.particle}
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.8, 0],
        scale: [0.5, 1.2, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

/* ─── Animated SVG Path ─── */
function Web3Path({ progress }: { progress: number }) {
  return (
    <svg
      className={styles.svgPath}
      viewBox="0 0 100 800"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Static faded background path */}
      <path
        d="M50 0 C50 0, 10 100, 50 200 C90 300, 10 400, 50 500 C90 600, 10 700, 50 800"
        stroke="rgba(124,58,237,0.12)"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
      {/* Animated glowing path */}
      <motion.path
        d="M50 0 C50 0, 10 100, 50 200 C90 300, 10 400, 50 500 C90 600, 10 700, 50 800"
        stroke="url(#pathGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: progress, opacity: progress > 0.05 ? 1 : 0 }}
        transition={{ duration: 0.05, ease: 'linear' }}
      />
      {/* Node dots along the path */}
      {[0, 0.25, 0.5, 0.75, 1].map((pos, i) => (
        <motion.circle
          key={i}
          cx="50"
          cy={pos * 800}
          r="4"
          fill="rgba(124,58,237,0.4)"
          stroke="rgba(168,85,247,0.6)"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={progress > pos - 0.05 ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      ))}
      <defs>
        <linearGradient id="pathGradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#9333ea" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Step Card ─── */
function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className={`${styles.stepRow} ${isLeft ? styles.stepLeft : styles.stepRight}`} ref={ref}>
      {/* Connector Node */}
      <motion.div
        className={styles.stepNode}
        style={{ borderColor: step.color, boxShadow: `0 0 32px ${step.glow}, 0 0 64px ${step.glow}40` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 200 }}
      >
        <motion.div
          className={styles.stepNodeInner}
          style={{ background: `radial-gradient(circle, ${step.color}33, transparent)` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className={styles.stepNodeNum} style={{ color: step.color }}>{step.number}</span>
      </motion.div>

      {/* Card */}
      <motion.div
        className={styles.stepCard}
        initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
      >
        {/* Card glow */}
        <div className={styles.cardGlowBorder} style={{ background: `linear-gradient(135deg, ${step.color}40, transparent, ${step.color}20)` }} />

        {/* Tag */}
        <div className={styles.stepTag} style={{ color: step.color, borderColor: `${step.color}40`, background: `${step.color}12` }}>
          <Zap size={10} />
          {step.tag}
        </div>

        {/* Icon */}
        <div className={styles.stepIconWrap} style={{ color: step.color, borderColor: `${step.color}30`, background: `${step.color}10` }}>
          <Icon size={28} />
          <motion.div
            className={styles.stepIconGlow}
            style={{ background: step.glow }}
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <h2 className={styles.stepTitle}>{step.title}</h2>
        <p className={styles.stepDesc}>{step.description}</p>

        <ul className={styles.stepPoints}>
          {step.keyPoints.map((pt, pi) => (
            <motion.li
              key={pt}
              className={styles.stepPoint}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + pi * 0.08 }}
            >
              <CheckCircle2 size={14} style={{ color: step.color, flexShrink: 0 }} />
              {pt}
            </motion.li>
          ))}
        </ul>

        {/* Bottom accent line */}
        <motion.div
          className={styles.cardAccentLine}
          style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>
    </div>
  );
}

/* ─── Page ─── */
export default function ProcessPage() {
  const pageRef = useRef(null);
  const timelineRef = useRef(null);
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 4,
      color: ['#8b5cf6', '#a855f7', '#7c3aed', '#c084fc'][Math.floor(Math.random() * 4)],
    }))
  );

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 20%'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [pathProgress, setPathProgress] = useState(0);

  useEffect(() => {
    const unsub = smoothProgress.on('change', (v) => setPathProgress(v));
    return unsub;
  }, [smoothProgress]);

  return (
    <div className={styles.page} ref={pageRef}>
      {/* Ambient background orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Floating particles */}
      <div className={styles.particleField} aria-hidden>
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Grid overlay */}
      <div className={styles.gridOverlay} aria-hidden />

      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div
            className={styles.heroBadge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className={styles.heroBadgeDot}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            How We Work
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Our{' '}
            <span className={styles.heroTitleGlow}>
              4-Step
            </span>
            <br />
            <span className="gradient-text">Growth Protocol</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            A precision-engineered career transformation workflow — from discovery to launch.
            Every step is designed to maximise your professional impact.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: '4', label: 'Clear Steps' },
              { value: '48h', label: 'Avg Response' },
              { value: '2+', label: 'Revision Rounds' },
              { value: '100%', label: 'Remote Friendly' },
            ].map((s) => (
              <div key={s.label} className={styles.heroStat}>
                <span className={styles.heroStatValue}>{s.value}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Timeline ─── */}
      <section className={styles.timelineSection} ref={timelineRef}>
        <div className={styles.timelineContainer}>
          {/* Animated SVG path — center spine */}
          <div className={styles.svgWrap} aria-hidden>
            <Web3Path progress={pathProgress} />
          </div>

          {/* Steps */}
          <div className={styles.stepsWrapper}>
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className={styles.faq}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">FAQs</span>
            <h2 className={`section-title ${styles.faqTitle}`}>Common Questions</h2>
          </motion.div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className={styles.faqCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.35)' }}
              >
                <div className={styles.faqIcon}>
                  <Zap size={16} />
                </div>
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaGlow} />
            <motion.div
              className={styles.ctaOrb}
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="section-label">Start Now</span>
            <h2 className={styles.ctaTitle}>Ready to launch your journey?</h2>
            <p className={styles.ctaSub}>
              The process begins with a single conversation. Let&apos;s talk about your goals and build your next chapter together.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
