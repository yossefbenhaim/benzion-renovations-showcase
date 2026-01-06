import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  position?: 'left' | 'right';
  items: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  changeMenuColorOnOpen?: boolean;
  accentColor?: string;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  logo?: React.ReactNode;
}

const StaggeredMenu = ({
  position = 'right',
  items,
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = false,
  menuButtonColor = 'hsl(var(--foreground))',
  openMenuButtonColor = 'hsl(var(--foreground))',
  changeMenuColorOnOpen = true,
  accentColor = 'hsl(var(--primary))',
  onMenuOpen,
  onMenuClose,
  logo,
}: StaggeredMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      onMenuOpen?.();
    } else {
      document.body.style.overflow = '';
      onMenuClose?.();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, onMenuOpen, onMenuClose]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      clipPath: position === 'right' 
        ? 'circle(0% at calc(100% - 40px) 40px)'
        : 'circle(0% at 40px 40px)',
    },
    open: {
      clipPath: 'circle(150% at 50% 50%)',
      transition: {
        type: 'spring' as const,
        stiffness: 20,
        restDelta: 2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        type: 'spring' as const,
        stiffness: 100,
      },
    }),
  };

  const socialVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        type: 'spring' as const,
        stiffness: 100,
      },
    }),
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          'relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-all duration-300',
          position === 'right' ? 'mr-0' : 'ml-0'
        )}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 rounded-full transition-colors duration-300"
          style={{ 
            backgroundColor: changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor 
          }}
        />
        <motion.span
          animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          className="block w-6 h-0.5 rounded-full transition-colors duration-300"
          style={{ 
            backgroundColor: changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor 
          }}
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 rounded-full transition-colors duration-300"
          style={{ 
            backgroundColor: changeMenuColorOnOpen && isOpen ? openMenuButtonColor : menuButtonColor 
          }}
        />
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-gradient-to-br from-background via-background to-primary/10"
          >
            <div className="h-full flex flex-col justify-center items-center px-8">
              {/* Logo */}
              {logo && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-8 right-8"
                >
                  {logo}
                </motion.div>
              )}

              {/* Menu Items */}
              <nav className="flex flex-col items-center gap-6">
                {items.map((item, i) => (
                  <motion.div
                    key={item.label}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      to={item.link}
                      onClick={() => setIsOpen(false)}
                      aria-label={item.ariaLabel}
                      className="group flex items-center gap-4 text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors"
                    >
                      {displayItemNumbering && (
                        <span 
                          className="text-sm font-normal opacity-50"
                          style={{ color: accentColor }}
                        >
                          0{i + 1}
                        </span>
                      )}
                      <span className="relative">
                        {item.label}
                        <motion.span
                          className="absolute -bottom-2 right-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          whileHover={{ width: '100%' }}
                          transition={{ duration: 0.3 }}
                        />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Social Items */}
              {displaySocials && socialItems.length > 0 && (
                <div className="absolute bottom-12 flex gap-8">
                  {socialItems.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={i}
                      variants={socialVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {social.label}
                    </motion.a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StaggeredMenu;
