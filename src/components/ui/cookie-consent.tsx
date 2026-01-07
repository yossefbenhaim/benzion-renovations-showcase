import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const cookieTypes = [
    {
      key: 'necessary' as const,
      label: 'עוגיות הכרחיות',
      description: 'חיוניות לתפקוד האתר. לא ניתן לבטלן.',
      required: true,
    },
    {
      key: 'functional' as const,
      label: 'עוגיות פונקציונליות',
      description: 'שומרות העדפות כמו הגדרות נגישות.',
      required: false,
    },
    {
      key: 'analytics' as const,
      label: 'עוגיות אנליטיות',
      description: 'עוזרות לנו להבין כיצד משתמשים באתר.',
      required: false,
    },
    {
      key: 'marketing' as const,
      label: 'עוגיות שיווקיות',
      description: 'משמשות להצגת פרסומות רלוונטיות.',
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[99] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-gold-lg overflow-hidden">
            {/* Main Banner */}
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">אנחנו משתמשים בעוגיות 🍪</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    האתר שלנו משתמש בעוגיות כדי לשפר את חוויית הגלישה שלכם, לנתח את התנועה באתר 
                    ולהתאים את התוכן להעדפותיכם.{' '}
                    <Link to="/cookies" className="text-primary hover:underline">
                      קראו עוד במדיניות העוגיות
                    </Link>
                  </p>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-border space-y-4">
                      {cookieTypes.map((cookie) => (
                        <div
                          key={cookie.key}
                          className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{cookie.label}</p>
                            <p className="text-sm text-muted-foreground">{cookie.description}</p>
                          </div>
                          <button
                            onClick={() => togglePreference(cookie.key)}
                            disabled={cookie.required}
                            className={`w-12 h-7 rounded-full transition-colors relative ${
                              preferences[cookie.key]
                                ? 'bg-primary'
                                : 'bg-muted-foreground/30'
                            } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            aria-label={`${preferences[cookie.key] ? 'כבה' : 'הפעל'} ${cookie.label}`}
                          >
                            <span
                              className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all ${
                                preferences[cookie.key] ? 'right-1' : 'right-6'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 min-w-[120px] py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  אישור הכל
                </button>
                
                {showSettings ? (
                  <button
                    onClick={handleAcceptSelected}
                    className="flex-1 min-w-[120px] py-3 px-6 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                  >
                    שמור העדפות
                  </button>
                ) : (
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 min-w-[120px] py-3 px-6 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    הגדרות
                  </button>
                )}
                
                <button
                  onClick={handleRejectAll}
                  className="flex-1 min-w-[120px] py-3 px-6 border border-border text-muted-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  רק הכרחיות
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
