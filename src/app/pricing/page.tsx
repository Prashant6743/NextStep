'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import {
  Check, Zap, Star, Crown, ArrowRight,
  ChevronDown, Sparkles, Shield, Rocket, Plus,
} from 'lucide-react';
import Link from 'next/link';
import styles from './pricing.module.css';

/* ─── Plans ─── */
const plans = [
  {
    id: 'starter',
    name: 'Starter',
    icon: Zap,
    tagline: 'Launch your career foundation',
    price: '₹2,999',
    usd: '~$36',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.4)',
    popular: false,
    coverage: 45,
    features: [
      { text: 'ATS-Optimised Resume (1 role)', highlight: false },
      { text: 'Professional Summary Rewrite', highlight: false },
      { text: 'Keyword Optimisation', highlight: false },
      { text: '2 Revision Rounds', highlight: false },
      { text: 'PDF + Word Format', highlight: false },
      { text: 'Delivery in 3–5 days', highlight: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    icon: Star,
    tagline: 'Your complete digital presence',
    price: '₹7,999',
    usd: '~$97',
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.55)',
    popular: true,
    coverage: 72,
    features: [
      { text: 'Everything in Starter', highlight: true },
      { text: 'LinkedIn Profile Optimisation', highlight: false },
      { text: 'Personal Brand Strategy', highlight: false },
      { text: 'Cover Letter Template', highlight: false },
      { text: '3 Revision Rounds', highlight: false },
      { text: '1:1 Strategy Call (30 min)', highlight: true },
      { text: 'Delivery in 5–7 days', highlight: false },
    ],
  },
  {
    id: 'elite',
    name: 'Elite',
    icon: Crown,
    tagline: 'Full career transformation suite',
    price: '₹14,999',
    usd: '~$181',
    color: '#9333ea',
    glow: 'rgba(147,51,234,0.45)',
    popular: false,
    coverage: 100,
    features: [
      { text: 'Everything in Growth', highlight: true },
      { text: 'Portfolio Website (5 pages)', highlight: false },
      { text: 'Ghostwriting (4 LinkedIn posts)', highlight: false },
      { text: 'Client Acquisition Playbook', highlight: false },
      { text: 'Unlimited Revisions (30 days)', highlight: true },
      { text: '1:1 Mentorship (60 min)', highlight: true },
      { text: 'Priority delivery in 7–10 days', highlight: false },
    ],
  },
];

const addOns = [
  { icon: Star, name: 'Extra LinkedIn Post', price: '₹499' },
  { icon: Zap, name: 'Additional Revision Round', price: '₹299' },
  { icon: Rocket, name: 'Rush Delivery (48h)', price: '₹999' },
  { icon: Shield, name: 'Career Guidance Session (60 min)', price: '₹1,499' },
  { icon: Sparkles, name: 'Personal Brand Audit', price: '₹799' },
  { icon: Crown, name: 'Custom Website Page', price: '₹2,499' },
];

const faqs = [
  { q: 'Is there a free consultation?', a: 'Yes! We offer a free 15-minute discovery call to understand your goals and recommend the right plan before you commit to anything.' },
  { q: 'What if I need something custom?', a: "We love custom work. Reach out via WhatsApp or email and we'll craft a personalised package that fits your exact needs and budget." },
  { q: 'How are payments processed?', a: 'We accept UPI, bank transfer, and international card payments. A 50% advance secures your slot; the rest is due on delivery.' },
  { q: 'What if I am not satisfied?', a: "We work through revision rounds until you're 100% happy. All plans include revision rounds and we've never left a client unsatisfied." },
  { q: 'How long does delivery take?', a: 'Timelines are listed per plan. Rush delivery (48h) is available as an add-on. We always communicate clearly on timelines before starting.' },
];

/* ─── Scanning beam ─── */
function ScanBeam() {
  return (
    <motion.div
      className={styles.scanBeam}
      animate={{ x: ['-100%', '200%'] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
    />
  );
}

/* ─── Hex background pattern ─── */
function HexGrid() {
  return <div className={styles.hexGrid} aria-hidden />;
}

/* ─── Floating 3D PNG ─── */
function FloatPng({
  src, alt, className, delay = 0, rotateRange = 8, scale = 1,
}: {
  src: string; alt: string; className: string;
  delay?: number; rotateRange?: number; scale?: number;
}) {
  return (
    <motion.div
      className={`${styles.floatPng} ${className}`}
      style={{ scale }}
      animate={{
        y: [0, -18, 0],
        rotate: [-rotateRange / 2, rotateRange / 2, -rotateRange / 2],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
    </motion.div>
  );
}

/* ─── Plan Card ─── */
function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = plan.icon;

  return (
    <motion.div
      ref={ref}
      className={`${styles.planCard} ${plan.popular ? styles.planPopular : ''}`}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={inView ? {
        opacity: 1,
        y: plan.popular ? -20 : 0,
        scale: plan.popular ? 1.04 : 1,
      } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: plan.popular ? -26 : -8, transition: { duration: 0.25 } }}
    >
      <div className={styles.planCardInner}>
        {/* Scanning beam on popular */}
        {plan.popular && <ScanBeam />}

        {/* Popular floating 3D knot above popular card */}
        {plan.popular && (
          <motion.div
            className={styles.cardFloatImg}
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image src="/pngs/3.png" alt="Popular plan" fill style={{ objectFit: 'contain' }} />
          </motion.div>
        )}

        {/* Popular ribbon */}
        {plan.popular && (
          <div className={styles.popularRibbon} style={{ background: `linear-gradient(90deg, ${plan.color}, #c084fc)` }}>
            <Sparkles size={11} /> Most Popular
          </div>
        )}

        {/* Plan icon + name */}
        <div className={styles.planTop}>
          <div className={styles.planIconRing} style={{ borderColor: `${plan.color}50`, boxShadow: `0 0 20px ${plan.glow}` }}>
            <div className={styles.planIconInner} style={{ background: `${plan.color}15`, color: plan.color }}>
              <Icon size={22} />
            </div>
            <motion.div
              className={styles.planIconOrbit}
              style={{ borderColor: `${plan.color}40` }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <div className={styles.planIconOrbitDot} style={{ background: plan.color }} />
            </motion.div>
          </div>
          <div>
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.planTagline}>{plan.tagline}</p>
          </div>
        </div>

        {/* Price */}
        <div className={styles.planPrice}>
          <span className={styles.planPriceMain} style={{ color: plan.popular ? plan.color : 'var(--white)' }}>
            {plan.price}
          </span>
          <span className={styles.planPriceUsd}>{plan.usd}</span>
        </div>

        {/* Coverage bar */}
        <div className={styles.coverageWrap}>
          <div className={styles.coverageLabel}>
            <span>Value Coverage</span>
            <span style={{ color: plan.color }}>{plan.coverage}%</span>
          </div>
          <div className={styles.coverageTrack}>
            <motion.div
              className={styles.coverageFill}
              style={{ background: `linear-gradient(90deg, ${plan.color}80, ${plan.color})` }}
              initial={{ width: 0 }}
              animate={inView ? { width: `${plan.coverage}%` } : {}}
              transition={{ duration: 1.2, delay: 0.5 + index * 0.12, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className={styles.planDivider} style={{ background: `linear-gradient(90deg, ${plan.color}50, transparent)` }} />

        {/* Features */}
        <ul className={styles.planFeatures}>
          {plan.features.map((f, fi) => (
            <motion.li
              key={f.text}
              className={`${styles.planFeature} ${f.highlight ? styles.planFeatureHighlight : ''}`}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.4 + fi * 0.06 }}
            >
              <div
                className={styles.checkDot}
                style={{ background: `${plan.color}20`, borderColor: `${plan.color}50`, color: plan.color }}
              >
                <Check size={10} />
              </div>
              <span style={f.highlight ? { color: 'var(--white)', fontWeight: 600 } : {}}>
                {f.text}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className={`${styles.planCta} ${plan.popular ? styles.planCtaPopular : ''}`}
          style={plan.popular
            ? { boxShadow: `0 8px 28px ${plan.glow}` }
            : { borderColor: `${plan.color}45`, color: plan.color }
          }
        >
          Get Started <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Accordion FAQ ─── */
function FaqItem({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
    >
      <button className={styles.faqTrigger} onClick={() => setOpen(o => !o)}>
        <span className={styles.faqQ}>{faq.q}</span>
        <motion.div
          className={styles.faqChevron}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p className={styles.faqA}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Page ─── */
export default function PricingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className={styles.page}>
      <HexGrid />
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* ─── Hero ─── */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroLayout}>
          {/* Left — text */}
          <div className={styles.heroText}>
            <motion.div
              className={styles.heroBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className={styles.heroBadgePing}
                animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Sparkles size={13} />
              Transparent Pricing
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              One Investment.
              <br />
              <span className="gradient-text">Infinite Returns.</span>
            </motion.h1>

            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              No subscriptions. No hidden fees. Just a single, strategic investment
              in your career that compounds for years to come.
            </motion.p>

            <motion.div
              className={styles.guaranteeChip}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <Shield size={14} />
              Satisfaction guaranteed · Free consultation · Revision rounds included
            </motion.div>
          </div>

          {/* Right — hero 3D sculpture (png 1: DNA spiral) */}
          <motion.div
            className={styles.heroImgWrap}
            style={{ y: heroImgY }}
            initial={{ opacity: 0, x: 60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Glow halo behind image */}
            <div className={styles.heroImgGlow} />
            <motion.div
              className={styles.heroImgInner}
              animate={{ y: [0, -20, 0], rotate: [-3, 3, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/pngs/1.png"
                alt="3D Glass Sculpture"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating splash accent (png 2) — bottom left */}
        <motion.div
          className={styles.heroAccentL}
          animate={{ y: [0, -14, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image src="/pngs/2.png" alt="Liquid accent" fill style={{ objectFit: 'contain' }} />
        </motion.div>
      </section>

      {/* ─── Plans ─── */}
      <section className={styles.plansSection}>
        <div className={styles.plansContainer}>
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        <motion.p
          className={styles.customNote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Need something bespoke?{' '}
          <Link href="/contact" className={styles.customLink}>
            Let&apos;s build a custom plan <ArrowRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
          </Link>
        </motion.p>
      </section>

      {/* ─── Divider sculpture (png 5: S-spiral) ─── */}
      <div className={styles.dividerSculpture}>
        <div className={styles.dividerLine} />
        <motion.div
          className={styles.dividerImg}
          animate={{ y: [0, -12, 0], rotate: [-6, 6, -6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Image src="/pngs/5.png" alt="Spiral sculpture" fill style={{ objectFit: 'contain' }} />
        </motion.div>
        <div className={styles.dividerLine} />
      </div>

      {/* ─── Add-ons ─── */}
      <section className={styles.addOnsSection}>
        <div className={styles.addOnsLayout}>
          {/* Left — terminal */}
          <div className={styles.addOnsContent}>
            <motion.div
              className={styles.sectionHeader}
              style={{ textAlign: 'left' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">À La Carte</span>
              <h2 className={styles.sectionTitle}>
                Power-Up Your <span className="gradient-text">Package</span>
              </h2>
            </motion.div>

            {/* Terminal */}
            <div className={styles.terminalWrap}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={styles.termDot} style={{ background: '#ff5f57' }} />
                  <span className={styles.termDot} style={{ background: '#febc2e' }} />
                  <span className={styles.termDot} style={{ background: '#28c840' }} />
                </div>
                <span className={styles.terminalTitle}>nextstep://add-ons</span>
              </div>
              <div className={styles.terminalBody}>
                {addOns.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <motion.div
                      key={a.name}
                      className={styles.terminalRow}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      whileHover={{ backgroundColor: 'rgba(124,58,237,0.08)' }}
                    >
                      <span className={styles.termRowIndex}>0{i + 1}</span>
                      <Icon size={14} className={styles.termRowIcon} />
                      <span className={styles.termRowName}>{a.name}</span>
                      <span className={styles.termRowPrice}>{a.price}</span>
                      <Link href="/contact" className={styles.termRowAdd}>
                        <Plus size={12} /> Add
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right — ribbon png (4) */}
          <motion.div
            className={styles.addOnsImg}
            animate={{ y: [0, -16, 0], rotate: [-4, 4, -4] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.addOnsImgGlow} />
            <Image src="/pngs/4.png" alt="3D Glass Ribbon" fill style={{ objectFit: 'contain' }} />
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Accordion ─── */}
      <section className={styles.faqSection}>
        <div className={styles.faqLayout}>
          {/* Left — floating curl (png 7) */}
          <motion.div
            className={styles.faqImg}
            animate={{ y: [0, -14, 0], rotate: [4, -4, 4] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.faqImgGlow} />
            <Image src="/pngs/7.png" alt="3D Glass Curl" fill style={{ objectFit: 'contain' }} />
          </motion.div>

          {/* Right — accordion */}
          <div className={styles.faqContent}>
            <motion.div
              className={styles.sectionHeader}
              style={{ textAlign: 'left' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">Pricing FAQs</span>
              <h2 className={styles.sectionTitle}>
                Common <span className="gradient-text">Questions</span>
              </h2>
            </motion.div>

            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} i={i} />
              ))}
            </div>
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
            <ScanBeam />
            <div className={styles.ctaGlow} />

            {/* Floating infinity (png 7) inside CTA */}
            <motion.div
              className={styles.ctaFloatL}
              animate={{ y: [0, -16, 0], rotate: [-8, 8, -8] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image src="/pngs/6.png" alt="" fill style={{ objectFit: 'contain' }} />
            </motion.div>
            <motion.div
              className={styles.ctaFloatR}
              animate={{ y: [0, 14, 0], rotate: [6, -6, 6] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <Image src="/pngs/2.png" alt="" fill style={{ objectFit: 'contain' }} />
            </motion.div>

            <Sparkles size={32} className={styles.ctaIcon} />
            <span className="section-label" style={{ position: 'relative', zIndex: 1 }}>Free Consult</span>
            <h2 className={styles.ctaTitle}>Still unsure? Let&apos;s talk first.</h2>
            <p className={styles.ctaSub}>
              Book a free 15-minute discovery call. We&apos;ll understand your goals
              and recommend the exact plan — no pressure, no commitment.
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
