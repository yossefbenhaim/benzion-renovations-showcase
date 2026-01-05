import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
