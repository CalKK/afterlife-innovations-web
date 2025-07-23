import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Julius Butime",
      role: "Dean of School of Computing & Engineering Sciences (SCES)",
      company: "Strathmore University",
      content: "Afterlife Innovation's approach to circular economy is revolutionary. Their partnership with our research department has yielded incredible insights into sustainable battery technologies.",
    },
    {
      name: "Don Victory",
      role: "President & Managing Director",
      company: "Energy Mentors",
      content: "Afterlife Innovations came up with a new energy business model: Repurposing EV batteries that still have capacity after being removed from autos - people in their community can swap them to power bulbs, phones, and fans in their homes. This gets people onto the energy prosperity ladder without needing upfront capital to, for example, install solar panels.",
    },
    {
      name: "Ian Kiprono",
      role: "Ex-community Manager",
      company: "Energy Mentors",
      content: "Afterlife Innovations has demonstrated robust prowess in delivering sound innovations within their market",
    }
  ];

  const partners = [
    { name: "Strathmore University", logo: "data:image/png;base64,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" },
    
    
    
    
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
