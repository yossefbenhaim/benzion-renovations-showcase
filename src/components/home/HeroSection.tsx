import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black-light via-background to-background" />
      
      {/* Animated gold particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -10,
              opacity: 0,
            }}
            animate={{
              y: window.innerHeight + 10,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">מקצועיות ללא פשרות</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-foreground">בן ציון</span>
            <br />
            <span className="text-gradient-gold">שיפוצים</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            הופכים כל בית לחלום. שיפוצים ברמה הגבוהה ביותר עם 
            <span className="text-primary"> איכות</span>, 
            <span className="text-primary"> מקצועיות</span> ו
            <span className="text-primary">אחריות מלאה</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-gold text-primary-foreground text-lg px-8 py-6 shadow-gold hover:shadow-gold-lg transition-all hover:scale-105"
            >
              לקבלת הצעת מחיר
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              לצפייה בעבודות שלנו
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: '15+', label: 'שנות ניסיון' },
              { number: '500+', label: 'פרויקטים' },
              { number: '100%', label: 'לקוחות מרוצים' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">גלול למטה</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
