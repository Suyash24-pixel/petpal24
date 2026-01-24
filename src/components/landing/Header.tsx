import { Button } from "@/components/ui/button";
import { PawPrint, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import WaitlistDialog from "@/components/landing/WaitlistDialog";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-2xl bg-primary flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
            <PawPrint className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-extrabold text-foreground tracking-tight">PetPal</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#benefits" className="text-muted-foreground hover:text-primary transition-colors font-semibold">Benefits</a>
          <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors font-semibold">Features</a>
          <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors font-semibold">Blog</Link>
          <a href="/#faq" className="text-muted-foreground hover:text-primary transition-colors font-semibold">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <WaitlistDialog variant="hero-outline" size="sm">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden sm:flex border-primary/30 text-primary hover:bg-primary/5 font-semibold rounded-full px-5"
            >
              Join Waitlist
            </Button>
          </WaitlistDialog>
          <Button 
            variant="default" 
            size="sm"
            className="rounded-full px-5 font-semibold"
          >
            Menu
          </Button>
          <button 
            className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-border/50 py-4">
          <div className="container flex flex-col gap-4">
            <a href="/#benefits" className="text-foreground font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
            <a href="/#features" className="text-foreground font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
            <Link to="/blog" className="text-foreground font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <a href="/#faq" className="text-foreground font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
