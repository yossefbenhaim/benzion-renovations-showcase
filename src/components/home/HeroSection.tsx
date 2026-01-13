import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RotatingText from '@/components/ui/rotating-text';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import startVideo from '@/assets/start.mp4';
import endVideo from '@/assets/end.mp4';

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
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isStartVideo ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={startVideo} type="video/mp4" />
      </video>

      {/* Video Background - End */}
      <video
        ref={endVideoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isStartVideo ? 'opacity-0' : 'opacity-100'
        }`}
        muted
        playsInline
        preload="auto"
      >
        <source src={endVideo} type="video/mp4" />
      </video>

      {/* Light overlay for better text readability */}
      <div className="flex flex-col justify-between py-3 w-full relative z-10 h-[100vh]  ">

        {/* Main Heading */}
        <div className="flex flex-col justify-end px-4 gap-12 h-[75%] ">

          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl rtl font-black leading-tight"
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
            <p className="flex items-center gap-2 flex-wrap">
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
            className="flex flex-row gap-3 sm:gap-4"
          >
            <Link to="/contact">
              <Button
                size="default"
                className="bg-gradient-gold text-black font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 shadow-2xl hover:shadow-gold-lg transition-all hover:scale-105 hover:-translate-y-1"
              >
                צור קשר
              </Button>
            </Link>
            <Button
              size="default"
              variant="outline"
              className="bg-black/30 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 backdrop-blur-sm transition-all hover:scale-105"
            >
              עבודות
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 100 }}
          className="flex flex-col justify-center items-center  py-3 w-full "
        >
          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-[80%] md:gap-6 backdrop-blur-md bg-white/5 p-3 sm:p-4 md:p-6 rounded-2xl border border-white/10">
            {[
              { number: '15+', label: 'שנות ניסיון' },
              { number: '500+', label: 'פרויקטים' },
              { number: '100%', label: 'לקוחות מרוצים' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, type: 'spring' }}
                className="text-center"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gradient-gold mb-0.5 sm:mb-1 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium whitespace-nowrap">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats - Fixed at bottom on mobile */}


        {/* Scroll indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-24"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">גלול למטה</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;
