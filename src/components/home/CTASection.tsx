import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-black-light via-secondary to-secondary" />
      
      {/* Gold accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            מוכנים להפוך את
            <br />
            <span className="text-gradient-gold">הבית לחלום?</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto"
          >
            צרו קשר עכשיו לייעוץ חינם והצעת מחיר. אנחנו כאן לענות על כל שאלה ולהפוך את החזון שלכם למציאות.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-gold text-primary-foreground text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7 shadow-gold-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              התקשרו עכשיו
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 lg:py-7"
            >
              <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              שלחו הודעה בוואטסאפ
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 sm:mt-12 md:mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8"
          >
            {['עבודה מקצועית', 'אחריות מלאה', 'מחירים הוגנים', 'לוחות זמנים'].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
