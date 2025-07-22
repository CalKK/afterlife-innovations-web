import { Battery, Recycle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-sustainability/5 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-innovation mb-6 fade-in">
            Where Batteries
            <span className="block text-sustainability">Begin Again</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 fade-in max-w-3xl mx-auto">
           Powering Tomorrow with Reclaimed Batteries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in">
            <Button size="lg" className="text-lg px-8 py-4 bg-sustainability hover:bg-sustainability-light">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-sustainability text-sustainability hover:bg-sustainability/10">
              Learn About Impact
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sustainability/10 rounded-full flex items-center justify-center mb-4">
                <Battery className="w-8 h-8 text-sustainability" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Battery Repurposing</h3>
              <p className="text-muted-foreground text-center">
                Advanced technology to give discarded batteries new life in sustainable applications
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sustainability/10 rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-8 h-8 text-sustainability" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Circular Economy</h3>
              <p className="text-muted-foreground text-center">
                Creating closed-loop systems that eliminate waste and maximize resource efficiency
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-sustainability/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-sustainability" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Environmental Impact</h3>
              <p className="text-muted-foreground text-center">
                Measurable reduction in carbon footprint and toxic waste through innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
