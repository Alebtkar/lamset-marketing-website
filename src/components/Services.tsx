
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Video, Image, Palette } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const iconMap = {
  megaphone: Megaphone,
  video: Video,
  image: Image,
  palette: Palette,
};

export function Services() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const handleWhatsAppClick = (serviceName: string) => {
    const message = language === 'ar' 
      ? `مرحباً، أريد الاستفسار عن خدمة ${serviceName}`
      : `Hello, I want to inquire about ${serviceName} service`;
    window.open(`https://wa.me/218000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleViewDetails = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className={`py-20 bg-muted/30 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group">
                  <CardHeader className="text-center pb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors"
                    >
                      <IconComponent className="w-8 h-8 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl mb-2 text-foreground">
                      {service.title}
                    </CardTitle>
                    <div className="text-lg font-semibold text-primary mb-2">
                      {t('startingFrom')} {service.price}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleViewDetails(serviceId)}
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full transition-all duration-300"
                        variant="secondary"
                      >
                        {t('viewDetails')}
                      </Button>
                      <Button
                        onClick={() => handleWhatsAppClick(service.title)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                        variant="default"
                      >
                        {t('orderNow')}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
