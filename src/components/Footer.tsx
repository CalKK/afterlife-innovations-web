import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { label: "Power Banks", href: "#" },
        { label: "E-bike Batteries", href: "#" },
        { label: "Home Storage", href: "#" },
        { label: "Industrial Solutions", href: "#" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "For Consumers", href: "#" },
        { label: "For SMEs", href: "#" },
        { label: "For NGOs", href: "#" },
        { label: "Custom Solutions", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Battery Safety", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Impact Reports", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press Kit", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@batteryreborn.com",
      href: "mailto:hello@batteryreborn.com"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+254 700 123 456",
      href: "https://wa.me/254700123456"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 700 123 456",
      href: "tel:+254700123456"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Strathmore University, Nairobi, Kenya",
      href: "#"
    }
  ];

  return (
    <footer id="contact" className="bg-innovation text-innovation-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sustainability rounded-full flex items-center justify-center">
                <span className="text-sustainability-foreground font-bold text-xl">B</span>
              </div>
              <h3 className="text-3xl font-heading font-bold">Battery Reborn</h3>
            </div>
            
            <p className="text-lg mb-8 leading-relaxed opacity-90">
              Transforming the future of energy through sustainable battery solutions. 
              Join us in creating a circular economy that puts the planet first.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 hover:text-sustainability transition-colors duration-200 group"
                >
                  <div className="w-10 h-10 bg-sustainability/10 rounded-lg flex items-center justify-center group-hover:bg-sustainability/20 transition-colors duration-200">
                    <item.icon className="w-5 h-5 text-sustainability" />
                  </div>
                  <div>
                    <p className="text-sm opacity-75">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-sustainability/10 rounded-lg flex items-center justify-center hover:bg-sustainability hover:text-sustainability-foreground transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-lg font-heading font-semibold mb-4 text-sustainability">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-sustainability/20 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-heading font-semibold mb-4 text-sustainability">
              Stay Updated
            </h4>
            <p className="mb-6 opacity-90">
              Get the latest news about sustainable technology and our impact on the environment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-innovation-foreground/10 border border-sustainability/20 text-innovation-foreground placeholder:text-innovation-foreground/60 focus:outline-none focus:ring-2 focus:ring-sustainability"
              />
              <button className="px-6 py-3 bg-sustainability hover:bg-sustainability-light text-sustainability-foreground font-medium rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sustainability/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="opacity-75 text-center md:text-left">
              © 2024 Battery Reborn. All rights reserved. Building a sustainable tomorrow.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">
                Privacy Policy
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">
                Terms of Service
              </a>
              <a href="#" className="opacity-75 hover:opacity-100 hover:text-sustainability transition-all duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;