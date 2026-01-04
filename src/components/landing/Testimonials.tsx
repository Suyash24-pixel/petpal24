import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "PetPal has been a lifesaver! I used to forget Luna's flea treatment all the time. Now I get gentle reminders and our vet is impressed with how organised I am.",
    name: "Sarah M.",
    role: "Dog mum, London",
    avatar: "🐕",
  },
  {
    quote: "As a vet nurse, I wish all my patients' owners used PetPal. The health history feature makes consultations so much smoother. Brilliant app!",
    name: "James K.",
    role: "Vet nurse, Manchester",
    avatar: "🩺",
  },
  {
    quote: "My whole family uses PetPal to look after Mochi. When the cat sitter comes, they can see exactly what she needs. No more long instruction notes!",
    name: "Priya T.",
    role: "Cat mum, Edinburgh",
    avatar: "🐱",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Happy Pet Parents
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by thousands of pet families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our wonderful community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 hover:shadow-card transition-shadow"
            >
              <Quote className="w-8 h-8 text-purple/60 mb-4" />
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
