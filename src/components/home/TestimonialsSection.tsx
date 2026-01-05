import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'רחל כהן',
    role: 'שיפוץ דירה מלא',
    content: 'בן ציון ביצע עבודה מדהימה בשיפוץ הדירה שלנו. המקצועיות, האמינות והאיכות הגבוהה הפתיעו אותנו. ממליצה בחום!',
    rating: 5,
  },
  {
    id: 2,
    name: 'דוד לוי',
    role: 'חידוש מטבח',
    content: 'המטבח החדש שלנו נראה מהמם. בן ציון הקשיב לכל הבקשות שלנו והתוצאה עלתה על כל הציפיות. שירות מעולה!',
    rating: 5,
  },
  {
    id: 3,
    name: 'שרה אברהם',
    role: 'שיפוץ אמבטיה',
    content: 'עבודה מקצועית מהתחלה ועד הסוף. הצוות היה אדיב, נקי ומדויק. האמבטיה נראית כמו ממלון יוקרתי!',
    rating: 5,
  },
  {
    id: 4,
    name: 'יוסי חממי',
    role: 'שיפוץ בית פרטי',
    content: 'עבדנו עם בן ציון על שיפוץ הבית כולו. הוא עמד בלוחות הזמנים, בתקציב, והכי חשוב - התוצאה מושלמת.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const navigate = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => {
      if (direction === 'next') return (prev + 1) % testimonials.length;
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
  };

  return (
    <section className="py-24 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            מה הלקוחות אומרים
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            המלצות <span className="text-gradient-gold">לקוחות</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative bg-card border border-border rounded-3xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => navigate('next')}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate('prev')}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
