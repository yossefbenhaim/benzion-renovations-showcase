import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // אפקט Parallax - התמונה נעה למטה כשגוללים ויראו יותר ממנה
  const y = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden"
    >
      {/* תמונת רקע עם אפקט Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[150%]"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100&auto=format&fit=crop')`,
          }}
        />

        {/* אוברליי כהה לקריאות */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* סטטיסטיקות מעל התמונה */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 backdrop-blur-md bg-white/5 p-4 md:p-6 lg:p-8 rounded-2xl border border-white/10">
            {[
              { number: '15+', label: 'שנות ניסיון' },
              { number: '500+', label: 'פרויקטים' },
              { number: '100%', label: 'לקוחות מרוצים' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gradient-gold mb-1 md:mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/80 font-medium whitespace-nowrap">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxSection;
