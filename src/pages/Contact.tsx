import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `שלום, שמי ${formData.name}.\n${formData.message}\nטלפון: ${formData.phone}\nאימייל: ${formData.email}`;
    window.open(`https://wa.me/972501234567?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'טלפון',
      value: '050-123-4567',
      href: 'tel:+972501234567'
    },
    {
      icon: Mail,
      title: 'אימייל',
      value: 'info@benzion.co.il',
      href: 'mailto:info@benzion.co.il'
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
                className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-semibold"
              >
                <Send className="ml-2 h-5 w-5" />
                שליחה
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
                  <a href="tel:+972501234567">
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
                    href="https://wa.me/972501234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
    </div>
  );
};

export default Contact;
