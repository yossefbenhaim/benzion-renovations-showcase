import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollReveal from '@/components/ui/scroll-reveal';

const faqs = [
  {
    question: 'כמה זמן לוקח פרויקט שיפוץ ממוצע?',
    answer: 'משך הפרויקט תלוי בהיקף העבודה. שיפוץ חדר אמבטיה לוקח בדרך כלל 2-3 שבועות, שיפוץ מטבח 3-4 שבועות, ושיפוץ כללי של דירה יכול לקחת 6-12 שבועות. אנו מספקים לוח זמנים מדויק לפני תחילת העבודה.',
  },
  {
    question: 'האם אתם מספקים אחריות על העבודה?',
    answer: 'בהחלט! אנו מספקים אחריות מלאה של שנה על כל עבודות השיפוץ שלנו. האחריות כוללת תיקון כל פגם או בעיה שעלולה להתגלות לאחר סיום העבודה.',
  },
  {
    question: 'איך מתבצע תהליך קבלת הצעת מחיר?',
    answer: 'התהליך פשוט: צרו איתנו קשר, נקבע פגישת ייעוץ חינם בביתכם, נבחן את הצרכים והחזון שלכם, ותוך 48 שעות תקבלו הצעת מחיר מפורטת הכוללת פירוט עבודות, חומרים ולוח זמנים.',
  },
  {
    question: 'האם אתם עובדים עם חומרים איכותיים?',
    answer: 'אנו עובדים רק עם חומרים מהמותגים המובילים בשוק. כל החומרים מגיעים עם אחריות יצרן ואנו מקפידים על תקנים ישראליים ובינלאומיים לאיכות ובטיחות.',
  },
  {
    question: 'האם ניתן לגור בבית במהלך השיפוץ?',
    answer: 'זה תלוי בהיקף השיפוץ. בפרויקטים קטנים עד בינוניים, בדרך כלל ניתן להמשיך לגור בבית. בפרויקטים נרחבים, אנו ממליצים לשקול מגורים זמניים. נתאים את לוח הזמנים והעבודה לצרכים שלכם.',
  },
  {
    question: 'מה כלול בהצעת המחיר?',
    answer: 'הצעת המחיר שלנו כוללת: עלות עבודה, חומרים, פירוק והרכבה, פינוי פסולת, ניקיון סופי, ואחריות. אין הפתעות - המחיר שמצוין הוא המחיר הסופי.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-gradient-gold">שאלות נפוצות</span>
          </h2>
          <ScrollReveal>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
              ריכזנו עבורכם את התשובות לשאלות הנפוצות ביותר
            </p>
          </ScrollReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-primary/20 rounded-xl px-4 sm:px-6 overflow-hidden hover:border-primary/40 transition-colors"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-4 sm:py-5 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 sm:mt-10 md:mt-12"
        >
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4">לא מצאתם תשובה לשאלה שלכם?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg lg:text-xl text-primary hover:text-primary/80 font-medium transition-colors"
          >
            צרו איתנו קשר ונשמח לעזור
            <span className="text-lg sm:text-xl md:text-2xl">←</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
