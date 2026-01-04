import { Star } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-8 md:py-12 bg-secondary/50 border-y border-border/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {/* Trust text */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-purple fill-purple" />
              ))}
            </div>
            <span className="font-medium">Loved by busy pet parents and trusted by vets</span>
          </div>
          
          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-border" />
          
          {/* Featured logos placeholder */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground font-medium">Featured in</span>
            <div className="flex items-center gap-4 opacity-60">
              <div className="h-6 px-3 bg-muted rounded text-xs font-semibold flex items-center text-muted-foreground">PetCare Weekly</div>
              <div className="h-6 px-3 bg-muted rounded text-xs font-semibold flex items-center text-muted-foreground">The Guardian</div>
              <div className="hidden sm:flex h-6 px-3 bg-muted rounded text-xs font-semibold items-center text-muted-foreground">Vet Times</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
