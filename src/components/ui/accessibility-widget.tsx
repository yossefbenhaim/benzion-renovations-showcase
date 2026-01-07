import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, 
  X, 
  ZoomIn, 
  ZoomOut, 
  Type, 
  Eye, 
  Link2, 
  RotateCcw,
  Moon,
  Sun,
  Contrast,
  MousePointer2
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
  grayscale: boolean;
  bigCursor: boolean;
  readableFont: boolean;
  lineHeight: number;
  letterSpacing: number;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  highlightLinks: false,
  grayscale: false,
  bigCursor: false,
  readableFont: false,
  lineHeight: 100,
  letterSpacing: 0,
};

const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibilitySettings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply settings to document
  const applySettings = useCallback((newSettings: AccessibilitySettings) => {
    const html = document.documentElement;
    const body = document.body;

    // Font size
    html.style.fontSize = `${newSettings.fontSize}%`;

    // High contrast
    if (newSettings.highContrast) {
      body.classList.add('accessibility-high-contrast');
    } else {
      body.classList.remove('accessibility-high-contrast');
    }

    // Highlight links
    if (newSettings.highlightLinks) {
      body.classList.add('accessibility-highlight-links');
    } else {
      body.classList.remove('accessibility-highlight-links');
    }

    // Grayscale
    if (newSettings.grayscale) {
      body.classList.add('accessibility-grayscale');
    } else {
      body.classList.remove('accessibility-grayscale');
    }

    // Big cursor
    if (newSettings.bigCursor) {
      body.classList.add('accessibility-big-cursor');
    } else {
      body.classList.remove('accessibility-big-cursor');
    }

    // Readable font
    if (newSettings.readableFont) {
      body.classList.add('accessibility-readable-font');
    } else {
      body.classList.remove('accessibility-readable-font');
    }

    // Line height
    body.style.setProperty('--accessibility-line-height', `${newSettings.lineHeight}%`);

    // Letter spacing
    body.style.setProperty('--accessibility-letter-spacing', `${newSettings.letterSpacing}px`);
  }, []);

  // Update and save settings
  const updateSettings = (key: keyof AccessibilitySettings, value: number | boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibilitySettings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  // Reset all settings
  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibilitySettings');
    applySettings(defaultSettings);
  };

  const buttonClass = (isActive: boolean) =>
    `flex flex-col items-center justify-center gap-2 p-3 rounded-lg border transition-all duration-200 ${
      isActive
        ? 'bg-primary text-primary-foreground border-primary shadow-gold'
        : 'bg-card hover:bg-accent/10 border-border hover:border-primary/50'
    }`;

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[100] w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-gold-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="פתח תפריט נגישות"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      {/* Widget Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[101]"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-24 left-6 z-[102] w-80 max-h-[70vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-gold-lg"
              role="dialog"
              aria-label="הגדרות נגישות"
            >
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-primary" />
                  <h2 className="font-bold text-lg">נגישות</h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="סגור תפריט נגישות"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                {/* Font Size */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">גודל טקסט: {settings.fontSize}%</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateSettings('fontSize', Math.max(80, settings.fontSize - 10))}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                      aria-label="הקטן טקסט"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-200"
                        style={{ width: `${((settings.fontSize - 80) / 70) * 100}%` }}
                      />
                    </div>
                    <button
                      onClick={() => updateSettings('fontSize', Math.min(150, settings.fontSize + 10))}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors"
                      aria-label="הגדל טקסט"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Toggle Buttons Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* High Contrast */}
                  <button
                    onClick={() => updateSettings('highContrast', !settings.highContrast)}
                    className={buttonClass(settings.highContrast)}
                    aria-pressed={settings.highContrast}
                  >
                    <Contrast className="w-6 h-6" />
                    <span className="text-xs font-medium">ניגודיות גבוהה</span>
                  </button>

                  {/* Highlight Links */}
                  <button
                    onClick={() => updateSettings('highlightLinks', !settings.highlightLinks)}
                    className={buttonClass(settings.highlightLinks)}
                    aria-pressed={settings.highlightLinks}
                  >
                    <Link2 className="w-6 h-6" />
                    <span className="text-xs font-medium">הדגש קישורים</span>
                  </button>

                  {/* Grayscale */}
                  <button
                    onClick={() => updateSettings('grayscale', !settings.grayscale)}
                    className={buttonClass(settings.grayscale)}
                    aria-pressed={settings.grayscale}
                  >
                    <Eye className="w-6 h-6" />
                    <span className="text-xs font-medium">גווני אפור</span>
                  </button>

                  {/* Big Cursor */}
                  <button
                    onClick={() => updateSettings('bigCursor', !settings.bigCursor)}
                    className={buttonClass(settings.bigCursor)}
                    aria-pressed={settings.bigCursor}
                  >
                    <MousePointer2 className="w-6 h-6" />
                    <span className="text-xs font-medium">סמן גדול</span>
                  </button>

                  {/* Readable Font */}
                  <button
                    onClick={() => updateSettings('readableFont', !settings.readableFont)}
                    className={buttonClass(settings.readableFont)}
                    aria-pressed={settings.readableFont}
                  >
                    <Type className="w-6 h-6" />
                    <span className="text-xs font-medium">פונט קריא</span>
                  </button>
                </div>

                {/* Line Height */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">גובה שורה: {settings.lineHeight}%</label>
                  <input
                    type="range"
                    min="100"
                    max="200"
                    step="10"
                    value={settings.lineHeight}
                    onChange={(e) => updateSettings('lineHeight', parseInt(e.target.value))}
                    className="w-full accent-primary"
                    aria-label="גובה שורה"
                  />
                </div>

                {/* Letter Spacing */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">מרווח אותיות: {settings.letterSpacing}px</label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="0.5"
                    value={settings.letterSpacing}
                    onChange={(e) => updateSettings('letterSpacing', parseFloat(e.target.value))}
                    className="w-full accent-primary"
                    aria-label="מרווח אותיות"
                  />
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full py-3 px-4 rounded-lg bg-muted hover:bg-destructive/10 hover:text-destructive border border-border hover:border-destructive/30 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="font-medium">איפוס הגדרות</span>
                </button>
              </div>

              {/* Footer */}
              <div className="border-t border-border p-3 text-center">
                <p className="text-xs text-muted-foreground">
                  אתר נגיש לפי תקן WCAG 2.1
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccessibilityWidget;
