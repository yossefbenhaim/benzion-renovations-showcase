import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/about', label: 'אודות' },
  { href: '/contact', label: 'צור קשר' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


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
                    className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full ${location.pathname === link.href
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

      {/* Mobile Navigation Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-[9999] bg-background/95 backdrop-blur-md border-b border-border w-full max-w-full">
        <div className="flex items-center justify-between px-4 h-16 max-w-full">
          {/* Hamburger Button - Left */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
            aria-label="תפריט"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

          {/* Logo - Right */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="בן ציון פרויקטים"
              className="h-12 w-auto rounded-full"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed left-0 top-16 w-full max-w-full h-[300px] z-[9998] bg-background/98 backdrop-blur-lg overflow-y-auto overflow-x-hidden"
          >
            <div className="flex flex-col min-h-full py-8 px-8 max-w-full">
              {/* Menu Items */}
              <nav className="flex flex-col gap-6 mb-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className={`text-3xl font-bold transition-colors block ${
                        location.pathname === link.href
                          ? 'text-primary'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-auto"
              >
                <Button
                  size="lg"
                  className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold rounded-full px-8 w-full"
                  onClick={closeMobileMenu}
                >
                  הצעת מחיר
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="lg:hidden h-16" />
    </>
  );
};

export default Header;
