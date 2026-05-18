'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  FileText, Link2, Star, Globe, Monitor,
  BookOpen, Users, PenTool, ArrowRight, Zap,
  Sparkles, ChevronRight, Images,
} from 'lucide-react';
import Link from 'next/link';
import NextImage from 'next/image';
import styles from './services.module.css';

/* ─── Services Data ─── */
const services = [
  {
    icon: FileText,
    title: 'ATS-Friendly Resume Creation',
    description:
      'We craft resumes that pass Applicant Tracking Systems and impress recruiters — tailored to your industry and target role with precision keyword strategy.',
    tags: ['ATS Optimized', 'Recruiter-Ready', 'Industry-Specific'],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.45)',
    badge: 'Most Popular',
    stat: '3x more callbacks',
  },
  {
    icon: Link2,
    title: 'LinkedIn Profile Optimization',
    description:
      'Transform your LinkedIn into a powerful personal brand magnet. We optimize every section to increase visibility, recruiter reach, and profile authority.',
    tags: ['SEO Strategy', 'All-Star Profile', 'Thought Leader'],
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.45)',
    badge: '',
    stat: '+2,400 views/week',
  },
  {
    icon: Star,
    title: 'Personal Branding',
    description:
      'Define your unique professional identity. We help you stand out online and offline with a consistent, compelling brand narrative that builds lasting authority.',
    tags: ['Brand Strategy', 'Narrative Design', 'Authority Building'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.45)',
    badge: '',
    stat: 'Premium positioning',
  },
  {
    icon: Globe,
    title: 'Portfolio Creation',
    description:
      'Showcase your skills and achievements with a stunning digital portfolio that speaks louder than any resume — built to impress and convert.',
    tags: ['Interactive', 'Case Studies', 'Project Showcase'],
    color: '#9333ea',
    glow: 'rgba(147,51,234,0.45)',
    badge: '',
    stat: '40% higher conversions',
  },
  {
    icon: Monitor,
    title: 'Website Creation',
    description:
      'From personal sites to full professional platforms — we design and develop beautiful, fast, SEO-ready websites tailored to your brand and goals.',
    tags: ['Next.js', 'SEO-Ready', 'Mobile Optimized'],
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.45)',
    badge: 'High Demand',
    stat: 'Lightning-fast delivery',
  },
  {
    icon: BookOpen,
    title: 'Career Guidance & Mentorship',
    description:
      'Personalized one-on-one career mentorship from industry-aligned professionals who understand the modern job market and what top employers want.',
    tags: ['1:1 Mentorship', 'Industry Insights', 'Career Mapping'],
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.45)',
    badge: '',
    stat: 'Offers in 3 weeks',
  },
  {
    icon: Users,
    title: 'Client Acquisition Guidance',
    description:
      'For freelancers and founders — learn proven, battle-tested strategies to attract, convert, and retain high-value clients on a consistent basis.',
    tags: ['Sales Strategy', 'Lead Generation', 'Retention'],
    color: '#7c3aed',
    glow: 'rgba(124,58,237,0.45)',
    badge: '',
    stat: '5x client pipeline',
  },
  {
    icon: PenTool,
    title: 'Ghostwriting & Content Support',
    description:
      'We write thought-leadership articles, LinkedIn posts, bios, and professional copy that builds your authority, drives engagement, and positions you as an expert.',
    tags: ['LinkedIn Content', 'Thought Leadership', 'Ghost Writing'],
    color: '#9333ea',
    glow: 'rgba(147,51,234,0.45)',
    badge: '',
    stat: '10x engagement lift',
  },
];

/* ─── Gallery images ─── */
const galleryImages = [
  { id: 1, src: '/services_img/1.png', label: 'Resume Design' },
  { id: 2, src: '/services_img/2.png', label: 'LinkedIn Optimization' },
  { id: 3, src: '/services_img/3.png', label: 'Personal Branding' },
  { id: 4, src: '/services_img/4.png', label: 'Portfolio Creation' },
  { id: 5, src: '/services_img/5.png', label: 'Website Creation' },
  { id: 6, src: '/services_img/6.png', label: 'Career Guidance' },
  { id: 7, src: '/services_img/7.png', label: 'Client Acquisition' },
  { id: 8, src: '/services_img/8.png', label: 'Ghostwriting' },
];

/* ─── Floating Particle ─── */
function Particle({ x, y, size, delay, color }: { x: number; y: number; size: number; delay: number; color: string }) {
  return (
    <motion.div
      className={styles.particle}
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: color }}
      animate={{ y: [0, -28, 0], opacity: [0, 0.7, 0], scale: [0.5, 1.2, 0.5] }}
      transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

/* ─── Service Card ─── */
function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = svc.icon;

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      {/* Glow border on hover */}
      <div className={styles.cardGlowBorder} style={{ background: `linear-gradient(135deg, ${svc.color}35, transparent 60%, ${svc.color}20)` }} />

      {/* Badge */}
      {svc.badge && (
        <div className={styles.cardBadge} style={{ color: svc.color, borderColor: `${svc.color}40`, background: `${svc.color}12` }}>
          <Sparkles size={10} /> {svc.badge}
        </div>
      )}

      {/* Icon */}
      <div className={styles.cardIcon} style={{ color: svc.color, borderColor: `${svc.color}30`, background: `${svc.color}0f` }}>
        <Icon size={26} />
        <motion.div
          className={styles.cardIconGlow}
          style={{ background: svc.glow }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
        />
      </div>

      {/* Content */}
      <h3 className={styles.cardTitle}>{svc.title}</h3>
      <p className={styles.cardDesc}>{svc.description}</p>

      {/* Tags */}
      <div className={styles.cardTags}>
        {svc.tags.map((tag) => (
          <span key={tag} className={styles.tag} style={{ color: svc.color, borderColor: `${svc.color}35`, background: `${svc.color}0d` }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Stat pill */}
      <div className={styles.cardStat}>
        <Zap size={12} style={{ color: svc.color }} />
        <span>{svc.stat}</span>
      </div>

      {/* CTA */}
      <Link href="/contact" className={styles.cardCta} style={{ color: svc.color }}>
        Get Started <ChevronRight size={15} />
      </Link>

      {/* Bottom accent */}
      <motion.div
        className={styles.cardAccent}
        style={{ background: `linear-gradient(90deg, ${svc.color}, ${svc.color}00)` }}
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.3 + (index % 3) * 0.1 }}
      />
    </motion.div>
  );
}

/* ─── Marquee Track ─── */
function MarqueeTrack({
  items,
  reverse = false,
  duration = 35,
  cardH = 200,
  cardW = 280,
}: {
  items: typeof galleryImages;
  reverse?: boolean;
  duration?: number;
  cardH?: number;
  cardW?: number;
}) {
  const tripled = [...items, ...items, ...items];
  const from = reverse ? `-${100 / 3}%` : '0%';
  const to   = reverse ? '0%' : `-${100 / 3}%`;
  return (
    <div className={styles.marqueeTrack} style={{ height: cardH }}>
      <motion.div
        className={styles.marqueeInner}
        animate={{ x: [from, to] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      >
        {tripled.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className={styles.galleryCard}
            style={{ width: cardW, height: cardH }}
          >
            <NextImage
              src={item.src}
              alt={item.label}
              fill
              className={styles.galleryImg}
              sizes={`${cardW}px`}
            />
            <div className={styles.galleryOverlay}>
              <span className={styles.galleryLabel}>{item.label}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Page ─── */
export default function ServicesPage() {
  const heroRef = useRef(null);
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 4,
      color: ['#8b5cf6', '#a855f7', '#7c3aed', '#c084fc'][Math.floor(Math.random() * 4)],
    }))
  );

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className={styles.page}>
      {/* Background */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />
      <div className={styles.gridOverlay} aria-hidden />
      <div className={styles.particleField} aria-hidden>
        {particles.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      {/* ─── Hero ─── */}
      <section className={styles.hero} ref={heroRef}>
        <motion.div className={`container ${styles.heroInner}`} style={{ y: heroY, opacity: heroOpacity }}>
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
            What We Offer
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Services Built for{' '}
            <span className={styles.heroTitleGlow}>Career</span>
            <br />
            <span className="gradient-text">Transformation</span>
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            End-to-end career growth solutions — from your resume to your entire digital presence.
            Every service precision-crafted to maximise your professional impact.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link href="/contact" className="btn btn-primary">
              Book Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn btn-outline">
              View Gallery <Images size={15} />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.heroStats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {[
              { value: '8+', label: 'Core Services' },
              { value: '200+', label: 'Clients Served' },
              { value: '95%', label: 'Satisfaction Rate' },
              { value: '48h', label: 'Avg Turnaround' },
            ].map((s) => (
              <div key={s.label} className={styles.heroStat}>
                <span className={styles.heroStatValue}>{s.value}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className={styles.servicesSection}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Services</span>
            <h2 className={styles.sectionTitle}>
              Everything You Need to <span className="gradient-text">Grow</span>
            </h2>
            <p className={styles.sectionSub}>
              Each service is designed with one goal: turning your professional potential into undeniable results.
            </p>
          </motion.div>

          <div className={styles.cardsGrid}>
            {services.map((svc, i) => (
              <ServiceCard key={svc.title} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Marquee ─── */}
      <section className={styles.gallerySection} id="gallery">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Our Work Gallery</span>
            <h2 className={styles.sectionTitle}>
              Results That <span className="gradient-text">Speak</span>
            </h2>
            <p className={styles.sectionSub}>
              A curated showcase of resumes, portfolios, websites, and brand transformations
              crafted by the Nextstep Careers team.
            </p>
          </motion.div>
        </div>

        {/* 3-row angled marquee */}
        <div className={styles.marqueeStage}>
          {/* Top fade */}
          <div className={styles.stageFadeTop} />
          <div className={styles.stageFadeBottom} />
          <div className={styles.marqueeFade} />
          <div className={styles.marqueeFadeRight} />

          <div className={styles.marqueeRows}>
            {/* Row 1 – large cards, slow, left */}
            <div className={styles.marqueeRowWrap} style={{ transform: 'rotate(-2.5deg)', marginBottom: '16px' }}>
              <MarqueeTrack items={galleryImages} duration={40} cardH={220} cardW={320} />
            </div>
            {/* Row 2 – medium cards, medium, right */}
            <div className={styles.marqueeRowWrap} style={{ transform: 'rotate(0deg)', marginBottom: '16px' }}>
              <MarqueeTrack items={[...galleryImages].reverse()} reverse duration={30} cardH={180} cardW={240} />
            </div>
            {/* Row 3 – small cards, fast, left */}
            <div className={styles.marqueeRowWrap} style={{ transform: 'rotate(2.5deg)' }}>
              <MarqueeTrack items={galleryImages.slice(2)} duration={22} cardH={150} cardW={200} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
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
            <Sparkles size={32} className={styles.ctaIcon} />
            <span className="section-label" style={{ position: 'relative', zIndex: 1 }}>Get Started</span>
            <h2 className={styles.ctaTitle}>Not sure which service is right for you?</h2>
            <p className={styles.ctaSub}>
              Book a free 15-minute consultation and we&apos;ll guide you to the perfect solution tailored to your goals.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">
                Book Free Consultation <ArrowRight size={16} />
              </Link>
              <Link href="/process" className="btn btn-outline">
                See Our Process
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
