import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: Phone, text: '050-123-4567', href: 'tel:050-1234567' },
    { icon: Mail, text: 'info@benzion-renovations.co.il', href: 'mailto:info@benzion-renovations.co.il' },
    { icon: MapPin, text: 'תל אביב, ישראל', href: '#' },
    { icon: Clock, text: 'א\'-ה\' 08:00-18:00', href: '#' },
  ];

  const quickLinks = [
    { label: 'בית', href: '/' },
    { label: 'אודות', href: '/about' },
    { label: 'שירותים', href: '/services' },
    { label: 'גלריה', href: '/gallery' },
    { label: 'צור קשר', href: '/contact' },
  ];

  const services = [
    'שיפוץ דירות',
    'חידוש מטבחים',
    'עבודות ריצוף',
    'צביעה מקצועית',
    'חשמל ואינסטלציה',
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-gradient-gold">בן ציון</span>
              <span className="block text-sm text-muted-foreground">שיפוצים</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              מומחים בשיפוץ דירות ובתים פרטיים ברמה הגבוהה ביותר. 
              איכות, מקצועיות ואחריות מלאה על כל פרויקט.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/972501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">ניווט מהיר</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">השירותים שלנו</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">יצירת קשר</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} בן ציון שיפוצים. כל הזכויות שמורות.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">תנאי שימוש</a>
              <a href="#" className="hover:text-primary transition-colors">מדיניות פרטיות</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
