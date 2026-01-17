import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/home/HeroSection';
import AboutOwnerSection from '@/components/home/AboutOwnerSection';
import ParallaxSection from '@/components/home/ParallaxSection';
import ServicesSection from '@/components/home/ServicesSection';
import GallerySection from '@/components/home/GallerySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ProcessSection from '@/components/home/ProcessSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  const baseUrl = 'https://bentzionprojects.byclick.co.il';
  
  return (
    <>
      <Helmet>
        <title>שיפוצים בנתיבות | בן ציון פרויקטים - קבלן גמרים מקצועי בדרום</title>
        <meta name="description" content="קבלן שיפוצים בנתיבות ✓ שיפוץ דירה קומפלט ✓ ניהול פרויקטים ✓ 15+ שנות ניסיון באזור הדרום ✓ אופקים, שדרות ואשקלון ✓ התקשרו עכשיו: 050-512-9076" />
        <meta name="keywords" content="שיפוצים נתיבות, קבלן גמרים נתיבות, שיפוץ דירה נתיבות, פרויקטים דרום, שיפוצים אופקים, שיפוצים שדרות, ניהול פרויקט שיפוץ, קבלן שיפוצים בדרום, שיפוץ מטבח נתיבות, שיפוץ חדר רחצה נתיבות" />
        <link rel="canonical" href={`${baseUrl}/`} />
        <meta property="og:title" content="שיפוצים בנתיבות | בן ציון פרויקטים - קבלן גמרים מקצועי" />
        <meta property="og:description" content="קבלן שיפוצים מקצועי בנתיבות ואזור הדרום. 15+ שנות ניסיון בניהול פרויקטים. התקשרו: 050-512-9076" />
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="he_IL" />
      </Helmet>
      <HeroSection />
      <AboutOwnerSection />
      <ParallaxSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
