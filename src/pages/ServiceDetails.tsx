
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Video, Image, Palette, ArrowLeft, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate, useParams } from "react-router-dom";

const iconMap = {
  megaphone: Megaphone,
  video: Video,
  image: Image,
  palette: Palette,
};

const serviceDetails = {
  'الإعلانات-الممولة': {
    ar: {
      features: [
        "استهداف دقيق للجمهور المناسب",
        "تحليل شامل للمنافسين",
        "تصميم إعلانات جذابة ومؤثرة",
        "متابعة يومية للحملات",
        "تقارير تفصيلية للأداء",
        "تحسين مستمر للنتائج"
      ],
      process: [
        "دراسة السوق والجمهور المستهدف",
        "وضع استراتيجية الحملة الإعلانية",
        "تصميم المحتوى الإعلاني",
        "إطلاق الحملة ومتابعتها",
        "تحليل النتائج وتقديم التقارير"
      ]
    },
    en: {
      features: [
        "Precise audience targeting",
        "Comprehensive competitor analysis",
        "Attractive and impactful ad design",
        "Daily campaign monitoring",
        "Detailed performance reports",
        "Continuous optimization"
      ],
      process: [
        "Market and target audience research",
        "Campaign strategy development",
        "Creative content design",
        "Campaign launch and monitoring",
        "Results analysis and reporting"
      ]
    }
  },
  // Add other services details...
};

export default function ServiceDetails() {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const service = services.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === id);
  const details = serviceDetails[id as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Service not found</h1>
          <Button onClick={() => navigate('/services')}>
            {t('backToServices')}
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon];
  const ArrowIcon = language === 'ar' ? ArrowRight : ArrowLeft;

  const handleWhatsAppClick = () => {
    const message = language === 'ar' 
      ? `مرحباً، أريد الاستفسار عن خدمة ${service.title}`
      : `Hello, I want to inquire about ${service.title} service`;
    window.open(`https://wa.me/218000000000?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className={`min-h-screen bg-background pt-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate('/services')}
            className="flex items-center gap-2"
          >
            <ArrowIcon className="w-4 h-4" />
            {t('backToServices')}
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card border-2 border-primary/20">
              <CardHeader className="text-center pb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto mb-6 p-6 bg-primary/10 rounded-full w-fit"
                >
                  <IconComponent className="w-12 h-12 text-primary" />
                </motion.div>
                <CardTitle className="text-3xl mb-4 text-foreground">
                  {service.title}
                </CardTitle>
                <div className="text-2xl font-semibold text-primary mb-4">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg rounded-full"
                >
                  {t('whatsappContact')}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {details && (
              <>
                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {language === 'ar' ? 'مميزات الخدمة' : 'Service Features'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {details[language].features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      {language === 'ar' ? 'خطوات العمل' : 'Work Process'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {details[language].process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
