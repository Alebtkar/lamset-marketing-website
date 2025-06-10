
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Video, Image, Palette } from "lucide-react";
import { services } from "@/data/services";
import { Service } from "@/types";

const iconMap = {
  megaphone: Megaphone,
  video: Video,
  image: Image,
  palette: Palette,
};

export function Services() {
  const handleWhatsAppClick = (serviceName: string) => {
    const message = `مرحباً، أريد الاستفسار عن خدمة ${serviceName}`;
    window.open(`https://wa.me/218000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            خدماتنا المتميزة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التسويقية والإبداعية لتحقيق أهدافك التجارية
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
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
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                      variant="default"
                    >
                      اطلب الخدمة الآن
                    </Button>
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
