import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, categories } from '@/data/projects';

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('הכל');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [centeredImageId, setCenteredImageId] = useState<number | null>(null);
  const imageRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Filter projects by category and take only first 6
  const filteredProjects = activeCategory === 'הכל'
    ? projects.slice(0, 6)
    : projects.filter(p => p.category === activeCategory).slice(0, 6);

  const currentImageIndex = selectedImage !== null
    ? filteredProjects.findIndex(p => p.id === selectedImage)
    : -1;

  const navigateImage = (direction: 'prev' | 'next') => {
    if (currentImageIndex === -1) return;
    const newIndex = direction === 'next'
      ? (currentImageIndex + 1) % filteredProjects.length
      : (currentImageIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedImage(filteredProjects[newIndex].id);
  };

  // Track which image is centered on mobile
  useEffect(() => {
    // Only run on mobile devices
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setCenteredImageId(null);
      return;
    }

    const checkCenteredImage = () => {
      let closestToCenter: { id: number; distance: number } | null = null;

      filteredProjects.forEach((project) => {
        const element = imageRefs.current[project.id];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(viewportCenter - elementCenter);
        
        // Check if element is visible and in viewport
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && (!closestToCenter || distanceFromCenter < closestToCenter.distance)) {
          closestToCenter = { id: project.id, distance: distanceFromCenter };
        }
      });

      // Update only if we found a centered element within reasonable distance
      if (closestToCenter && closestToCenter.distance < 250) {
        setCenteredImageId(closestToCenter.id);
      } else {
        setCenteredImageId(null);
      }
    };

    // Check on scroll and resize
    window.addEventListener('scroll', checkCenteredImage, { passive: true });
    window.addEventListener('resize', checkCenteredImage);
    
    // Initial check
    checkCenteredImage();

    return () => {
      window.removeEventListener('scroll', checkCenteredImage);
      window.removeEventListener('resize', checkCenteredImage);
    };
  }, [filteredProjects]);

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            העבודות שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            גלריית <span className="text-gradient-gold">פרויקטים</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            צפו בפרויקטים שהשלמנו בהצלחה בנתיבות ואזור הדרום. כל פרויקט משקף את המחויבות שלנו לאיכות, מקצועיות ושביעות רצון הלקוח
          </p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-gold'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isCentered = centeredImageId === project.id;
              return (
              <motion.div
                key={project.id}
                ref={(el) => {
                  imageRefs.current[project.id] = el;
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(project.id)}
                className={`group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-muted transition-all duration-500 ${
                  isCentered 
                    ? 'md:scale-100 scale-[1.05] shadow-2xl shadow-primary/60 ring-4 ring-primary/40 z-10' 
                    : 'md:scale-100 scale-100'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    isCentered 
                      ? 'md:group-hover:scale-110 scale-110' 
                      : 'group-hover:scale-110'
                  }`}
                />
                {/* Center overlay effect with glow - only on mobile */}
                {isCentered && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-primary/50 via-primary/25 to-transparent md:hidden"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 border-4 border-primary/60 rounded-2xl md:hidden pointer-events-none"
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-full text-xs font-medium md:hidden shadow-lg"
                    >
                      לחץ לצפייה
                    </motion.div>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`absolute bottom-0 right-0 left-0 p-6 transition-all duration-300 ${
                  isCentered 
                    ? 'md:translate-y-4 md:opacity-0 translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xs font-medium bg-primary/20 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-white/70 text-xs">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-gold hover:scale-105"
          >
            <span>צפו בכל הפרויקטים</span>
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 md:top-6 left-4 md:left-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="סגור"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-2 md:right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="הבא"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-2 md:left-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="הקודם"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Image and Info */}
            <div className="w-full max-w-6xl flex flex-col items-center">
              <motion.img
                key={selectedImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={filteredProjects.find(p => p.id === selectedImage)?.image}
                alt=""
                className="max-w-full max-h-[70vh] md:max-h-[75vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center text-white px-4"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  {filteredProjects.find(p => p.id === selectedImage)?.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-2xl mx-auto">
                  {filteredProjects.find(p => p.id === selectedImage)?.description}
                </p>
                <div className="flex items-center justify-center gap-3 mt-3">
                  <span className="text-primary text-xs md:text-sm font-medium bg-primary/20 px-3 py-1 rounded-full">
                    {filteredProjects.find(p => p.id === selectedImage)?.category}
                  </span>
                  <span className="text-white/60 text-xs md:text-sm">
                    {filteredProjects.find(p => p.id === selectedImage)?.location}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 md:bottom-6 right-1/2 translate-x-1/2 text-white/60 text-sm">
              {currentImageIndex + 1} / {filteredProjects.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
