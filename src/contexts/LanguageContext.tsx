
import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "خدماتنا",
    testimonials: "آراء العملاء",
    contact: "تواصل معنا",
    
    // Company name
    companyName: "لمسة للإعلانات والتسويق",
    companySlogan: "شريكك الموثوق في رحلة النجاح التسويقي والإبداعي",
    
    // Services
    paidAds: "الإعلانات الممولة",
    paidAdsDesc: "نساعدك في إطلاق حملات إعلانية ناجحة على فيسبوك وإنستغرام لزيادة المبيعات والوصول للجمهور المستهدف.",
    ugcVideos: "تصميم فيديوهات UGC",
    ugcVideosDesc: "نصنع فيديوهات جذابة تحاكي المحتوى الذي يصنعه المستخدم لزيادة التفاعل والثقة في علامتك التجارية.",
    socialMediaDesign: "تصميم بوستات السوشيال ميديا",
    socialMediaDesignDesc: "تصاميم جذابة واحترافية لمنصات التواصل الاجتماعي تعكس هوية علامتك التجارية وتجذب العملاء.",
    logoDesign: "تصميم اللوقوات",
    logoDesignDesc: "ابتكار هوية بصرية مميزة تعكس علامتك التجارية وتترك انطباعاً قوياً لدى عملائك.",
    
    // Common
    startingFrom: "يبدأ من",
    currency: "د.ل",
    orderNow: "اطلب الخدمة الآن",
    contactUs: "تواصل معنا",
    viewDetails: "عرض التفاصيل",
    backToServices: "العودة للخدمات",
    
    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "هل أنت مستعد لبدء رحلتك في التسويق الرقمي؟ تواصل معنا الآن وسنكون سعداء لمساعدتك",
    startProjectToday: "ابدأ مشروعك معنا اليوم",
    whatsappContact: "تواصل معنا عبر الواتساب",
    
    // Footer
    allRightsReserved: "جميع الحقوق محفوظة.",
    builtBy: "تم التطوير بواسطة الإبتكار التقني",
    
    // Services page
    servicesTitle: "خدماتنا المتميزة",
    servicesSubtitle: "نقدم مجموعة شاملة من الخدمات التسويقية والإبداعية لتحقيق أهدافك التجارية",
  },
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    testimonials: "Testimonials",
    contact: "Contact",
    
    // Company name
    companyName: "Lamsa Advertising & Marketing",
    companySlogan: "Your trusted partner in marketing and creative success",
    
    // Services
    paidAds: "Paid Advertising",
    paidAdsDesc: "We help you launch successful advertising campaigns on Facebook and Instagram to increase sales and reach your target audience.",
    ugcVideos: "UGC Video Design",
    ugcVideosDesc: "We create engaging videos that mimic user-generated content to increase engagement and trust in your brand.",
    socialMediaDesign: "Social Media Post Design",
    socialMediaDesignDesc: "Attractive and professional designs for social media platforms that reflect your brand identity and attract customers.",
    logoDesign: "Logo Design",
    logoDesignDesc: "Creating a distinctive visual identity that reflects your brand and leaves a strong impression on your customers.",
    
    // Common
    startingFrom: "Starting from",
    currency: "LYD",
    orderNow: "Order Now",
    contactUs: "Contact Us",
    viewDetails: "View Details",
    backToServices: "Back to Services",
    
    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Are you ready to start your digital marketing journey? Contact us now and we'll be happy to help you",
    startProjectToday: "Start Your Project Today",
    whatsappContact: "Contact us via WhatsApp",
    
    // Footer
    allRightsReserved: "All rights reserved.",
    builtBy: "Built by Ebtkar Tqni",
    
    // Services page
    servicesTitle: "Our Distinguished Services",
    servicesSubtitle: "We offer a comprehensive range of marketing and creative services to achieve your business goals",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
