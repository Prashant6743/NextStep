'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 3.6) % 100}%`,
  top: `${(i * 7.1) % 100}%`,
  size: 2 + (i % 4),
  delay: `${(i * 0.36) % 5}s`,
  duration: `${4 + (i % 5)}s`,
}));

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.4, 0, 0.2, 1] as const },
  },
});

/* ── Component ── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);

  /* Scroll-driven parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const glassY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const glassRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const glassScale = useTransform(scrollYProgress, [0, 0.5], [1, 1 + 0.08 * 6]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.4]);

  /* Mouse-follow 3D tilt on glass */
  useEffect(() => {
    const el = glassRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const rx = ((e.clientY - cy) / r.height) * -14;
      const ry = ((e.clientX - cx) / r.width) * 14;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    };
    const onLeave = () => {
      el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    };

    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className={styles.hero}
    >
      {/* ── Background Layer ── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: bgOpacity }}>
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.07) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(124,58,237,0.07) 1px,transparent 1px)',
            backgroundSize: '52px 52px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%,black 30%,transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%,black 30%,transparent 100%)',
          }}
        />

        {/* Orbs */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: '-15%', left: '-8%', width: 650, height: 650,
            background: 'radial-gradient(circle,rgba(124,58,237,0.22) 0%,transparent 65%)',
            animation: 'orbFloat1 9s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            bottom: '-15%', right: '-8%', width: 550, height: 550,
            background: 'radial-gradient(circle,rgba(168,85,247,0.18) 0%,transparent 65%)',
            animation: 'orbFloat2 11s ease-in-out infinite',
          }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
            width: 900, height: 900,
            background: 'radial-gradient(circle,rgba(124,58,237,0.06) 0%,transparent 55%)',
          }}
        />
        {/* Extra accent orb */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            top: '20%', right: '15%', width: 350, height: 350,
            background: 'radial-gradient(circle,rgba(192,132,252,0.12) 0%,transparent 60%)',
            animation: 'orbFloat1 13s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* ── Glow Rings (parallax driven) ── */}
      <div
        className="absolute rounded-full pointer-events-none border border-purple-500/20"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 600, height: 600,
          animation: 'glow-ring-pulse 4s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none border border-purple-400/10"
        style={{
          top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 820, height: 820,
          animation: 'glow-ring-pulse 5s ease-in-out infinite 0.5s',
        }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left, top: p.top,
              width: p.size, height: p.size,
              background: 'var(--purple-400)',
              opacity: 0,
              animation: `particleFade ${p.duration} linear infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Liquid Glass 3D Element ── */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{
          top: '50%', left: '50%',
          x: '-50%',
          marginTop: '-350px',
          y: glassY,
          rotate: glassRotate,
          scale: glassScale,
        }}
      >
        <div
          ref={glassRef}
          className="will-change-transform"
          style={{
            transition: 'transform 0.15s ease-out',
            animation: 'glass-shimmer 8s ease-in-out infinite',
          }}
        >
          <Image
            src="/liquid_glass.png"
            alt="Liquid Glass 3D"
            width={700}
            height={700}
            priority
            className="w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[700px] lg:h-[700px] object-contain opacity-25 select-none"
            style={{ filter: 'drop-shadow(0 0 80px rgba(124,58,237,0.35))' }}
          />
        </div>
      </motion.div>

      {/* ── Main Content ── */}
      <motion.div
        className={`container relative z-[2] ${styles.content}`}
        style={{ y: contentY }}
      >
        {/* Headline */}
        <motion.h1
          className="text-[clamp(2.6rem,6.5vw,5rem)] font-extrabold leading-[1.08] tracking-[-0.03em]
                     text-white max-w-[900px] mb-6"
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
        >
          Transform Your{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg,#a855f7 0%,#c084fc 40%,#7c3aed 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease-in-out infinite',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Career Presence
          </span>
          <br />
          <span className="text-[0.65em] font-semibold text-gray-300/80">
            with Nextstep Careers
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className={styles.subheading}
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
        >
          We help students, professionals, freelancers, and creators build powerful
          personal brands, optimized profiles, and professional digital presence.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex items-center gap-3.5 flex-wrap justify-center mb-16 py-5"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="#contact"
            className="btn btn-primary text-base px-8 py-4 rounded-xl"
          >
            <Sparkles size={16} />
            Get Started Free <ArrowRight size={18} />
          </Link>
          <Link
            href="#services"
            className="btn btn-outline text-base px-8 py-4 rounded-xl"
          >
            View Services
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-gray-400
                       hover:text-white transition-all duration-300 group"
          >
            <div
              className="w-[38px] h-[38px] rounded-full flex items-center justify-center
                         bg-purple-500/15 border border-purple-500/30 text-purple-300
                         group-hover:bg-purple-500/25 group-hover:border-purple-400 transition-all duration-300"
            >
              <Play size={13} fill="currentColor" />
            </div>
            See Our Work
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
        >
          {STATS.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className={styles.statCard}
            >
              <div className={styles.statIcon}>
                <Icon size={17} />
              </div>
              <div className={styles.statValue}>
                {value}
              </div>
              <div className={styles.statLabel}>
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Badge */}
        <motion.div
          className={styles.badge}
          style={{ marginTop: -40, marginBottom: 40 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className={styles.badgePulse} />
          Trusted by 500+ Professionals &nbsp;⭐ 4.9 / 5
        </motion.div>

        {/* Trusted-by Ticker */}
        <motion.div
          className="w-full max-w-[700px] flex flex-col items-center gap-3 py-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
            Our clients work at
          </span>
          <div className="w-full overflow-hidden relative">
            {/* Fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#05050a] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#05050a] to-transparent" />
            <div
              className="flex gap-10 whitespace-nowrap"
              style={{ animation: 'ticker-scroll 22s linear infinite' }}
            >
              {CLIENT_LOGOS.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-sm font-semibold text-gray-500/60 tracking-wider uppercase select-none shrink-0"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <div
          className="w-6 h-[38px] rounded-xl border-2 border-purple-500/40 flex justify-center pt-1.5"
        >
          <div
            className="w-1 h-2 rounded-sm bg-purple-400"
            style={{ animation: 'scrollWheel 1.8s ease-in-out infinite' }}
          />
        </div>
        <span className="text-[0.72rem] text-gray-600 uppercase tracking-wider">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
