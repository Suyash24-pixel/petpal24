import { Bell, Stethoscope, Heart, Camera } from "lucide-react";

const benefits = [
  {
    icon: Bell,
    title: "Never forget meds again",
    description: "Gentle reminders for medications, flea treatments, and vaccinations. We'll keep track so you don't have to worry.",
    color: "bg-coral-light text-coral-dark",
  },
  {
    icon: Stethoscope,
    title: "Vet visits made easy",
    description: "All your pet's health notes and history in one place. Share instantly with your vet—no more forgotten details.",
    color: "bg-teal-light text-teal",
  },
  {
    icon: Heart,
    title: "Happy, healthy routines",
    description: "Track walks, meals, and playtime to spot changes early. Small patterns can reveal big insights.",
    color: "bg-coral-light text-coral-dark",
  },
  {
    icon: Camera,
    title: "Memories you'll never lose",
    description: "Store cute photos, milestones, and funny moments in a beautiful timeline you'll treasure forever.",
    color: "bg-teal-light text-teal",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-cream scroll-mt-24">
      <div className="container">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Why Pet Parents Love Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
            An easy, fun & engaging way<br className="hidden md:block" /> to care for your pet!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We built PetPal to make your life easier and your pet's life happier. 
            Because they deserve the very best.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-7 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border/30"
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
