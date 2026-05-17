'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FileText, Play, Briefcase, MessageSquare, ArrowRight, ExternalLink, Sparkles, TrendingUp, BarChart } from 'lucide-react';
import styles from './ProofOfWork.module.css';

const linkedInImages = [
  '/Testimonals/linkdin/1l.jpeg',
  '/Testimonals/linkdin/2l.jpeg',
  '/Testimonals/linkdin/3l.jpeg',
  '/Testimonals/linkdin/4l.jpeg',
  '/Testimonals/linkdin/5l.jpeg',
];

export default function ProofOfWork() {
  const [activeResume, setActiveResume] = useState<'anshika' | 'shree'>('anshika');
  const [resumeState, setResumeState] = useState<'before' | 'after'>('after');

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.section} id="testimonials" ref={ref}>
      <div className={styles.bgGlow} />

      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Proven Results</span>
          <h2 className={styles.title}>
            We Don&apos;t Just Talk. <span className="gradient-text">We Deliver.</span>
          </h2>
          <p className={styles.sub}>
            Real transformations, real metrics, and real growth across resumes, social media, and personal brands.
          </p>
        </motion.div>

        <div className={styles.bentoGrid}>

          {/* ── LinkedIn Growth ── */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardLinkedin}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.platformTag} style={{ color: '#3b82f6', background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}>
                <Briefcase size={14} /> LinkedIn Optimisation
              </div>
              <h3 className={styles.cardTitle}>Massive Growth in 2 Weeks</h3>
            </div>

            <div className={styles.liGallery}>
              <div className={styles.liTrack}>
                {[...linkedInImages, ...linkedInImages].map((src, i) => (
                  <div key={i} className={styles.liImgWrap}>
                    <Image src={src} alt="LinkedIn Result" fill className={styles.liImg} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── YouTube Growth ── */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardYoutube}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.platformTag} style={{ color: '#ef4444', background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.2)' }}>
                <Play size={14} /> YouTube Growth
              </div>
              <h3 className={styles.cardTitle}>3.6K Subs in 15 Days</h3>
            </div>
            <div className={styles.ytContent}>
              <div className={styles.ytImgWrap}>
                <Image src="/Testimonals/1yt.png" alt="YouTube Growth" fill className={styles.ytImg} />
                <div className={styles.ytOverlay}>
                  <TrendingUp size={32} color="#22c55e" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Twitter/X Success ── */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardTwitter}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.twGlow} />
            <div className={styles.cardHeader}>
              <div className={styles.platformTag} style={{ color: '#e5e7eb', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <MessageSquare size={14} /> Personal Branding
              </div>
              <h3 className={styles.cardTitle}>Viral Profile Optimisation</h3>
              <p className={styles.cardDesc}>
                Client results after our personal branding expert optimised their profile and promoted it.
              </p>
            </div>
            <a href="https://x.com/vishaaakhaaa?s=21" target="_blank" rel="noopener noreferrer" className={styles.twLink}>
              View Live Profile <ExternalLink size={16} />
            </a>
          </motion.div>

          {/* ── Resume Transformations ── */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardResume}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.platformTag} style={{ color: '#a855f7', background: 'rgba(168,85,247,0.1)', borderColor: 'rgba(168,85,247,0.2)' }}>
                <FileText size={14} /> ATS Resume Rewrite
              </div>
              <h3 className={styles.cardTitle}>Before vs After</h3>

              <div className={styles.resumeControls}>
                <div className={styles.tabs}>
                  <button
                    className={`${styles.tab} ${activeResume === 'anshika' ? styles.tabActive : ''}`}
                    onClick={() => setActiveResume('anshika')}
                  >
                    Anshika
                  </button>
                  <button
                    className={`${styles.tab} ${activeResume === 'shree' ? styles.tabActive : ''}`}
                    onClick={() => setActiveResume('shree')}
                  >
                    Shree Durga
                  </button>
                </div>
                <div className={styles.toggleWrap}>
                  <button
                    className={`${styles.toggleBtn} ${resumeState === 'before' ? styles.toggleActive : ''}`}
                    onClick={() => setResumeState('before')}
                  >
                    Before
                  </button>
                  <button
                    className={`${styles.toggleBtn} ${resumeState === 'after' ? styles.toggleActive : ''} ${styles.afterBtn}`}
                    onClick={() => setResumeState('after')}
                  >
                    <Sparkles size={12} /> After
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.resumeDisplay}>
              {activeResume === 'anshika' && resumeState === 'before' && (
                <a href="/Testimonals/Anshika_CV-1.docx" className={styles.docLink} download>
                  <FileText size={40} opacity={0.5} />
                  <span>Anshika_CV_Old.docx</span>
                  <span className={styles.downloadText}>Download Original</span>
                </a>
              )}
              {activeResume === 'anshika' && resumeState === 'after' && (
                <a href="/Testimonals/Anshika_Jaiswal_ATS_Resume.pdf" target="_blank" className={`${styles.docLink} ${styles.docLinkAfter}`}>
                  <FileText size={40} color="#a855f7" />
                  <span>Anshika_Jaiswal_ATS.pdf</span>
                  <span className={styles.downloadText}>View Transformed PDF</span>
                </a>
              )}

              {activeResume === 'shree' && resumeState === 'before' && (
                <a href="/Testimonals/Resume (3)-1.pdf" target="_blank" className={styles.docLink}>
                  <FileText size={40} opacity={0.5} />
                  <span>Shree_Durga_Old.pdf</span>
                  <span className={styles.downloadText}>View Original</span>
                </a>
              )}
              {activeResume === 'shree' && resumeState === 'after' && (
                <a href="/Testimonals/Shree_Durga_Kalyanaraman_Resume.pdf" target="_blank" className={`${styles.docLink} ${styles.docLinkAfter}`}>
                  <FileText size={40} color="#a855f7" />
                  <span>Shree_Durga_ATS.pdf</span>
                  <span className={styles.downloadText}>View Transformed PDF</span>
                </a>
              )}
            </div>
          </motion.div>

          {/* ── Weekly Reports ── */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardReport}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.reportContent}>
              <div className={styles.cardHeader}>
                <div className={styles.platformTag} style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.2)' }}>
                  <BarChart size={14} /> Weekly Analytics
                </div>
                <h3 className={styles.cardTitle}>Data-Driven Growth</h3>
                <p className={styles.cardDesc}>
                  We create detailed performance reports every week. You'll never be in the dark—we track exactly how your account is performing and adapt our strategy in real time.
                </p>
              </div>
            </div>
            <div className={styles.reportImgWrap}>
              <Image src="/Testimonals/report.png" alt="Weekly Analytics Report" fill className={styles.reportImg} />
            </div>
          </motion.div>

          {/* ── Strategy Docs ── */}
          <motion.div
            className={`${styles.bentoCard} ${styles.cardStrategy}`}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className={styles.reportContent}>
              <div className={styles.cardHeader}>
                <div className={styles.platformTag} style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.2)' }}>
                  <FileText size={14} /> Comprehensive Strategy
                </div>
                <h3 className={styles.cardTitle}>Custom Strategy Docs</h3>
                <p className={styles.cardDesc}>
                  Before we execute, we prepare tailored strategy documents outlining our exact plan, content pillars, and goals for your brand's growth.
                </p>
              </div>
            </div>
            <div className={styles.reportImgWrap}>
              <Image src="/Testimonals/stategy_report.png" alt="Strategy Document" fill className={styles.reportImg} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
