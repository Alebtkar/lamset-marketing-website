
import { motion } from "framer-motion";
import { Instagram, Facebook, Video } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "TikTok", icon: Video, url: "https://tiktok.com" },
  ];

  return (
    <footer className={`bg-card border-t border-border py-12 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-4"
          >
            {t('companyName')}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground mb-6 max-w-md mx-auto"
          >
            {t('companySlogan')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 space-x-reverse mb-8"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                >
                  <IconComponent className="w-5 h-5 text-primary" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-border pt-6 space-y-2"
          >
            <p className="text-sm text-muted-foreground">
              © 2024 {t('companyName')}. {t('allRightsReserved')}
            </p>
            <p className="text-sm text-muted-foreground">
              <a 
                href="https://www.ebtkar.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {t('builtBy')}
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
