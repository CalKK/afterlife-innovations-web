import { BookOpen, Play, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const blogPosts = [
    {
      title: "Giving Batteries a Second Life",
      image: "https://images.unsplash.com/photo-1545235616-db3cd822ad8c?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://strathmore.edu/news-articles/giving-batteries-a-second-life/",
      category: "Innovation",
      excerpt: "Discover how we're transforming discarded batteries into valuable resources.",
      date: "July 2025"
    },
    {
      title: "Strathmore Innovators transform E-waste into opportunities",
      image: "https://plus.unsplash.com/premium_photo-1681433419747-f5c114430ab5?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://strathmore.edu/news-articles/strathmore-innovators-transform-e-waste-into-opportunities/",
      category: "Innovation",
      excerpt: "Learn about our innovative approach to e-waste transformation.",
      date: "July 2024"
    },
    {
      title: "Distinguished Design Award",
      image: "https://images.unsplash.com/flagged/photo-1587096472434-8b65b343980d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.energymentors.org/ptc-winners-2025",
      category: "Innovation",
      excerpt: "Celebrating our recognition for outstanding design innovation.",
      date: "June 2025"
    },
    {
      title: "Afterlife Innovations x CEPREC",
      image: "https://plus.unsplash.com/premium_photo-1716999684531-b8f40731a827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fG1pY3JvZ3JpZCUyMGJhdHRlcnklMjBpbm5vdmF0aW9uc3xlbnwwfHwwfHx8MA%3D%3D",
      link: "https://sbs.strathmore.edu/from-discarded-battery-cells-to-clean-circular-energy-solutions-ceprec-meets-with-afterlife-innovations",
      category: "Research",
      excerpt: "Exploring collaborative avenues with industry players.",
      date: "August 2025"
    }
  ];

  const videos = [
    {
      title: "Power The Community Victors Interview",
      thumbnail: "https://images.unsplash.com/photo-1550496923-a0e3ef948e3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA2fHxiYXR0ZXJ5JTIwaW5ub3ZhdGlvbnN8ZW58MHx8MHx8fDA%3D",
      link: "https://youtu.be/mYTZQqUBzC4",
      description: "Interview with our team about winning the Power The Community competition."
    },
    {
      title: "Energy Mentors Award",
      thumbnail: "https://plus.unsplash.com/premium_photo-1716824502431-b93e3756a6aa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://youtu.be/qgE5EDjO2cA",
      description: "Highlights from receiving the Energy Mentors Award."
    }
  ];

  return (
   <section id="resources" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
        Features & Accolades
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Preview some of our accolades, accomplishments & features. 
      </p>
    </div>

    {/* Blog Posts */}
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-heading font-semibold text-innovation">
          Find them 
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
            
            <CardHeader className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-sustainability/10 text-sustainability text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              <CardTitle className="text-lg font-heading text-innovation line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sustainability hover:bg-sustainability/10 text-xs"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div> 

    {/* Videos */}
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-heading font-semibold text-innovation">
          Videos
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
            <div className="relative">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }} />
              <div className="absolute inset-0 bg-innovation/20 flex items-center justify-center">
                <Button 
                  size="sm" 
                  className="rounded-full bg-sustainability hover:bg-sustainability-light"
                  onClick={() => window.open(video.link, "_blank")}
                >
                  <Play className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-heading text-innovation line-clamp-2">
                {video.title}
              </CardTitle>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {video.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default Resources;

