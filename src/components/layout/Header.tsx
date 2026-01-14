import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '/', label: 'בית' },
  { href: '/about', label: 'אודות' },
  { href: '/projects', label: 'פרויקטים' },
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
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-center gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <motion.img
                src={logo}
                alt="בן ציון פרויקטים"
                whileHover={{ scale: 1.05 }}
                className="h-10 w-auto rounded-full"
              />
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-5 py-2 text-sm font-medium transition-all rounded-full whitespace-nowrap ${location.pathname === link.href
                    ? 'text-primary-foreground bg-primary'
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone + WhatsApp Button */}
            <div className="flex items-center gap-4">
              <a href="tel:0505129076" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap">
                <Phone className="w-4 h-4" />
                <span>050-512-9076</span>
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://wa.me/972505129076"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-all shadow-lg"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="rtl">
                    <p>לשיחת יתייעצות בוואצפ לחץ כאן</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:hidden fixed top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-[9999]"
      >
        <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-full px-3 sm:px-4 py-2.5 sm:py-3 shadow-lg w-full">
          <div className="flex items-center justify-between gap-2">
            {/* Hamburger Button - Left */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="תפריט"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              )}
            </button>

            {/* Phone Number + WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 justify-center">
              <a
                href="tel:0505129076"
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>050-512-9076</span>
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://wa.me/972505129076"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-all shadow-lg flex-shrink-0"
                      aria-label="WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="rtl">
                    <p>לשיחת יתייעצות בוואצפ לחץ כאן</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Logo - Right */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="בן ציון פרויקטים"
                className="h-8 w-auto sm:h-10 rounded-full"
              />
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed left-0  w-full max-w-full h-[380px] z-[9998] bg-background/98 backdrop-blur-lg overflow-y-auto overflow-x-hidden"
          >
            <div className="flex flex-col min-h-full pt-[90px] py-8 overflow-hidden px-8 max-w-full">
              {/* Menu Items */}
              <nav className="flex flex-col gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                      className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-colors block ${location.pathname === link.href
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
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button
                    size="lg"
                    className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold rounded-full px-6 sm:px-8 w-full text-base sm:text-lg md:text-xl font-bold"
                  >
                    צור קשר
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Header;
