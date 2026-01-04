import { UserPlus, Activity, BellRing, ArrowRight } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Getting Started
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three simple steps to happier pets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No complicated setup, no learning curve. Just download and go.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-primary/10" />
              )}
              
              {/* Step number and icon */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-2xl bg-card shadow-card flex items-center justify-center group-hover:shadow-elevated transition-shadow border border-border/50">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple text-white font-bold flex items-center justify-center text-sm shadow-soft">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
