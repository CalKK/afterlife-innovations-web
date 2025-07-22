import { Smartphone, Car, Home, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Smartphone,
      title: "Portable Second-life Power Banks",
      description: "High-capacity power banks built from repurposed lithium batteries, perfect for consumers who need reliable mobile charging.",
      features: ["10,000mAh capacity", "Fast charging technology", "Eco-friendly construction"],
      image: "https://images.unsplash.com/photo-1609592424970-d1473b3de61e?w=400&h=300&fit=crop"
    },
    /*
    {
      icon: Car,
      title: "E-bike Battery Packs",
      description: "Sustainable battery solutions for electric bicycles, combining performance with environmental responsibility.",
      features: ["36V/48V options", "50km+ range", "Waterproof design", "Smart BMS system"],
      price: "From $299",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      icon: Home,
      title: "Home Energy Storage",
      description: "Residential energy storage systems that help families reduce grid dependency while supporting sustainability.",
      features: ["10-20kWh capacity", "Grid-tie capability", "Mobile app control", "10-year lifespan"],
      price: "From $2,499",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      icon: Factory,
      title: "Industrial Solutions",
      description: "Custom battery systems for businesses, NGOs, and industrial applications requiring reliable, sustainable power.",
      features: ["Custom configurations", "Scalable design", "Professional installation", "24/7 monitoring"],
      price: "Contact us",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
    */
  ];
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Sustainable Power Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our flagship second-life powerbank 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border">
              <div className="aspect-video bg-gradient-to-br from-sustainability/10 to-sustainability/5 flex items-center justify-center">
                <product.icon className="w-16 h-16 text-sustainability" />
              </div>
     <CardHeader>
  <CardTitle className="flex items-center gap-3 text-2xl font-heading text-innovation">
    {product.title}
  </CardTitle>
</CardHeader>

<CardContent className="space-y-6">
  <p className="text-muted-foreground leading-relaxed">
    {product.description}
  </p>

  <div className="space-y-2">
    <h4 className="font-heading font-semibold text-innovation">Key Features:</h4>
    <ul className="space-y-1">
      {product.features.map((feature, featureIndex) => (
        <li key={featureIndex} className="text-muted-foreground text-sm flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-sustainability rounded-full" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
</CardContent>

</Card>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
