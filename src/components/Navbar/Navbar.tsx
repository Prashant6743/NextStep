'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLenis } from 'lenis/react';
import { Menu, X, ChevronRight } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Process', href: '/process' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useLenis(({ scroll }) => {
    const next = scroll > 40;
    setScrolled((prev) => (prev === next ? prev : next));
  });

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image 
              src="/dark_logo.png" 
              alt="Nextstep Careers" 
              width={240} 
              height={60} 
              className={styles.logoImg}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className={styles.navActions}>
            <Link href="/contact" className={`btn btn-primary ${styles.ctaBtn}`}>
              Get Started <ChevronRight size={15} />
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}>
          <div className={styles.mobileInner}>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`btn btn-primary ${styles.mobileCta}`}
              onClick={closeMenu}
            >
              Get Started <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </nav>
  );
}
