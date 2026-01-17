import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Cookies = () => {
  const baseUrl = 'https://bentzionprojects.byclick.co.il';
  
  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <Helmet>
        <title>מדיניות עוגיות | בן ציון פרויקטים</title>
        <meta name="description" content="מדיניות העוגיות של בן ציון פרויקטים. למדו כיצד אנו משתמשים בעוגיות באתר." />
        <link rel="canonical" href={`${baseUrl}/cookies`} />
      </Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">מדיניות עוגיות</h1>
          <p className="text-muted-foreground mb-8">עודכן לאחרונה: ינואר 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">מה הן עוגיות?</h2>
              <p className="text-muted-foreground leading-relaxed">
                עוגיות (Cookies) הן קבצי טקסט קטנים הנשמרים במכשיר שלכם כאשר אתם מבקרים באתר. 
                הן מאפשרות לאתר לזכור את העדפותיכם ולשפר את חוויית הגלישה שלכם.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">סוגי העוגיות בהן אנו משתמשים</h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">עוגיות הכרחיות</h3>
                  <p className="text-muted-foreground text-sm">
                    עוגיות אלו חיוניות לתפקוד הבסיסי של האתר ולא ניתן לבטלן. 
                    הן כוללות למשל שמירת הגדרות הנגישות שלכם.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">עוגיות פונקציונליות</h3>
                  <p className="text-muted-foreground text-sm">
                    עוגיות אלו מאפשרות לאתר לזכור את הבחירות שלכם (כגון שפה או אזור) 
                    ולספק תכונות משופרות ומותאמות אישית.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">עוגיות אנליטיות</h3>
                  <p className="text-muted-foreground text-sm">
                    עוגיות אלו עוזרות לנו להבין כיצד מבקרים משתמשים באתר שלנו. 
                    המידע הנאסף הוא אנונימי ומשמש לשיפור האתר.
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">עוגיות שיווקיות</h3>
                  <p className="text-muted-foreground text-sm">
                    עוגיות אלו משמשות למעקב אחר מבקרים באתרים שונים. 
                    המטרה היא להציג פרסומות רלוונטיות ומעניינות למשתמש.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">ניהול עוגיות</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                רוב הדפדפנים מאפשרים לכם לשלוט בעוגיות דרך הגדרות הדפדפן. תוכלו:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mr-4">
                <li>לחסום את כל העוגיות</li>
                <li>לקבל התראה כאשר עוגייה נשלחת</li>
                <li>למחוק עוגיות קיימות</li>
                <li>לאפשר עוגיות מאתרים מסוימים בלבד</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                שימו לב שחסימת עוגיות עלולה להשפיע על הפונקציונליות של האתר.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">עוגיות צד שלישי</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר עשוי להכיל תוכן מצדדים שלישיים (כגון סרטוני YouTube או מפות Google) 
                שעשויים להציב עוגיות משלהם. אין לנו שליטה על עוגיות אלו ומומלץ לבדוק 
                את מדיניות הפרטיות של אותם שירותים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">שינויים במדיניות</h2>
              <p className="text-muted-foreground leading-relaxed">
                אנו עשויים לעדכן מדיניות עוגיות זו מעת לעת. שינויים יפורסמו בעמוד זה 
                עם תאריך העדכון האחרון.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">יצירת קשר</h2>
              <p className="text-muted-foreground leading-relaxed">
                לשאלות בנוגע למדיניות העוגיות שלנו, ניתן לפנות אלינו בטלפון 050-512-9076 
                או דרך טופס יצירת הקשר באתר.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
