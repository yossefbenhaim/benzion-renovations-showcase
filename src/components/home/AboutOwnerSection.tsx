import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutOwnerSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 rounded-2xl transform rotate-3" />
              
              {/* Main image container */}
              <div className="relative bg-gradient-to-b from-muted to-muted/80 rounded-2xl overflow-hidden">
                {/* Placeholder for owner image */}
                <div className="aspect-[3/4] bg-gradient-to-b from-secondary/30 to-secondary/60 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-secondary/50 flex items-center justify-center">
                      <span className="text-5xl">👷</span>
                    </div>
                    <p className="text-sm">תמונת בעל העסק</p>
                  </div>
                </div>
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-border"
                >
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">קבלן רשום</p>
                    <p className="text-lg font-bold text-primary">מס׳ 12345</p>
                  </div>
                </motion.div>
                
                {/* Contact icons */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
                  <a
                    href="mailto:info@benzion.co.il"
                    className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-border"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="tel:+972501234567"
                    className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-border"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-border"
                  >
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </a>
                </div>
              </div>
              
              {/* Side text decoration */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
                <p className="text-muted-foreground/30 text-sm font-light writing-vertical transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                  מקצועיות • איכות • אמינות
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 text-right"
          >
            <div className="flex items-center gap-2 mb-4 justify-end">
              <Award className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">ניהול וביצוע</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              השותף שלכם ל
              <span className="text-gradient-gold">שיפוץ מושלם</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                אני בן ציון, קבלן גמרים ושיפוצים עם ניסיון של מעל 15 שנה בניהול וביצוע פרויקטים מורכבים באזור המרכז.
              </p>
              <p>
                כשאתם יוצאים לשיפוץ אתם לא מחפשים רק קבלן. אתם מחפשים שותף שיספק לכם שקט נפשי, לדעת שיש מישהו אמין שדואג לכל הפרטים, עומד בזמנים ובתקציב, ומלווה לכל אורך הדרך.
              </p>
              <p>
                לכן אני משלב בין ניהול פרויקטים מקצועי ומוקפד לבין גישה אישית וצמודה. אתם לא רק מקבלים עבודה איכותית, אתם מקבלים שותף שמבין את החזון שלכם ועובד בשבילכם מתחילת הפרויקט ועד למסירה הסופית.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8"
            >
              <Button size="lg" className="group">
                <span>לשיחת ייעוץ</span>
                <Phone className="mr-2 w-4 h-4 group-hover:animate-pulse" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwnerSection;
