'use client';

import { useState, type FormEvent } from 'react';
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
import FAQ, { type FaqData } from '@/components/sections/FAQ/FAQ';
import styles from './contact.module.css';

const contactFaqs: FaqData[] = [
  { q: "Any newsletters or blogs you religiously follow?", a: "Times of India, CNBC, Bloomberg, Al Jazeera, Inshorts" },
  { q: "Favourite LinkedIn/Twitter/IG profiles", a: "Nikhil Kamath, Narendra Modi, Virat Kohli, Mark Cuban" },
  { q: "Your content pillars on LinkedIn, IG, X", a: "Talking about building a D2C brand and scaling businesses" },
  { q: "List/Type of companies / people whom you want to target", a: "Premium buyers, angel investors, multinationals" },
  { q: "How do you want people to know you on all the platforms", a: "Building a premium India-centric brand that feels affordable and achievable" },
  { q: "Something you don't want to talk about on social media", a: "Politics, religion, celebrities, gossip" },
  { q: "How are you unique/different from your closest competitor?", a: "Using premium nylon fabrics with features like UV protection, anti-odour, anti-static, etc." },
  { q: "Your passion/hobbies", a: "Trying new sports, traveling, cars, branding" },
  { q: "People/brands you want to avoid engaging on social media", a: "Politics, religion, celebrities, gossip" },
  { q: "Favourite movies/series", a: "Top Gun, Troy, Pursuit of Happyness, Homeland, Billions" },
  { q: "Books that you read, if at all", a: "Not much into reading books, but enjoy short stories" },
  { q: "What was the hardest decision you have ever taken professionally?", a: "Starting my own brand while managing the family business" },
  { q: "Are you okay creating video content?", a: "Yes, but scripted" },
  { q: "People you get inspired by in your industry", a: "Inspired by Reliance and Warren Buffett" },
  { q: "Which is 1 company that you look upto?", a: "—" },
  { q: "We don't know you at all, tell us about yourself which can help us fit into your shoes", a: "I’m the fourth generation in my family business. Our core business exports products to African countries, which made me realise the power of building a brand. I wanted to explore opportunities in India and build something meaningful here. I love traveling, exploring new ideas, and creating brands." },
  { q: "Your biggest professional challenge currently", a: "Managing two businesses, scaling the brand, and handling investors" },
  { q: "What do you look for in your employees while hiring?", a: "Proactiveness, ownership mentality, and discipline in following processes" },
  { q: "Advice for budding entrepreneurs", a: "Grow at a pace you can afford. Focus on building a sustainable business and avoid wasting investors’ money." },
  { q: "What is the highlight of your journey so far?", a: "Building the brand independently without strong backing or reach" },
  { q: "What is your superpower?", a: "Multitasking" },
  { q: "Share a bit about your company culture", a: "Fresh culture with employee ownership and responsibility" },
  { q: "Share what your top 3 goals for your personal branding", a: "Increase brand visibility with my identity\nConnect with investors and buyers\nBuild a strong family business legacy" },
  { q: "How did you start your journey as an entrepreneur?", a: "Joined my family business to explore new opportunities and build something of my own" }
];

const WHATSAPP_NUMBER = '919606037499';
const CONTACT_EMAIL = 'nextstepcareersai24@gmail.com';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const SERVICES = [
  { value: 'resume', label: 'ATS-Friendly Resume Creation' },
  { value: 'linkedin', label: 'LinkedIn Profile Optimization' },
  { value: 'branding', label: 'Personal Branding' },
  { value: 'portfolio', label: 'Portfolio Creation' },
  { value: 'website', label: 'Website Creation' },
  { value: 'guidance', label: 'Career Guidance & Mentorship' },
  { value: 'acquisition', label: 'Client Acquisition Guidance' },
  { value: 'ghostwriting', label: 'Ghostwriting & Content Support' },
  { value: 'other', label: 'Other Inquiry' },
] as const;

const AUDIENCES = [
  { value: 'student', label: 'Student / Fresher' },
  { value: 'professional', label: 'Working Professional' },
  { value: 'freelancer', label: 'Freelancer' },
  { value: 'creator', label: 'Content Creator' },
  { value: 'founder', label: 'Startup Founder' },
  { value: 'jobseeker', label: 'Job Seeker' },
] as const;

const socials = [
  { icon: Globe, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Send, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Camera, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Play, href: 'https://youtube.com', label: 'YouTube' },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  audience: string;
  service: string;
  message: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  audience: '',
  service: '',
  message: '',
};

function buildWhatsAppMessage(data: FormData): string {
  const serviceLabel =
    SERVICES.find((s) => s.value === data.service)?.label ?? data.service;
  const audienceLabel =
    AUDIENCES.find((a) => a.value === data.audience)?.label ?? data.audience;

  return [
    'Hi Nextstep Careers!',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    `I am a: ${audienceLabel}`,
    `Service: ${serviceLabel}`,
    '',
    'Message:',
    data.message,
  ]
    .filter(Boolean)
    .join('\n');
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const body = encodeURIComponent(buildWhatsAppMessage(form));
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${body}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setSubmitting(false);
    setForm(initialForm);
  };

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
            Get In Touch
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s Build Your <br />
            <span className="gradient-text">Professional Presence</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Fill out the form below and our team will get back to you within 24 hours with a tailored plan for your career growth.
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            {/* Left: Info + Illustration */}
            <motion.div
              className={styles.infoColumn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              {/* Illustration */}
              <motion.div className={styles.illustrationWrap} variants={fadeUp}>
                <Image
                  src="/retro-pc.png"
                  alt="Professional at a desk surrounded by communication icons"
                  width={520}
                  height={520}
                  className={styles.illustration}
                  priority={false}
                />
                <div className={styles.illustrationGlow} aria-hidden />
              </motion.div>

              {/* Quick Info */}
              <motion.div className={styles.infoCard} variants={fadeUp}>
                <h3 className={styles.infoTitle}>Quick Contact</h3>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>
                      <Mail size={20} />
                    </div>
                    <div className={styles.infoDetails}>
                      <h4>Email</h4>
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
                      <p className={styles.infoNote}>
                        We typically reply within 2 hours.
                      </p>
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

            {/* Right: Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <div className={styles.formCard}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSub}>
                  Tell us about your goals and we&apos;ll craft a personalized strategy for you.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={styles.input}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        required
                        autoComplete="name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={styles.input}
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={styles.input}
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        autoComplete="tel"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="audience" className={styles.label}>
                        I am a
                      </label>
                      <select
                        id="audience"
                        name="audience"
                        className={styles.select}
                        value={form.audience}
                        onChange={(e) => update('audience', e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select your profile
                        </option>
                        {AUDIENCES.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="service" className={styles.label}>
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        className={styles.select}
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        required
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {SERVICES.map(({ value, label }) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label htmlFor="message" className={styles.label}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className={styles.textarea}
                        placeholder="Tell us about your current career stage and what you're looking to achieve..."
                        value={form.message}
                        onChange={(e) => update('message', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={submitting}
                  >
                    {submitting ? 'Opening WhatsApp...' : 'Send Message'}
                    <Send size={18} />
                  </button>

                  {submitted && (
                    <p className={styles.successMessage} role="status">
                      Your message is ready in WhatsApp. Send it there to reach our team!
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={contactFaqs} title="Personal Branding" />
    </div>
  );
}
