import Link from 'next/link';
import Image from 'next/image';
import {
  Globe,
  Send,
  Camera,
  Play,
  Mail,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';
import styles from './Footer.module.css';

const services = [
  'ATS-Friendly Resume',
  'LinkedIn Optimization',
  'Personal Branding',
  'Portfolio Creation',
  'Website Creation',
  'Career Mentorship',
  'Client Acquisition',
  'Ghostwriting & Content',
];

const company = [
  { label: 'About Us',     href: '/about'        },
  { label: 'Our Process',  href: '/process'      },
  { label: 'Portfolio',    href: '/portfolio'    },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing',      href: '/pricing'      },
  { label: 'Contact',      href: '/contact'      },
];

const socials = [
  { icon: Globe,  href: '#', label: 'LinkedIn'  },
  { icon: Send,   href: '#', label: 'Twitter'   },
  { icon: Camera, href: '#', label: 'Instagram' },
  { icon: Play,   href: '#', label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topGlow} />
      <div className={styles.bgOrb} />

      <div className={styles.main}>
        <div className="container">
          <div className={styles.grid}>

            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image 
                  src="/dark_logo.png" 
                  alt="Nextstep Careers" 
                  width={240} 
                  height={65} 
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.tagline}>
                Build Better Presence. Create Better Opportunities. We transform
                careers with strategy, branding.
              </p>
              
            </div>

            {/* Services */}
            <div>
              <h4 className={styles.colTitle}>Services</h4>
              <ul className={styles.linkList}>
                {services.map((s) => (
                  <li key={s}>
                    <Link href="/services">
                      <ArrowUpRight size={13} />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className={styles.colTitle}>Company</h4>
              <ul className={styles.linkList}>
                {company.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={styles.colTitle}>Get in Touch</h4>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><Mail size={15} /></div>
                <div className={styles.contactText}>
                  <a href="mailto:nextstepcareersai24@gmail.com">nextstepcareersai24@gmail.com</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><Phone size={15} /></div>
                <div className={styles.contactText}>
                  <a href="tel:+919606037499">+91 96060 37499</a>
                </div>
              </div>

              <a
                href="https://wa.me/919606037499"
                className={styles.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} <span>Nextstep Careers</span>. All rights reserved.
            Built with ❤️ for career growth.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
