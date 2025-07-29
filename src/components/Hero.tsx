import { Battery, Recycle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Title */}
         <h1 className="text-5xl md:text-7xl font-heading font-bold text-innovation mb-6 fade-in">
             <span className="block">Where Batteries</span>
             <span className="block">Begin Again</span>
         </h1>

          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 fade-in max-w-3xl mx-auto">
           Powering Tomorrow with Reclaimed Batteries.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-heading font-bold text-innovation mb-4/10 rounded-full flex items-center justify-center mb-4">
                <Battery className="text-4xl font-heading font-bold text-innovation mb-4" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Battery Repurposing</h3>
              <p className="text-muted-foreground text-center">
                Advanced technology to give discarded batteries new life in sustainable applications
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-heading font-bold text-innovation mb-4/10 rounded-full flex items-center justify-center mb-4">
                <Recycle className="text-4xl font-heading font-bold text-innovation mb-4" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Circular Economy</h3>
              <p className="text-muted-foreground text-center">
                Creating closed-loop systems that eliminate waste and maximize resource efficiency
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-heading font-bold text-innovation mb-4/10 rounded-full flex items-center justify-center mb-4">
                <Leaf className="text-4xl font-heading font-bold text-innovation mb-4" />
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
