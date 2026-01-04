import { Syringe, MapPin, Users, MessageCircle, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Syringe,
    title: "Health Tracking",
    description: "Keep all vaccinations, medications, and vet notes in one organised place. Never miss an appointment again.",
    badge: null,
  },
  {
    icon: MapPin,
    title: "Walk & Activity Tracking",
    description: "Map your routes, track distances, and see your pet's exercise patterns over time. Perfect for active pups!",
    badge: null,
  },
  {
    icon: Users,
    title: "Shared Caregiving",
    description: "Invite family members, dog walkers, or pet sitters. Everyone stays in sync with your pet's care.",
    badge: null,
  },
  {
    icon: MessageCircle,
    title: "Community & Tips",
    description: "Connect with other pet parents, get breed-specific advice, and discover pet-friendly events nearby.",
    badge: null,
  },
  {
    icon: Shield,
    title: "Insurance Integration",
    description: "Connect your pet insurance for easy claims and policy tracking. Manage everything in one place.",
    badge: "Coming Soon",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 scroll-mt-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Everything you need, nothing you don't
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From daily care to long-term health tracking, PetPal has you covered.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 border border-border/50 group"
            >
              {feature.badge && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-purple/20 text-purple-dark px-2.5 py-1 rounded-full">
                  {feature.badge}
                </span>
              )}
              
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
