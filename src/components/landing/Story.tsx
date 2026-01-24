import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";
import petCuddle from "@/assets/pet-cuddle.jpg";

const Story = () => {
  return (
    <section className="py-20 md:py-28 bg-teal relative overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 rotate-180">
        <svg 
          viewBox="0 0 1440 80" 
          className="w-full h-[40px] md:h-[60px]" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,30 Q360,70 720,40 T1440,60 L1440,80 L0,80 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-10">
        <svg viewBox="0 0 300 500" className="w-full h-full" preserveAspectRatio="none">
          <path 
            d="M300,0 Q100,100 200,250 Q300,400 100,500 L0,500 L0,0 Z" 
            fill="white"
          />
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative inline-block">
              <img 
                src={petCuddle} 
                alt="A person cuddling with their beloved cat" 
                className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
              {/* Video play button overlay */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform group">
                <Play className="w-8 h-8 text-teal ml-1 group-hover:text-primary transition-colors" />
              </button>
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-foreground shadow-lg whitespace-nowrap">
                Watch our story
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="inline-block text-sm font-bold text-white/80 uppercase tracking-widest mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              We're here to support you all the way!
            </h2>
            
            <div className="space-y-4 text-lg text-white/90 leading-relaxed mb-8">
              <p>
                We know the worry when your dog skips a meal or your cat seems off. 
                We've sat in vet waiting rooms trying to remember when the last 
                vaccination was.
              </p>
              <p>
                That's why we built PetPal—a gentle, caring app that takes the stress 
                out of pet parenting. Our experts support line is available 7 days 
                a week to help you during any pet emergency.
              </p>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-teal hover:bg-white/90 font-bold rounded-full px-8"
            >
              <Heart className="w-5 h-5" />
              Meet PetPal
            </Button>
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
            d="M0,40 Q360,10 720,50 T1440,30 L1440,80 L0,80 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Story;
