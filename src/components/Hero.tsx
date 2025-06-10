
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/218000000000", "_blank");
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20" />
      
      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-20 h-20 bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-blue-300/20 dark:bg-blue-700/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            لمسة الإعلانات
            <br />
            <span className="text-2xl md:text-4xl text-foreground">شريكك في التسويق الذكي</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            نحن نساعد علامتك التجارية في الوصول لجمهورها بطريقة احترافية وحديثة
            <br />
            مع أحدث استراتيجيات التسويق الرقمي والتصميم الإبداعي
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              تواصل معنا عبر الواتساب
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 text-lg rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              اكتشف خدماتنا
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
