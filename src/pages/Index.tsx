import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Testimonials />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
