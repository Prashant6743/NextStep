'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import Link from 'next/link';
import styles from './portfolio.module.css';

const filters = ['All', 'Resumes', 'LinkedIn', 'Websites', 'Branding', 'Portfolios'];

const projects = [
  {
    id: 1,
    title: 'Executive Resume — Finance Professional',
    category: 'Resumes',
    description: 'ATS-optimized resume for a senior finance executive targeting C-suite roles at Fortune 500 companies.',
    tags: ['ATS Optimized', 'Executive', 'Finance'],
    result: '3x more interview callbacks',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
  },
  {
    id: 2,
    title: 'LinkedIn Overhaul — Tech Startup Founder',
    category: 'LinkedIn',
    description: 'Complete profile transformation from 200 connections to 5,000+ with strategic content positioning.',
    tags: ['Founder', 'Tech', 'Personal Brand'],
    result: '+2,400 profile views/week',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
  },
  {
    id: 3,
    title: 'Personal Brand Website — UX Designer',
    category: 'Websites',
    description: 'Stunning portfolio website built with Next.js and GSAP animations, showcasing design case studies.',
    tags: ['Next.js', 'GSAP', 'Portfolio'],
    result: '40% higher client conversion',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
  },
  {
    id: 4,
    title: 'Brand Identity — Freelance Consultant',
    category: 'Branding',
    description: 'Cohesive personal branding package: logo, color palette, typography, and social media kit.',
    tags: ['Logo Design', 'Brand Kit', 'Freelancer'],
    result: 'Premium brand authority',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  },
  {
    id: 5,
    title: 'Digital Portfolio — Software Engineer',
    category: 'Portfolios',
    description: 'Interactive project showcase for a full-stack developer with live demos and GitHub integrations.',
    tags: ['Interactive', 'Developer', 'Full-Stack'],
    result: 'Landed FAANG offer',
    gradient: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
  },
  {
    id: 6,
    title: 'Career Resume — Marketing Manager',
    category: 'Resumes',
    description: 'Visually striking yet ATS-friendly resume that highlights campaign results and ROI metrics.',
    tags: ['Marketing', 'Data-Driven', 'ATS'],
    result: '2 offers in 3 weeks',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #c084fc 100%)',
  },
  {
    id: 7,
    title: 'LinkedIn Strategy — HR Recruiter',
    category: 'LinkedIn',
    description: 'Strategic positioning as a top HR thought leader with a content calendar and engagement plan.',
    tags: ['HR', 'Thought Leader', 'Strategy'],
    result: '5x connection requests',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  },
  {
    id: 8,
    title: 'Agency Website — Digital Marketing Firm',
    category: 'Websites',
    description: 'High-conversion agency site with lead funnels, service showcases, and CRM integrations.',
    tags: ['Agency', 'High-Conversion', 'CRM'],
    result: '3x lead generation',
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #7c3aed 100%)',
  },
  {
    id: 9,
    title: 'Creator Brand Identity — Content Creator',
    category: 'Branding',
    description: 'Cohesive brand for a YouTube creator: channel art, thumbnails, and cross-platform brand consistency.',
    tags: ['Creator', 'YouTube', 'Social Media'],
    result: 'Sponsorships unlocked',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #ec4899 100%)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: { opacity: 0, scale: 0.92, y: -10, transition: { duration: 0.3 } },
};

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: '-60px' });

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className={styles.page}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Work
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work That <span className="gradient-text">Speaks</span> for Itself
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real projects, real results. Explore how we've helped students, professionals, and founders grow their careers.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${active === f ? styles.filterBtnActive : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className={styles.grid} ref={gridRef}>
        <div className="container">
          <motion.div
            className={styles.cardsGrid}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  className={styles.card}
                  variants={cardVariants}
                  layout
                >
                  {/* Visual Banner */}
                  <div className={styles.cardBanner} style={{ background: project.gradient }}>
                    <span className={styles.cardCategory}>{project.category}</span>
                    <div className={styles.cardResult}>
                      <Sparkles size={13} />
                      {project.result}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDesc}>{project.description}</p>
                    <div className={styles.cardTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <Link href="/#contact" className={styles.cardCta}>
                      Start Similar Project <ExternalLink size={14} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>Ready to be our next success story?</h2>
            <p className={styles.ctaSub}>
              Join hundreds of professionals who transformed their careers with Nextstep Careers.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/#contact" className="btn btn-primary">
                Get Started <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
