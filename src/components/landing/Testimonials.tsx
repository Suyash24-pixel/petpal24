import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "PetPal has been a lifesaver! I used to forget Luna's flea treatment all the time. Now I get gentle reminders and our vet is impressed with how organised I am.",
    name: "Sarah M.",
    role: "Dog mum, London",
    avatar: "🐕",
    rating: 5,
  },
  {
    quote: "As a vet nurse, I wish all my patients' owners used PetPal. The health history feature makes consultations so much smoother. Brilliant app!",
    name: "James K.",
    role: "Vet nurse, Manchester",
    avatar: "🩺",
    rating: 5,
  },
  {
    quote: "My whole family uses PetPal to look after Mochi. When the cat sitter comes, they can see exactly what she needs. No more long instruction notes!",
    name: "Priya T.",
    role: "Cat mum, Edinburgh",
    avatar: "🐱",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-sm font-bold text-primary uppercase tracking-widest mb-4">
            Happy Pet Parents
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-5 tracking-tight">
            Loved by thousands of<br className="hidden md:block" /> pet families
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from our wonderful community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-7 shadow-soft border border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
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
