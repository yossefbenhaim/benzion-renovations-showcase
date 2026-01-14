import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Phone, Search, FileText, Hammer, CheckCircle2, Handshake, Check } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { useRef, useState, useEffect } from 'react';

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.5"]
  });

  // Simple progress line - fills from 0 to 1 based on scroll position
  // The line fills as you scroll through the component, reaching 100% when component center is at screen center
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Track if line reached 100% to show check icon
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const unsubscribe = lineProgress.on('change', (latest) => {
      setIsComplete(latest > 0.99);
    });
    return () => unsubscribe();
  }, [lineProgress]);

  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'שיחת ייעוץ ראשונית',
      description: 'מבינים את הצרכים שלכם, התקציב והחזון שלכם - טלפונית או בפגישה אישית',
      color: 'from-primary/20 to-primary/5',
      iconColor: 'text-primary',
      bgGradient: 'from-primary to-primary/50',
      side: 'right'
    },
    {
      icon: Search,
      number: '02',
      title: 'ביקור מקצועי בשטח',
      description: 'מגיעים למקום, מבצעים מדידות מדויקות, בודקים תשתיות ונותנים המלצות מקצועיות',
      color: 'from-primary/15 to-primary/5',
      iconColor: 'text-primary',
      bgGradient: 'from-primary to-primary/50',
      side: 'left'
    },
    {
      icon: FileText,
      number: '03',
      title: 'הצעת מחיר ותכנון מפורט',
      description: 'מכינים עבורכם הצעה שקופה ומותאמת אישית, עם לוחות זמנים ברורים ופירוט מלא',
      color: 'from-primary/20 to-primary/5',
      iconColor: 'text-primary',
      bgGradient: 'from-primary to-primary/50',
      side: 'right'
    },
    {
      icon: Hammer,
      number: '04',
      title: 'ביצוע מדויק לפי שלבים',
      description: 'העבודה מתנהלת לפי תוכנית מסודרת, עם פיקוח צמוד, תיאום מלא ושקיפות מוחלטת',
      color: 'from-primary/15 to-primary/5',
      iconColor: 'text-primary',
      bgGradient: 'from-primary to-primary/50',
      side: 'left'
    },
    {
      icon: CheckCircle2,
      number: '05',
      title: 'ביקורת סופית ואחריות',
      description: 'בודקים יחד את התוצאה, מטפלים בכל ליטוש אחרון ומוסרים לכם עבודה מושלמת עם אחריות מלאה',
      color: 'from-primary/20 to-primary/5',
      iconColor: 'text-primary',
      bgGradient: 'from-primary to-primary/50',
      side: 'right'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-24 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-primary font-semibold text-sm md:text-base px-4 py-2 bg-primary/10 rounded-full">
                תהליך העבודה שלנו
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              איך זה <span className="text-gradient-gold">עובד?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              מהשיחה הראשונה ועד למסירה הסופית - תהליך שקוף, מסודר ומקצועי שמבטיח תוצאות מושלמות
            </motion.p>
          </div>
        </ScrollReveal>

        {/* Steps with zigzag timeline */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central Line - Background */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-[-96px] w-1 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/20" />

          {/* Central Line - Progress */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-[-96px] w-1 -translate-x-1/2 bg-gradient-to-b from-primary via-primary to-primary origin-top"
            style={{
              scaleY: lineProgress
            }}
          />

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: step.side === 'right' ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-24 last:mb-0 flex items-center ${step.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-60px)] ${step.side === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
                <div className="bg-card border border-primary/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 hover:shadow-gold transition-all duration-300 group relative">
                  {/* Connecting line to center */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-${step.side === 'right' ? 'l' : 'r'} ${step.bgGradient} ${step.side === 'right' ? '-right-8' : '-left-8'}`} />

                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} backdrop-blur-sm border border-primary/10 flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Node */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.bgGradient}`}
                />
              </div>
            </motion.div>
          ))}

          {/* Icon at the end of the line - below step 5 */}
          <div className="hidden md:block absolute left-1/2 bottom-[-96px] -translate-x-1/2 translate-y-1/2 z-20">
            <div className="w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg">
              <AnimatePresence mode="wait">
                {isComplete ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Check className="w-6 h-6 text-primary" strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="handshake"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Handshake className="w-6 h-6 text-primary" strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
