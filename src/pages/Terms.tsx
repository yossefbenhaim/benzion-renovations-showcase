import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Terms = () => {
  const baseUrl = 'https://bentzionprojects.byclick.co.il';
  
  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <Helmet>
        <title>תקנון האתר | בן ציון פרויקטים</title>
        <meta name="description" content="תקנון השימוש באתר בן ציון פרויקטים. קראו את התנאים וההגבלות לפני השימוש באתר." />
        <link rel="canonical" href={`${baseUrl}/terms`} />
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">תקנון האתר</h1>
          <p className="text-muted-foreground mb-8">עודכן לאחרונה: ינואר 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. כללי</h2>
              <p className="text-muted-foreground leading-relaxed">
                ברוכים הבאים לאתר בן ציון פרויקטים. השימוש באתר זה מהווה הסכמה לתנאים המפורטים להלן.
                אנא קראו תנאים אלה בעיון לפני השימוש באתר. אם אינכם מסכימים לתנאים אלה,
                אנא הימנעו משימוש באתר.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. השירותים</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר מספק מידע אודות שירותי פרויקטים ובנייה. המידע המוצג באתר הינו למטרות
                אינפורמטיביות בלבד ואינו מהווה הצעה מחייבת. כל הצעת מחיר תינתן באופן פרטני
                לאחר בחינת הפרויקט הספציפי.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. קניין רוחני</h2>
              <p className="text-muted-foreground leading-relaxed">
                כל התכנים באתר, לרבות טקסטים, תמונות, עיצוב, לוגו וסימני מסחר, הינם רכושה הבלעדי
                של בן ציון פרויקטים ומוגנים על פי חוקי זכויות יוצרים. אין להעתיק, להפיץ או להשתמש
                בתכנים אלה ללא אישור מראש ובכתב.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. הגבלת אחריות</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר מסופק "כמות שהוא" (AS IS). איננו מתחייבים שהאתר יהיה זמין בכל עת או
                שיהיה נקי משגיאות. לא נישא באחריות לכל נזק ישיר או עקיף הנובע משימוש באתר.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. קישורים חיצוניים</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר עשוי להכיל קישורים לאתרים חיצוניים. איננו אחראים לתוכן או למדיניות הפרטיות
                של אתרים אלה. השימוש בקישורים אלה הינו באחריותכם בלבד.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. שינויים בתקנון</h2>
              <p className="text-muted-foreground leading-relaxed">
                אנו שומרים לעצמנו את הזכות לעדכן ולשנות תקנון זה בכל עת. שינויים יכנסו לתוקף
                עם פרסומם באתר. המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. יצירת קשר</h2>
              <p className="text-muted-foreground leading-relaxed">
                לשאלות או הבהרות בנוגע לתקנון זה, ניתן לפנות אלינו דרך עמוד יצירת הקשר באתר
                או בטלפון 050-512-9076.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
