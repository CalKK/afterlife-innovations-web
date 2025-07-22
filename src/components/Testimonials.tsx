import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Kimani",
      role: "Environmental Science Professor",
      company: "Strathmore University",
      content: "Battery Reborn's approach to circular economy is revolutionary. Their partnership with our research department has yielded incredible insights into sustainable battery technologies.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2e5ae5a?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "James Mwangi",
      role: "Operations Manager",
      company: "Green Energy Solutions",
      content: "We've integrated their repurposed battery systems across our solar installations. The performance is outstanding and our clients love the environmental impact story.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mary Wanjiku",
      role: "Community Leader",
      company: "Kibera Green Initiative",
      content: "The e-bike powered by repurposed batteries has transformed our delivery services. It's reliable, cost-effective, and our community is proud to use sustainable technology.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const partners = [
    { name: "Strathmore University", logo: "🎓" },
    { name: "Kenya Power", logo: "⚡" },
    { name: "Green Africa Foundation", logo: "🌍" },
    { name: "TechHub Nairobi", logo: "💻" },
    { name: "USAID Kenya", logo: "🤝" },
    { name: "Climate Innovation Center", logo: "🌱" }
  ];

  return (
    <section className="py-20 bg-sustainability/5">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Trusted by Leaders in Sustainability
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From universities to community organizations, our partners are making 
            a real difference with sustainable battery solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-sustainability mb-4" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-innovation">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-sustainability font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-semibold text-innovation mb-8">
            Proud Partners & Collaborators
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-background rounded-xl border border-border hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-3">
                  {partner.logo}
                </div>
                <p className="text-sm font-medium text-innovation text-center">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;