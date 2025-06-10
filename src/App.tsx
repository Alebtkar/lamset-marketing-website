
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import ServicesPage from "@/pages/Services";
import ServiceDetails from "@/pages/ServiceDetails";

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Testimonials />
    <Contact />
  </>
);

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <LanguageProvider>
      <TooltipProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/service/:id" element={<ServiceDetails />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <Toaster />
            <Sonner />
          </div>
        </Router>
      </TooltipProvider>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
