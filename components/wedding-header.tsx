import { Heart } from "lucide-react";

export function WeddingHeader() {
  return (
    <header className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Heart className="w-4 h-4 text-accent-foreground" />
          </div>
          <span className="text-2xl font-bold text-accent font-serif">DH</span>
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
            <Heart className="w-4 h-4 text-accent-foreground" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-accent mb-2">
          Dilum & Heshani
        </h1>
        <p className="text-muted-foreground italic font-serif">
          &quot;Therefore what God has joined together, let man not
          separate&quot;
        </p>
        <p className="text-sm text-muted-foreground">Matthew 19:6</p>
      </div>
    </header>
  );
}
