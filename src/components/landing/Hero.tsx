import { Button } from "@/components/ui/button";
import { Apple, Bell } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import WaitlistDialog from "@/components/landing/WaitlistDialog";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-light/40 via-background to-background -z-10" />
      
      {/* Decorative shapes */}
      <div className="absolute top-32 left-10 w-64 h-64 bg-purple/15 rounded-full blur-3xl -z-10" />
      <div className="absolute top-48 right-10 w-80 h-80 bg-purple-muted/20 rounded-full blur-3xl -z-10" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-purple-light px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-purple rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-purple-dark">Now available on iOS</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
              All your pet's care,{" "}
              <span className="text-primary">in one loving home.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 text-balance">
              Stress-free pet parenting starts here. Track health, never miss meds, 
              and make vet visits a breeze—all in one beautiful app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <Button variant="hero" size="lg" className="group">
                <Apple className="w-5 h-5" />
                Download on App Store
              </Button>
              <WaitlistDialog variant="hero-outline" size="lg">
                <Button variant="hero-outline" size="lg">
                  <Bell className="w-5 h-5" />
                  Join the Waitlist
                </Button>
              </WaitlistDialog>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Built by pet parents in the UK for pet parents everywhere. 🐾
            </p>
          </div>
          
          {/* Phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up-delayed">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple/25 to-purple-muted/20 rounded-[3rem] blur-2xl scale-90" />
              <img 
                src={appMockup} 
                alt="PetPal app showing a pet profile with health tracking" 
                className="relative w-[280px] md:w-[320px] lg:w-[360px] animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
