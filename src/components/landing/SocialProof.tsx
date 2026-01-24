import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          As seen in
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          <div className="text-lg md:text-xl font-bold text-foreground/80">PetCare Weekly</div>
          <div className="text-lg md:text-xl font-bold text-foreground/80">The Guardian</div>
          <div className="text-lg md:text-xl font-bold text-foreground/80">Vet Times</div>
          <div className="text-lg md:text-xl font-bold text-foreground/80">Daily Mail</div>
          <div className="hidden sm:block text-lg md:text-xl font-bold text-foreground/80">BBC Radio</div>
        </div>
        
        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-primary fill-primary" />
            ))}
          </div>
          <span className="font-semibold text-foreground ml-2">4.9</span>
          <span className="text-muted-foreground">• Loved by 50,000+ pet parents</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
