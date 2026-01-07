import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail } from 'lucide-react';

const AccessibilityStatement = () => {
  const accessibilityFeatures = [
    'התאמת גודל הטקסט',
    'מצב ניגודיות גבוהה',
    'הדגשת קישורים',
    'מצב גווני אפור',
    'סמן מוגדל',
    'פונט קריא',
    'התאמת גובה שורות',
    'התאמת מרווח אותיות',
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">הצהרת נגישות</h1>
          <p className="text-muted-foreground mb-8">עודכן לאחרונה: ינואר 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">מחויבות לנגישות</h2>
              <p className="text-muted-foreground leading-relaxed">
                בן ציון שיפוצים מחויבת להנגשת האתר לאנשים עם מוגבלויות. אנו משקיעים משאבים רבים 
                כדי להבטיח שהאתר שלנו יהיה נגיש לכל המשתמשים, ללא קשר ליכולותיהם או לטכנולוגיה 
                בה הם משתמשים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">תקן הנגישות</h2>
              <p className="text-muted-foreground leading-relaxed">
                אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), 
                התשע"ג-2013, ובהתאם להנחיות WCAG 2.1 ברמה AA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">תכונות הנגישות באתר</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                האתר כולל תפריט נגישות המאפשר התאמות אישיות:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {accessibilityFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">שימוש בתפריט הנגישות</h2>
              <p className="text-muted-foreground leading-relaxed">
                תפריט הנגישות נמצא בפינה השמאלית התחתונה של המסך (אייקון נגישות). 
                לחיצה על האייקון תפתח את תפריט ההתאמות. ניתן לשנות את ההגדרות בכל עת, 
                וההעדפות שלכם יישמרו לביקורים הבאים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">דפדפנים נתמכים</h2>
              <p className="text-muted-foreground leading-relaxed">
                האתר נבדק ותומך בדפדפנים הנפוצים: Google Chrome, Mozilla Firefox, 
                Microsoft Edge, Safari. מומלץ להשתמש בגרסאות העדכניות של הדפדפנים 
                לחוויית גלישה מיטבית.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">פניות בנושא נגישות</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                אם נתקלתם בבעיית נגישות או שיש לכם הצעות לשיפור, נשמח לשמוע מכם:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">טלפון</p>
                    <a href="tel:0505129076" className="text-foreground hover:text-primary transition-colors">
                      050-512-9076
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">דוא"ל</p>
                    <a href="mailto:bentzionprojects@gmail.com" className="text-foreground hover:text-primary transition-colors">
                      bentzionprojects@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">עדכון ההצהרה</h2>
              <p className="text-muted-foreground leading-relaxed">
                הצהרת נגישות זו מתעדכנת באופן שוטף. אנו ממשיכים לעבוד על שיפור הנגישות 
                ומתחייבים לתת מענה לכל פנייה בנושא תוך 5 ימי עסקים.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
