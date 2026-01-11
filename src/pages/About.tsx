import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Award, Users, Clock, Shield, Target, Heart, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ownerImage from '@/assets/benzion.jpg';
import { Link } from 'react-router-dom';

const stats = [
  { number: 15, suffix: '+', label: 'שנות ניסיון' },
  { number: 500, suffix: '+', label: 'פרויקטים הושלמו' },
  { number: 100, suffix: '%', label: 'לקוחות מרוצים' },
  { number: 50, suffix: '+', label: 'עובדים מקצועיים' },
];

const values = [
  {
    icon: Award,
    title: 'מקצועיות ואיכות',
    description: 'אנו מתחייבים לעבודה ברמה הגבוהה ביותר, עם תשומת לב לכל פרט קטן.',
  },
  {
    icon: Shield,
    title: 'אחריות מלאה',
    description: 'אחריות מקיפה על כל עבודה שאנו מבצעים, לשקט הנפש שלכם.',
  },
  {
    icon: Clock,
    title: 'עמידה בלוחות זמנים',
    description: 'אנו מכבדים את הזמן שלכם ומתחייבים לסיום הפרויקט בזמן שנקבע.',
  },
  {
    icon: Target,
    title: 'מחירים הוגנים',
    description: 'הצעות מחיר שקופות והוגנות, ללא הפתעות או תוספות בלתי צפויות.',
  },
];

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      let start = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          if (ref.current) ref.current.textContent = target + suffix;
          clearInterval(timer);
        } else {
          if (ref.current) ref.current.textContent = Math.floor(start) + suffix;
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, target, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              אודות החברה
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              הסיפור <span className="text-gradient-gold">שלנו</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              כבר יותר מ-15 שנה שאנחנו מובילים את תחום הפרויקטים בישראל,
              עם חזון ברור: להפוך כל בית לחלום.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                אודותינו - אנחנו נגשים את החזון שלך
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  בהובלת בן ציון מלול וצוות מקצועי ומנוסה, אנו מובילים פרויקטים של שיפוץ דירות ובתים בדרום הארץ ברמה גבוהה.
                  אנחנו מתמחים בשיפוץ דירות כללי, מטבחים וחדרי רחצה, עבודות אינסטלציה וריצוף, פרגולות עץ ואלומיניום, גבס
                  וצבע – בליווי צמוד של מהנדסים ואדריכלים מנוסים.
                </p>
                <p>
                  החזון שלנו פשוט: להגשים לכל לקוח את החזון האישי שלו.
                  אנחנו שומרים על סטנדרט עבודה מוקפד, משתמשים בחומרי הגלם האיכותיים ביותר, ומביאים איתנו ניסיון רב וידע מצטבר של אנשי מקצוע.
                </p>
                <p>
                  בכל פרויקט אנו מתחייבים לאמינות, יצירתיות, עמידה בלוחות זמנים וליווי אישי מהשלב הראשון ועד למסירה.
                  אנחנו כאן כדי להפוך את החלום שלכם לבית חדש – צרו קשר עוד היום.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {['ייעוץ חינם', 'הצעת מחיר ללא התחייבות', 'ליווי צמוד'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src={ownerImage}
                  alt="בן ציון - בעלים"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative card */}
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">לקוחות מרוצים</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              למה לבחור בנו
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              הערכים <span className="text-gradient-gold">שלנו</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              רוצים לשמוע עוד?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              צרו קשר לשיחת ייעוץ חינמית ונשמח לספר לכם עוד על השירותים שלנו
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-gold text-primary-foreground text-lg px-10 py-6 shadow-gold">
                צרו קשר עכשיו
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
