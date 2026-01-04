import { Button } from "@/components/ui/button";
import { Apple, Bell, Heart } from "lucide-react";
import heroPets from "@/assets/hero-pets.jpg";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src={heroPets} 
          alt="" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple/15 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-muted/15 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Give your pet the care they deserve,{" "}
            <span className="text-primary">without the stress.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Start today—it only takes a minute to set up. Your pet (and future you) will thank you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="hero" size="lg" className="group">
              <Apple className="w-5 h-5" />
              Download on App Store
            </Button>
            <Button variant="hero-outline" size="lg">
              <Bell className="w-5 h-5" />
              Join the Waitlist
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Heart className="w-4 h-4 text-purple fill-purple" />
            <span className="text-sm">From one pet parent to another, you've got this.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
