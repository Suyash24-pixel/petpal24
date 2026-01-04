import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistDialog from "@/components/landing/WaitlistDialog";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-soft group-hover:shadow-card transition-shadow">
            <Heart className="w-5 h-5 text-primary-foreground fill-current" />
          </div>
          <span className="text-xl font-bold text-foreground">PetPal</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#benefits" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Benefits</a>
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Features</a>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-medium">Blog</Link>
          <a href="/#faq" className="text-muted-foreground hover:text-foreground transition-colors font-medium">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <WaitlistDialog variant="hero-outline" size="sm">
            <Button variant="hero-outline" size="sm" className="hidden sm:flex">
              Join Waitlist
            </Button>
          </WaitlistDialog>
          <Button variant="default" size="sm">
            Download
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
