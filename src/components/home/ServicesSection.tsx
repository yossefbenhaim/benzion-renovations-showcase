import { motion } from 'framer-motion';
import { UtensilsCrossed, Bath, Building2, Paintbrush, Home as HomeIcon, Grid3X3 } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';

const services = [
  {
    icon: UtensilsCrossed,
    title: 'שיפוץ מטבח',
    description: 'פירוק והתקנת ארונות חדשים, החלפת משטחי עבודה (שיש), כיורים וברזים, אינסטלציה, חיפויי קיר, ריצוף, תאורה וחשמל.',
  },
  {
    icon: Bath,
    title: 'שיפוץ חדר רחצה',
    description: 'פירוק מלא של חדר הרחצה וכלים סניטריים, החלפת תשתיות אינסטלציה וניקוז, החלפת ריצוף וחיפויי קיר, איטום, התקנת כלים סניטריים ותאורה.',
  },
  {
    icon: Building2,
    title: 'שיפוץ חדרי מדרגות',
    description: 'עבודות טיח וצבע, התקנת חיפויי קירות וריצוף חדשים, חיזוק ותיקון מעקות, החלפת גופי תאורה ולעיתים גם טיפול בתשתיות חשמל.',
  },
  {
    icon: Paintbrush,
    title: 'צביעת מבנים חוץ ופנים',
    description: 'הכנת משטחי צביעה דרך תיקוני טיח, שפכטל והחלקת קירות. ויישום בצבע.',
  },
  {
    icon: HomeIcon,
    title: 'בניית פרגולות',
    description: 'תכנון והתאמה אישית למבנה ולשטח, הכנת יסודות ובסיס יציב, שימוש בקורות עמידות ובחומרי הצללה, וצביעה.',
  },
  {
    icon: Grid3X3,
    title: 'התקנה\\החלפת ריצוף',
    description: 'פירוק הריצוף הקיים, תיקון והכנת התשתית, יישור משטחים, התקנת אריחים חדשים, רובה ואיטום.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            מה אנחנו מציעים
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            השירותים <span className="text-gradient-gold">שלנו</span>
          </h2>
          <ScrollReveal>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              שירותי שיפוצים מקצועיים בנתיבות ואזור הדרום - מתאימים לכל סוג של פרויקט
            </p>
          </ScrollReveal>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
