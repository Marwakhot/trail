import { Linkedin, Github } from "lucide-react";

const IDCard = () => {
  return (
    <div className="relative -ml-16 -translate-x-12">
      {/* Lanyard/String - extends to top of screen */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[50vh] w-0.5 h-[50vh] bg-foreground/30" />
      <div className="absolute left-1/2 -translate-x-1/2 -top-[50vh] w-4 h-4 rounded-full bg-foreground/20 border-2 border-foreground/30" />
      
      {/* Card */}
      <div className="id-card-hang w-56 bg-card rounded-2xl shadow-2xl overflow-visible relative">
        {/* Gradient Header */}
        <div 
          className="h-24 relative rounded-t-2xl"
          style={{ background: 'linear-gradient(135deg, hsl(350, 85%, 60%) 0%, hsl(35, 95%, 55%) 100%)' }}
        >
          {/* Clip/Hole */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2">
            <div className="w-8 h-4 bg-foreground/20 rounded-full" />
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 text-center">
          <p className="text-muted-foreground text-sm">CS Student</p>
          <p className="text-accent font-semibold text-sm">AI & Big Data</p>
          
          <div className="mt-3 space-y-1 text-xs text-muted-foreground">
            <p>marwakhot007@gmail.com</p>
            <p>+971 58 588 5323</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-3 mt-4">
            <a 
              href="https://www.linkedin.com/in/marwa-khot-238482353/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/Marwakhot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
          
          {/* Decorative dots */}
          <div className="flex justify-center gap-1.5 mt-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          
          {/* Barcode */}
          <div className="flex justify-center gap-0.5 mt-3">
            {[2, 1, 3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2].map((w, i) => (
              <div 
                key={i} 
                className="bg-foreground/20 rounded-sm"
                style={{ width: `${w * 2}px`, height: '20px' }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;