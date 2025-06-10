import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, Facebook, Video } from "lucide-react";

export function Contact() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/218000000000", "_blank");
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com", color: "hover:text-pink-500" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com", color: "hover:text-blue-600" },
    { name: "TikTok", icon: Video, url: "https://tiktok.com", color: "hover:text-red-500" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            تواصل معنا
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            هل أنت مستعد لبدء رحلتك في التسويق الرقمي؟ تواصل معنا الآن وسنكون سعداء لمساعدتك
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-foreground">
                  ابدأ مشروعك معنا اليوم
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    تواصل معنا عبر الواتساب
                  </Button>
                </motion.div>

                <div className="flex justify-center space-x-6 space-x-reverse pt-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 bg-muted rounded-full transition-all duration-300 ${social.color} hover:shadow-lg`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.a>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-center text-muted-foreground border-t pt-6"
                >
                  <p className="leading-relaxed">
                    نحن هنا لمساعدتك في تحقيق أهدافك التسويقية
                    <br />
                    فريقنا المتخصص جاهز للرد على استفساراتك على مدار الساعة
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
