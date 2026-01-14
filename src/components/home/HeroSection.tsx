import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RotatingText from '@/components/ui/rotating-text';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const HeroSection = () => {
  const [isStartVideo, setIsStartVideo] = useState(true);
  const startVideoRef = useRef<HTMLVideoElement>(null);
  const endVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startVideo = startVideoRef.current;
    const endVideo = endVideoRef.current;
    if (!startVideo || !endVideo) return;

    const handleStartEnded = () => {
      setIsStartVideo(false);
      endVideo.currentTime = 0;
      endVideo.play();
    };

    const handleEndEnded = () => {
      setIsStartVideo(true);
      startVideo.currentTime = 0;
      startVideo.play();
    };

    startVideo.addEventListener('ended', handleStartEnded);
    endVideo.addEventListener('ended', handleEndEnded);

    // טען את שני הסרטונים מראש
    startVideo.load();
    endVideo.load();

    return () => {
      startVideo.removeEventListener('ended', handleStartEnded);
      endVideo.removeEventListener('ended', handleEndEnded);
    };
  }, []);

  return (
    <section className="relative w-[100vw] min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background - Start */}
      <video
        ref={startVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isStartVideo ? 'opacity-100' : 'opacity-0'
          }`}
        autoPlay
        muted
        playsInline
        loop={false}
        preload="auto"
      >
        <source src="https://res.cloudinary.com/dovbwznrj/video/upload/f_auto,q_auto:best,w_1280/start_pqcxxm.mp4" type="video/mp4" />
      </video>

      {/* Video Background - End */}
      <video
        ref={endVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isStartVideo ? 'opacity-0' : 'opacity-100'
          }`}
        muted
        playsInline
        loop={false}
        preload="auto"
      >
        <source src="https://res.cloudinary.com/dovbwznrj/video/upload/f_auto,q_auto:best,w_1280/end_diohnt.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent z-[1]" />

      {/* Light overlay for better text readability */}
      <div className="flex flex-col justify-end pb-40 items-start  w-full relative z-10 h-[100vh] px-4">

        {/* Main Heading */}

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl rtl font-black leading-tight"
        >
          <span className="block text-white drop-shadow-2xl mb-2 md:mb-3">בן ציון</span>
          <span className="block text-gradient-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">פרויקטים</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-2xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed"
        >
          <p className="mb-3 md:mb-4">הופכים כל בית לחלום.</p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-3 md:mb-4">שיפוצים ופרויקטים מקצועיים בנתיבות, אופקים ודרום הארץ</p>
          <p className="flex items-start gap-2 flex-col md:flex-row">
            <span>פרויקטים ברמה הגבוהה ביותר עם</span>

            <RotatingText
              texts={['איכות', 'מקצועיות', 'אחריות מלאה']}
              mainClassName="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-gold text-black font-bold rounded-xl inline-flex shadow-lg text-sm sm:text-base md:text-lg"
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2500}
            />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
          className="flex flex-row gap-3 sm:gap-4 mt-10 "
        >
          <Link to="/contact">
            <Button
              size="default"
              className="bg-gradient-gold text-black font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 shadow-2xl hover:shadow-gold-lg transition-all hover:scale-105 hover:-translate-y-1"
            >
              צור קשר
            </Button>
          </Link>
          <Link to="/projects">
            <Button
              size="default"
              variant="outline"
              className="bg-black/30 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 backdrop-blur-sm transition-all hover:scale-105"
            >
              פרויקטים
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
