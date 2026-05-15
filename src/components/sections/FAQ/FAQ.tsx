'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

export type FaqData = { q: string; a: string };

const defaultFaqs: FaqData[] = [
  { q: 'Is there a free consultation?', a: 'Yes! We offer a free 15-minute discovery call to understand your goals and recommend the right plan before you commit to anything.' },
  { q: 'What if I need something custom?', a: "We love custom work. Reach out via WhatsApp or email and we'll craft a personalised package that fits your exact needs and budget." },
  { q: 'How are payments processed?', a: 'We accept UPI, bank transfer, and international card payments. A 50% advance secures your slot; the rest is due on delivery.' },
  { q: 'What if I am not satisfied?', a: "We work through revision rounds until you're 100% happy. All plans include revision rounds and we've never left a client unsatisfied." },
  { q: 'How long does delivery take?', a: 'Timelines are listed per plan. Rush delivery (48h) is available as an add-on. We always communicate clearly on timelines before starting.' },
];

function FaqItem({ faq, i }: { faq: FaqData; i: number }) {
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

export default function FAQ({ faqs = defaultFaqs, title = "Common" }: { faqs?: FaqData[], title?: string }) {
  const [showAll, setShowAll] = useState(false);
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>
            {title} <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className={styles.faqListWrapper}>
          <div className={styles.faqList}>
            <AnimatePresence initial={false}>
              {visibleFaqs.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} i={i} />
              ))}
            </AnimatePresence>
          </div>
          
          {!showAll && faqs.length > 3 && (
            <div className={styles.viewMoreWrapper}>
              <button 
                className={styles.viewMoreBtn}
                onClick={() => setShowAll(true)}
              >
                View More Questions <ChevronDown size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
