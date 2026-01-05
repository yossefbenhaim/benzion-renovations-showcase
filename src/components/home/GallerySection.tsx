import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'שיפוץ דירה בתל אביב',
    category: 'דירות',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
  {
    id: 2,
    title: 'מטבח מודרני',
    category: 'מטבחים',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 3,
    title: 'חדר אמבטיה יוקרתי',
    category: 'אמבטיות',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    id: 4,
    title: 'סלון מעוצב',
    category: 'דירות',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
  },
  {
    id: 5,
    title: 'פנטהאוז מפואר',
    category: 'דירות',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
  },
  {
    id: 6,
    title: 'מטבח כפרי',
    category: 'מטבחים',
    image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&q=80',
  },
];

const categories = ['הכל', 'דירות', 'מטבחים', 'אמבטיות'];

const GallerySection = () => {
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
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            העבודות שלנו
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            גלריית <span className="text-gradient-gold">פרויקטים</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            צפו בפרויקטים שהשלמנו בהצלחה ותתרשמו מרמת הגימור והאיכות שלנו
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-gold'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

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
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 left-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              className="absolute right-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              className="absolute left-6 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={filteredProjects.find(p => p.id === selectedImage)?.image}
              alt=""
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
