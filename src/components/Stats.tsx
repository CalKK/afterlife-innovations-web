import { TrendingUp, Zap, Globe, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "50M+",
      label: "Tonnes of Lithium Waste",
      description: "Generated globally each year that needs sustainable solutions"
    },
    {
      icon: Zap,
      number: "85%",
      label: "Energy Recovery Rate",
      description: "From repurposed batteries through our innovative ecosystem engines"
    },
    {
      icon: Globe,
      number: "2.5T",
      label: "CO₂ Emissions Saved",
      description: "Per thousand batteries recycled through our processes"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Community Members",
      description: "Actively participating in our battery collection programs"
    }
  ];

  return (
    <section className="py-20 bg-sustainability/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Making a Real Difference
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our impact extends beyond technology - we're building a sustainable future 
            with measurable environmental and social benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-background rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-sustainability/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-sustainability" />
              </div>
              
              <div className="text-4xl font-heading font-bold text-sustainability mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-innovation mb-3">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;