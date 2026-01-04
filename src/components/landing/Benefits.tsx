import { Bell, Stethoscope, Heart, Camera } from "lucide-react";

const benefits = [
  {
    icon: Bell,
    title: "Never forget meds again",
    description: "Gentle reminders for medications, flea treatments, and vaccinations. We'll keep track so you don't have to worry.",
    color: "bg-purple-light text-purple-dark",
  },
  {
    icon: Stethoscope,
    title: "Vet visits made easy",
    description: "All your pet's health notes and history in one place. Share instantly with your vet—no more forgotten details.",
    color: "bg-purple/20 text-purple-dark",
  },
  {
    icon: Heart,
    title: "Happy, healthy routines",
    description: "Track walks, meals, and playtime to spot changes early. Small patterns can reveal big insights.",
    color: "bg-purple-light text-purple-dark",
  },
  {
    icon: Camera,
    title: "Memories you'll never lose",
    description: "Store cute photos, milestones, and funny moments in a beautiful timeline you'll treasure forever.",
    color: "bg-purple/20 text-purple-dark",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 scroll-mt-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why Pet Parents Love Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pet care that feels like a warm hug
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
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
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
