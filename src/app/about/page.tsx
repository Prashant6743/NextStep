'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import Image from 'next/image';
import {
  Target, Heart, Zap, Globe, Award,
  ArrowRight, TrendingUp, Shield, Sparkles, CheckCircle2, ExternalLink, Monitor, Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import styles from './about.module.css';

/* ─── Data ─── */
const stats = [
  { value: 200, suffix: '+', label: 'Careers Transformed' },
  { value: 95, suffix: '%', label: 'Satisfaction Rate' },
  { value: 3, suffix: 'x', label: 'Callback Increase' },
  { value: 48, suffix: 'h', label: 'Avg Turnaround' },
];

const milestones = [
  { year: '2022', label: 'Founded', desc: 'Born from a belief that every professional deserves a presence that matches their potential.', color: '#8b5cf6' },
  { year: '2023', label: 'Expanded', desc: 'Grew from resume writing to a full-stack career branding studio spanning 5 service verticals.', color: '#a855f7' },
  { year: '2024', label: 'Went Global', desc: 'Served clients across India, UAE, UK, Canada, and the US. Added websites and ghostwriting.', color: '#7c3aed' },
  { year: '2025', label: 'Scale & Impact', desc: 'Crossed 200+ transformations, 5-star reviews, and industry-recognised personal brands.', color: '#c084fc' },
];

const beliefs = [
  { icon: Target, size: 'large', title: 'Precision Over Templates', desc: 'Every deliverable is handcrafted. No generic outputs, ever. We go deep into your story, goals, and target audience to create work that is unmistakably yours.', color: '#8b5cf6' },
  { icon: Heart, size: 'small', title: 'Client-Centric', desc: 'Your goals become our mission.', color: '#a855f7' },
  { icon: Zap, size: 'small', title: 'Results Driven', desc: 'We measure success by yours.', color: '#7c3aed' },
  { icon: Globe, size: 'wide', title: 'Global Mindset', desc: 'We serve professionals from every industry and geography. Your ambitions have no borders — neither do we. Remote, async, always available.', color: '#9333ea' },
  { icon: Shield, size: 'small', title: 'Trust First', desc: 'Transparent process, always.', color: '#c084fc' },
  { icon: TrendingUp, size: 'small', title: 'Growth Focused', desc: 'Everything is built to compound.', color: '#8b5cf6' },
];

const textTicker = ['Resumes', 'LinkedIn Profiles', 'Personal Brands', 'Portfolios', 'Websites', 'Career Stories', 'Digital Identities'];

/* ─── Animated Counter ─── */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Morphing Blob ─── */
function MorphBlob({ color, delay = 0 }: { color: string; delay?: number }) {
  return (
    <motion.div
      className={styles.blob}
      style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
      animate={{
        borderRadius: [
          '60% 40% 70% 30% / 50% 60% 40% 50%',
          '40% 60% 30% 70% / 60% 40% 70% 30%',
          '70% 30% 50% 50% / 30% 70% 50% 50%',
          '60% 40% 70% 30% / 50% 60% 40% 50%',
        ],
        scale: [1, 1.08, 0.95, 1],
      }}
      transition={{ duration: 10 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

/* ─── Ticker ─── */
function TextTicker() {
  const items = [...textTicker, ...textTicker];
  return (
    <div className={styles.tickerWrap}>
      <motion.div
        className={styles.tickerInner}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((t, i) => (
          <span key={i} className={styles.tickerItem}>
            <Sparkles size={14} className={styles.tickerIcon} />
            {t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Bento Cell ─── */
function BeliefCell({ b, i }: { b: typeof beliefs[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = b.icon;

  return (
    <motion.div
      ref={ref}
      className={`${styles.bentoCell} ${styles[`bento_${b.size}`]}`}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -5, scale: 1.01 }}
    >
      <motion.div
        className={styles.bentoCellGlow}
        style={{ background: `radial-gradient(circle at 0% 0%, ${b.color}30, transparent 60%)` }}
      />
      <div className={styles.bentoCellIcon} style={{ color: b.color, borderColor: `${b.color}35`, background: `${b.color}12` }}>
        <Icon size={b.size === 'large' ? 26 : 20} />
        <motion.div
          className={styles.bentoCellIconGlow}
          style={{ background: `${b.color}50` }}
          animate={{ opacity: [0.2, 0.65, 0.2], scale: [1, 1.6, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
        />
      </div>
      <h3 className={styles.bentoCellTitle}>{b.title}</h3>
      <p className={styles.bentoCellDesc}>{b.desc}</p>
      <motion.div
        className={styles.bentoCellLine}
        style={{ background: `linear-gradient(90deg, ${b.color}, transparent)` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 + i * 0.08 }}
      />
    </motion.div>
  );
}

/* ─── Horizontal Timeline Card ─── */
function TimelineCard({ m, i }: { m: typeof milestones[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={styles.timelineCard}
      initial={{ opacity: 0, x: 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className={styles.timelineCardTop}>
        <motion.div
          className={styles.timelineDot}
          style={{ borderColor: m.color, boxShadow: `0 0 18px ${m.color}80` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
        <motion.div
          className={styles.timelineConnector}
          style={{ background: `linear-gradient(90deg, ${m.color}60, transparent)` }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
        />
      </div>
      <div className={styles.timelineCardBody}>
        <span className={styles.timelineYear} style={{ color: m.color }}>{m.year}</span>
        <h3 className={styles.timelineLabel}>{m.label}</h3>
        <p className={styles.timelineDesc}>{m.desc}</p>
      </div>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className={styles.page}>
      {/* Morphing blobs */}
      <div className={styles.blobField}>
        <MorphBlob color="rgba(124,58,237,0.12)" delay={0} />
        <MorphBlob color="rgba(168,85,247,0.09)" delay={3} />
        <MorphBlob color="rgba(192,132,252,0.07)" delay={6} />
      </div>
      <div className={styles.gridOverlay} aria-hidden />

      {/* ─── Hero ─── */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroLayout}>
          {/* Left — typographic text */}
          <motion.div className={styles.heroInner} style={{ y: heroY, opacity: heroOpacity }}>
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={styles.heroBadgePulse}
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className={styles.heroBadgeDot} />
              About Nextstep Careers
            </motion.div>

            <div className={styles.heroTextStack}>
              <motion.div
                className={styles.heroLine1}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                We Build
              </motion.div>

              <div className={styles.heroLine2Wrap}>
                <motion.div
                  className={styles.heroLine2}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className={styles.heroGradText}>Careers</span>
                </motion.div>
              </div>

              <motion.div
                className={styles.heroLine3}
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Not Just <span className={styles.heroStroke}>Resumes</span>
              </motion.div>
            </div>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              Founded on one belief — every professional deserves a digital presence
              as powerful as their potential. We exist to make that a reality.
            </motion.p>

            <motion.div
              className={styles.heroActions}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <Link href="/contact" className="btn btn-primary">
                Work With Us <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-outline">
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — floating 3D sculpture (png 1: DNA spiral) */}
          <motion.div
            className={styles.heroImgWrap}
            style={{ y: heroImgY }}
            initial={{ opacity: 0, x: 60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.heroImgGlow} />
            <motion.div
              className={styles.heroImgInner}
              animate={{ y: [0, -22, 0], rotate: [-4, 4, -4] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/pngs/1.png"
                alt="3D glass spiral sculpture"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Animated Stats Strip ─── */}
      <section className={styles.statsSection}>
        <div className={styles.statsStrip}>
          <div className={styles.statsGlow} />
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className={styles.statValue}>
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                  <motion.div
                    className={styles.statLine}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Text Ticker ─── */}
      <div className={styles.tickerSection}>
        <TextTicker />
      </div>

      {/* ─── Diagonal Mission Section ─── */}
      <section className={styles.missionSection}>
        <div className={styles.missionDiagonal} />
        <div className="container">
          <motion.div
            className={styles.missionInner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.missionLeft}>
              <span className="section-label">Our Mission</span>
              <h2 className={styles.missionTitle}>
                We don&apos;t write <br />
                <span className="gradient-text">resumes.</span>
              </h2>
              <h2 className={styles.missionTitle2}>
                We architect <br /> careers.
              </h2>
            </div>
            <div className={styles.missionRight}>
              <div className={styles.missionText}>
                <p>
                  Every resume, LinkedIn profile, portfolio, and website we build is a{' '}
                  <strong>strategic asset</strong> — engineered to open doors,
                  create opportunities, and position you exactly where you want to be.
                </p>
                <p>
                  We go beyond the surface. We understand your industry, your competition,
                  and the exact signals that make recruiters and clients say{' '}
                  <em>&quot;I need to talk to this person.&quot;</em>
                </p>
              </div>
              <div className={styles.missionChecks}>
                {['Deeply personalised, never templated', 'Data-driven keyword strategy', 'Industry-aligned storytelling', '100% remote, always available'].map((c) => (
                  <div key={c} className={styles.missionCheck}>
                    <CheckCircle2 size={16} className={styles.missionCheckIcon} />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating knot (png 3) — decorative right of mission */}
        <motion.div
          className={styles.missionFloatImg}
          animate={{ y: [0, -18, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/pngs/3.png" alt="" fill style={{ objectFit: 'contain' }} />
        </motion.div>
      </section>

      {/* ─── Horizontal Timeline ─── */}
      <section className={styles.timelineSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Journey</span>
            <h2 className={styles.sectionTitle}>
              How We Got <span className="gradient-text">Here</span>
            </h2>
          </motion.div>
        </div>

        <div className={styles.timelineRail}>
          <div className={styles.timelineRailFadeL} />
          <div className={styles.timelineRailFadeR} />
          <div className={styles.timelineSpine}>
            <motion.div
              className={styles.timelineSpineFill}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
          <div className={styles.timelineCards}>
            {milestones.map((m, i) => (
              <TimelineCard key={m.year} m={m} i={i} />
            ))}
          </div>
        </div>

        {/* Floating S-curl (png 6) beside timeline */}
        <motion.div
          className={styles.timelineFloatImg}
          animate={{ y: [0, -14, 0], rotate: [6, -6, 6] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image src="/pngs/6.png" alt="" fill style={{ objectFit: 'contain' }} />
        </motion.div>
      </section>

      {/* ─── Bento Values Grid ─── */}
      <section className={styles.bentoSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">What Drives Us</span>
            <h2 className={styles.sectionTitle}>
              Core <span className="gradient-text">Beliefs</span>
            </h2>
          </motion.div>
          <div className={styles.bentoGrid}>
            {beliefs.map((b, i) => (
              <BeliefCell key={b.title} b={b} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Work Showcase ─── */}
      <section className={styles.showcaseSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Live Work</span>
            <h2 className={styles.sectionTitle}>
              Built by Us. <span className="gradient-text">Live in the Wild.</span>
            </h2>
            <p className={styles.showcaseSub}>
              Real projects delivered for real clients — see the quality we put into every build.
            </p>
          </motion.div>

          <div className={styles.showcaseGrid}>
            {/* Card 1 — Portfolio */}
            <motion.div
              className={styles.showcaseCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.showcaseCardGlow} style={{ background: 'radial-gradient(circle at 0% 0%, rgba(139,92,246,0.2), transparent 60%)' }} />
              {/* Browser mock */}
              <div className={styles.browserMock}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <div className={styles.browserUrl}>
                    <Monitor size={10} />
                    portfolio-murex-delta-86.vercel.app
                  </div>
                </div>
                <div className={styles.browserScreen}>
                  <div className={styles.screenPlaceholder}>
                    <div className={styles.screenLine} style={{ width: '60%' }} />
                    <div className={styles.screenLine} style={{ width: '85%' }} />
                    <div className={styles.screenLine} style={{ width: '45%' }} />
                    <div className={styles.screenGrid}>
                      <div className={styles.screenBlock} />
                      <div className={styles.screenBlock} />
                      <div className={styles.screenBlock} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className={styles.showcaseInfo}>
                <div className={styles.showcaseTag}>
                  <Briefcase size={12} /> Portfolio Creation
                </div>
                <h3 className={styles.showcaseName}>Tanishq Garg — Portfolio</h3>
                <p className={styles.showcaseDesc}>
                  A clean, modern personal portfolio designed to showcase skills, projects, and experience — built for client-facing credibility and recruiters.
                </p>
                <a
                  href="https://portfolio-murex-delta-86.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.showcaseLink}
                >
                  View Live Site <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>

            {/* Card 2 — Web Dev */}
            <motion.div
              className={styles.showcaseCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.22 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.showcaseCardGlow} style={{ background: 'radial-gradient(circle at 0% 0%, rgba(168,85,247,0.2), transparent 60%)' }} />
              {/* Browser mock */}
              <div className={styles.browserMock}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}>
                    <span style={{ background: '#ff5f57' }} />
                    <span style={{ background: '#febc2e' }} />
                    <span style={{ background: '#28c840' }} />
                  </div>
                  <div className={styles.browserUrl}>
                    <Monitor size={10} />
                    kinshuk.online
                  </div>
                </div>
                <div className={styles.browserScreen}>
                  <div className={styles.screenPlaceholder} style={{ background: 'linear-gradient(160deg, rgba(168,85,247,0.08), rgba(124,58,237,0.04))' }}>
                    <div className={styles.screenLine} style={{ width: '70%' }} />
                    <div className={styles.screenLine} style={{ width: '50%' }} />
                    <div className={styles.screenLine} style={{ width: '90%' }} />
                    <div className={styles.screenGrid}>
                      <div className={styles.screenBlock} style={{ background: 'rgba(168,85,247,0.15)' }} />
                      <div className={styles.screenBlock} style={{ background: 'rgba(168,85,247,0.1)' }} />
                      <div className={styles.screenBlock} style={{ background: 'rgba(168,85,247,0.12)' }} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className={styles.showcaseInfo}>
                <div className={styles.showcaseTag} style={{ color: '#a855f7', borderColor: 'rgba(168,85,247,0.35)', background: 'rgba(168,85,247,0.08)' }}>
                  <Monitor size={12} /> Web Development
                </div>
                <h3 className={styles.showcaseName}>Kinshuk Sharma — Developer Portfolio</h3>
                <p className={styles.showcaseDesc}>
                  A full-featured personal site for a Django &amp; React developer — showcasing open-source work, ML projects, and professional background.
                </p>
                <a
                  href="https://kinshuk.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.showcaseLink}
                  style={{ color: '#a855f7' }}
                >
                  View Live Site <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
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
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.ctaGlow} />
            <MorphBlob color="rgba(124,58,237,0.12)" />

            {/* Floating infinity (png 7) in CTA corners */}
            <motion.div
              className={styles.ctaFloatL}
              animate={{ y: [0, -14, 0], rotate: [-8, 8, -8] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image src="/pngs/7.png" alt="" fill style={{ objectFit: 'contain' }} />
            </motion.div>
            <motion.div
              className={styles.ctaFloatR}
              animate={{ y: [0, 12, 0], rotate: [5, -5, 5] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            >
              <Image src="/pngs/4.png" alt="" fill style={{ objectFit: 'contain' }} />
            </motion.div>

            <Award size={36} className={styles.ctaIcon} />
            <span className="section-label" style={{ position: 'relative', zIndex: 1 }}>Work With Us</span>
            <h2 className={styles.ctaTitle}>Ready to rewrite your story?</h2>
            <p className={styles.ctaSub}>
              Let&apos;s build something remarkable together. Your next career chapter starts with one conversation.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">
                Start Your Journey <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
