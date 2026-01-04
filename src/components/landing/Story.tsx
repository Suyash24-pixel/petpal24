import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import petCuddle from "@/assets/pet-cuddle.jpg";

const Story = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple-light/30 to-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-purple/25 to-purple-muted/15 rounded-3xl blur-2xl scale-95" />
            <img 
              src={petCuddle} 
              alt="A person cuddling with their beloved cat" 
              className="relative rounded-3xl shadow-elevated w-full max-w-md mx-auto"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We're pet parents too
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mb-8">
              <p>
                We know the worry when your dog skips a meal or your cat seems off. 
                We've sat in vet waiting rooms trying to remember when the last 
                vaccination was. We've felt the guilt of a missed flea treatment.
              </p>
              <p>
                That's why we built PetPal—a gentle, caring app that takes the stress 
                out of pet parenting. Because our furry family members deserve 
                organised, loving care. And so do you.
              </p>
              <p className="font-medium text-foreground">
                You're not doing this alone. 💜
              </p>
            </div>
            
            <Button variant="default" size="lg">
              <Heart className="w-5 h-5" />
              Meet PetPal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
