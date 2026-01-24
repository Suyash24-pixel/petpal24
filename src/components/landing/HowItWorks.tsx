import { UserPlus, Activity, BellRing } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Create your pet's profile",
    description: "Add their name, photo, age, and key details. It takes less than a minute!",
  },
  {
    number: "2",
    icon: Activity,
    title: "Track health, care & walks",
    description: "Log food, meds, vet visits, and GPS walks—all in one beautiful place.",
  },
  {
    number: "3",
    icon: BellRing,
    title: "Relax with gentle reminders",
    description: "PetPal nudges you so you never miss what matters. Peace of mind, delivered.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M0,0 Q200,150 100,300 Q0,450 200,600 L400,600 L400,0 Z" 
            fill="white"
          />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone mockup on left */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="PetPal app interface" 
                className="w-[280px] md:w-[320px] drop-shadow-2xl animate-float"
              />
            </div>
          </div>
          
          {/* Steps on right */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-bold text-primary-foreground/80 uppercase tracking-widest mb-4">
              Getting Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-12 tracking-tight">
              Three simple steps to happier pets
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5 group">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-primary-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            d="M0,20 Q360,60 720,30 T1440,50 L1440,80 L0,80 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;
