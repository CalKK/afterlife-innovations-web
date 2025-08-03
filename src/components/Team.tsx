import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Sustainable energy expert with 10+ years in battery technology and circular economy solutions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
      initials: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      bio: "Former Tesla engineer specializing in battery management systems and power electronics.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop",
      initials: "MJ"
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Operations",
      bio: "Supply chain and operations expert focused on sustainable manufacturing and quality assurance.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
      initials: "ER"
    },
    {
      name: "David Kim",
      role: "Lead Engineer",
      bio: "Electrical engineer with expertise in battery testing, refurbishment, and safety protocols.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      initials: "DK"
    },
    {
      name: "Amara Okafor",
      role: "Sustainability Director",
      bio: "Environmental scientist driving our circular economy initiatives and impact measurement.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1f5?w=400&h=400&fit=crop",
      initials: "AO"
    },
    {
      name: "James Thompson",
      role: "Business Development",
      bio: "Strategic partnerships specialist connecting with suppliers, customers, and sustainability partners.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      initials: "JT"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate experts driving innovation in sustainable battery solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <Avatar className="w-24 h-24 mx-auto">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-sustainability/10 text-sustainability text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-innovation mb-2">
                  {member.name}
                </h3>
                
                <p className="text-sustainability font-semibold mb-4">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;