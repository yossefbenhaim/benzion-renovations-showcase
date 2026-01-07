import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">מדיניות פרטיות</h1>
          <p className="text-muted-foreground mb-8">עודכן לאחרונה: ינואר 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. מבוא</h2>
              <p className="text-muted-foreground leading-relaxed">
                בן ציון שיפוצים מכבדת את פרטיותכם ומחויבת להגן על המידע האישי שלכם. 
                מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם 
                בעת השימוש באתר שלנו.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. המידע שאנו אוספים</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                אנו עשויים לאסוף את סוגי המידע הבאים:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>שם מלא ופרטי התקשרות (טלפון, דוא"ל)</li>
                <li>כתובת למתן שירות</li>
                <li>פרטי הפרויקט והבקשות שלכם</li>
                <li>מידע טכני כגון כתובת IP, סוג דפדפן ומכשיר</li>
                <li>נתוני שימוש ופעילות באתר</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">3. שימוש במידע</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                אנו משתמשים במידע שנאסף למטרות הבאות:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>מתן שירותים ותקשורת עמכם</li>
                <li>עיבוד בקשות והצעות מחיר</li>
                <li>שיפור האתר והשירותים שלנו</li>
                <li>שליחת עדכונים ומידע שיווקי (בהסכמתכם)</li>
                <li>עמידה בדרישות חוקיות</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">4. שיתוף מידע</h2>
              <p className="text-muted-foreground leading-relaxed">
                איננו מוכרים או משכירים את המידע האישי שלכם לצדדים שלישיים. 
                אנו עשויים לשתף מידע עם ספקי שירות הפועלים מטעמנו (כגון שירותי אחסון), 
                או כאשר הדבר נדרש על פי חוק.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">5. אבטחת מידע</h2>
              <p className="text-muted-foreground leading-relaxed">
                אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע שלכם מפני גישה בלתי מורשית, 
                שינוי, חשיפה או השמדה. עם זאת, אין באפשרותנו להבטיח אבטחה מוחלטת של מידע 
                המועבר באינטרנט.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">6. זכויותיכם</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                יש לכם את הזכויות הבאות בנוגע למידע האישי שלכם:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>לבקש עיון במידע שנאסף עליכם</li>
                <li>לבקש תיקון מידע שגוי</li>
                <li>לבקש מחיקת המידע שלכם</li>
                <li>להתנגד לעיבוד המידע לצרכי שיווק</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">7. יצירת קשר</h2>
              <p className="text-muted-foreground leading-relaxed">
                לשאלות או בקשות בנוגע למדיניות פרטיות זו או למידע האישי שלכם, 
                ניתן לפנות אלינו בטלפון 050-123-4567 או דרך טופס יצירת הקשר באתר.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
