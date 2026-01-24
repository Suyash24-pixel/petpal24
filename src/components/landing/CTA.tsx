import { Button } from "@/components/ui/button";
import { Apple, Bell, Heart } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import WaitlistDialog from "@/components/landing/WaitlistDialog";

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M400,0 Q200,150 300,300 Q400,450 200,600 L0,600 L0,0 Z" 
            fill="white"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 300 500" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,0 Q150,100 100,250 Q50,400 200,500 L300,500 L300,0 Z" 
            fill="white"
          />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6 tracking-tight">
              Give your pet the care they deserve, without the stress.
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto lg:mx-0">
              Start today—it only takes a minute to set up. Your pet (and future you) will thank you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg rounded-full"
              >
                <Apple className="w-5 h-5" />
                Download on App Store
              </Button>
              <WaitlistDialog variant="hero-outline" size="lg">
                <Button 
                  variant="ghost" 
                  size="xl" 
                  className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold rounded-full"
                >
                  <Bell className="w-5 h-5" />
                  Join Waitlist
                </Button>
              </WaitlistDialog>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/80">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">From one pet parent to another, you've got this.</span>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div className="hidden lg:flex justify-center">
            <img 
              src={appMockup} 
              alt="PetPal app" 
              className="w-[280px] drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-[40px] md:h-[60px]" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,30 Q360,60 720,35 T1440,50 L1440,80 L0,80 Z" 
            fill="hsl(var(--navy))"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTA;
