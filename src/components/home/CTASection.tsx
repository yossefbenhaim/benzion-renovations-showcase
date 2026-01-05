import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            מוכנים להפוך את
            <br />
            <span className="text-gradient-gold">הבית לחלום?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            צרו קשר עכשיו לייעוץ חינם והצעת מחיר. אנחנו כאן לענות על כל שאלה ולהפוך את החזון שלכם למציאות.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-gold text-primary-foreground text-lg px-10 py-7 shadow-gold-lg hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5 ml-2" />
              התקשרו עכשיו
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-10 py-7"
            >
              <MessageCircle className="w-5 h-5 ml-2" />
              שלחו הודעה בוואטסאפ
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex flex-wrap justify-center gap-8"
          >
            {['עבודה מקצועית', 'אחריות מלאה', 'מחירים הוגנים', 'לוחות זמנים'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-primary" />
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
