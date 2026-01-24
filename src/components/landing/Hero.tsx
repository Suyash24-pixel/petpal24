import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";
import WaitlistDialog from "@/components/landing/WaitlistDialog";

const Hero = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden">
      {/* Coral background with wave */}
      <div className="absolute inset-0 bg-primary -z-10" />
      
      {/* Decorative curved shape */}
      <div className="absolute top-20 right-0 w-[60%] h-[80%] opacity-20 -z-5">
        <svg viewBox="0 0 500 500" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,100 Q150,50 300,100 T500,100 L500,500 L0,500 Z" 
            fill="currentColor" 
            className="text-white/20"
          />
        </svg>
      </div>
      
      {/* Large decorative swoosh */}
      <div className="absolute top-32 right-[-10%] w-[70%] h-[90%] -z-5">
        <svg viewBox="0 0 400 600" className="w-full h-full opacity-15" preserveAspectRatio="none">
          <path 
            d="M400,0 Q200,150 350,300 Q500,450 300,600 L400,600 L400,0 Z" 
            fill="currentColor" 
            className="text-white"
          />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-[1.1] mb-6 tracking-tight">
              The #1 pet care app
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              The app 100% dedicated to your pet's health. Simple reminders, 
              tailored to your pet's breed & age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-lg"
              >
                <Apple className="w-5 h-5" />
                Download App
              </Button>
              <WaitlistDialog variant="hero-outline" size="lg">
                <Button 
                  variant="ghost" 
                  size="xl" 
                  className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground font-bold"
                >
                  <Play className="w-5 h-5" />
                  Watch Trailer
                </Button>
              </WaitlistDialog>
            </div>
            
            {/* App of the day badge */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🏆</span>
                <span className="text-sm font-semibold text-primary-foreground">
                  App of the Day
                </span>
              </div>
            </div>
          </div>
          
          {/* Phone mockups */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up-delayed pb-8">
            <div className="relative">
              {/* Main phone */}
              <img 
                src={appMockup} 
                alt="PetPal app showing a pet profile with health tracking" 
                className="relative w-[260px] md:w-[300px] lg:w-[340px] animate-float drop-shadow-2xl z-10"
              />
              {/* Secondary phone (slightly behind) */}
              <img 
                src={appMockup} 
                alt="" 
                className="absolute top-8 -right-16 md:-right-20 w-[220px] md:w-[260px] lg:w-[290px] opacity-80 animate-float-delayed drop-shadow-xl -z-0 rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave separator */}
      <div className="relative mt-8 lg:mt-0">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,40 Q360,100 720,60 T1440,80 L1440,120 L0,120 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
