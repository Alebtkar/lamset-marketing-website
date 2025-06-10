
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        className="relative overflow-hidden"
      >
        <span className="text-xs font-medium">
          {language === 'ar' ? 'EN' : 'ع'}
        </span>
      </Button>
    </motion.div>
  );
}
