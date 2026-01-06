import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaggeredMenu from '@/components/ui/staggered-menu';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'צור קשר' },
];

const menuItems = [
  { label: 'בית', ariaLabel: 'לעמוד הבית', link: '/' },
  { label: 'אודות', ariaLabel: 'אודותינו', link: '/about' },
  { label: 'צור קשר', ariaLabel: 'צור קשר', link: '/contact' },
];

const socialItems = [
  { label: 'וואטסאפ', link: 'https://wa.me/972501234567' },
  { label: 'פייסבוק', link: 'https://facebook.com' },
  { label: 'אינסטגרם', link: 'https://instagram.com' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <>
      {/* Desktop Floating Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 inset-x-0 z-50 hidden lg:flex justify-center"
      >
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-2 shadow-lg w-[80vw] max-w-5xl">
          <div className="flex items-center justify-between w-full">
            {/* Logo + Navigation Links */}
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center">
                <motion.img
                  src={logo}
                  alt="בן ציון פרויקטים"
                  whileHover={{ scale: 1.05 }}
                  className="h-10 w-auto rounded-full"
                />
              </Link>

              {/* Navigation Links */}
              <nav className="flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full ${
                      location.pathname === link.href
                        ? 'text-primary-foreground bg-primary'
                        : 'text-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3 mr-2">
              <a href="tel:050-1234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">050-123-4567</span>
              </a>
              <Button size="sm" className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold rounded-full">
                הצעת מחיר
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 right-0 left-0 z-50 lg:hidden transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Staggered Menu with Logo as Button */}
            <StaggeredMenu
              position="left"
              items={menuItems}
              socialItems={socialItems}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="hsl(var(--foreground))"
              openMenuButtonColor="hsl(var(--foreground))"
              changeMenuColorOnOpen={true}
              accentColor="hsl(var(--primary))"
              buttonLogo={
                <img
                  src={logo}
                  alt="בן ציון פרויקטים"
                  className="h-14 w-auto rounded-full"
                />
              }
            />

            {/* Empty div for spacing */}
            <div />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
