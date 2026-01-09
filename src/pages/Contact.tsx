import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { useState } from 'react';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_THANKS_ID,
        {
          name: formData.name || 'לקוח',
          email: formData.email || '',
          subject: formData.subject || 'פנייה כללית',
          message: formData.message || 'אין הודעה',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_INTERNAL_ID,
        {
          name: formData.name || 'לא צוין',
          phone: formData.phone || 'לא צוין',
          email: formData.email || 'לא צוין',
          subject: formData.subject || 'פנייה כללית',
          message: formData.message || 'אין הודעה',
          title: 'פנייה חדשה מהאתר'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setShowSuccessModal(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('אירעה שגיאה בשליחת ההודעה. אנא נסו שוב.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'טלפון',
      value: '050-512-9076',
      href: 'tel:+972505129076'
    },
    {
      icon: Mail,
      title: 'אימייל',
      value: 'bentzionprojects@gmail.com',
      href: 'mailto:bentzionprojects@gmail.com'
    },
    {
      icon: MapPin,
      title: 'כתובת',
      value: 'תל אביב, ישראל',
      href: '#'
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      value: 'א׳-ה׳: 08:00-18:00',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">יצירת קשר</span>
            </h1>
            <ScrollReveal>
              <p className="text-lg text-muted-foreground">
                נשמח לשמוע מכם ולסייע בכל שאלה. צוות המומחים שלנו זמין עבורכם.
              </p>
            </ScrollReveal>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 rounded-2xl p-8 shadow-gold"
          >
            <h2 className="text-2xl font-bold mb-6 text-gradient-gold">שלחו לנו הודעה</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">שם מלא</Label>
                  <Input
                    id="name"
                    placeholder="הכניסו את שמכם"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">טלפון</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="050-000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">אימייל</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">נושא</Label>
                <Input
                  id="subject"
                  placeholder="נושא הפנייה (אופציונלי)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">הודעה</Label>
                <Textarea
                  id="message"
                  placeholder="ספרו לנו על הפרויקט שלכם..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold disabled:opacity-50"
              >
                <Send className="ml-2 h-5 w-5" />
                {isSubmitting ? 'שולח...' : 'שליחה'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gradient-gold">פרטי התקשרות</h2>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-card border border-primary/20 rounded-xl hover:border-primary/40 hover:shadow-gold transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card border border-primary/20 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-4">התקשרות מהירה</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-gradient-gold hover:opacity-90"
                >
                  <a href="tel:+972505129076">
                    <Phone className="ml-2 h-5 w-5" />
                    התקשרו עכשיו
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1 border-primary/40 hover:bg-primary/10"
                >
                  <a
                    href="https://wa.me/972505129076"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="ml-2 h-5 w-5" />
                    וואטסאפ
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-card border border-primary/20 rounded-2xl overflow-hidden h-64"
            >
              <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                  <p className="text-muted-foreground">מפה אינטראקטיבית</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccessModal(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border-2 border-primary/30 rounded-3xl p-8 max-w-md w-full shadow-gold-lg relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 left-4 p-2 rounded-full hover:bg-primary/10 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  תודה שיצרת קשר!
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  הפרטים שהשארת התקבלו בהצלחה.
                  <br />
                  <span className="text-primary font-semibold">
                    ניצור איתך קשר בקרוב!
                  </span>
                </p>

                {/* Email sent confirmation */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 text-sm text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary mx-auto mb-2" />
                  נשלח אליך מייל אישור למייל שסיפקת
                </div>

                {/* Close Button */}
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-gradient-gold hover:opacity-90 mt-6"
                  size="lg"
                >
                  סגור
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
