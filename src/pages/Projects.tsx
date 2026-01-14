import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { projects, categories } from '../data/projects';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('הכל');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'הכל'
    ? projects
    : projects.filter(p => p.category === activeCategory);

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              העבודות שלנו
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              גלריית <span className="text-gradient-gold">הפרויקטים</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              צפו בפרויקטים שהשלמנו בהצלחה בנתיבות ואזור הדרום. כל פרויקט משקף את המחויבות שלנו לאיכות, מקצועיות ושביעות רצון הלקוח
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-gold'
                    : 'bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-muted-foreground mb-8"
          >
            מציג {filteredProjects.length} פרויקטים
          </motion.p>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedImage(project.id)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-muted"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 right-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                לא נמצאו פרויקטים בקטגוריה זו
              </p>
            </motion.div>
          )}
        </div>
      </section>

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
    </>
  );
};

export default Projects;
