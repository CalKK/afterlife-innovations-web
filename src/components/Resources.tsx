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
    },
    {
      title: "Strathmore Innovators transform E-waste into opportunities",
      image: "https://plus.unsplash.com/premium_photo-1681433419747-f5c114430ab5?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://strathmore.edu/news-articles/strathmore-innovators-transform-e-waste-into-opportunities/",
      category: "Innovation",
      excerpt: "Learn about our innovative approach to e-waste transformation.",
    },
    {
      title: "Distinguished Design Award",
      image: "https://images.unsplash.com/flagged/photo-1587096472434-8b65b343980d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://www.energymentors.org/ptc-winners-2025",
      category: "Innovation",
      excerpt: "Celebrating our recognition for outstanding design innovation.",
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
        Features & Awards
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
            <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
            
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-sustainability/10 text-sustainability text-xs font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="text-xl font-heading text-innovation line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-sustainability hover:bg-sustainability/10"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((video, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
            <div className="relative">
              <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }} />
              <div className="absolute inset-0 bg-innovation/20 flex items-center justify-center">
                <Button 
                  size="lg" 
                  className="rounded-full bg-sustainability hover:bg-sustainability-light"
                  onClick={() => window.open(video.link, "_blank")}
                >
                  <Play className="w-8 h-8" />
                </Button>
              </div>
              <div className="absolute bottom-4 right-4 bg-innovation/80 text-trust px-2 py-1 rounded text-sm">
                {video.duration}
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl font-heading text-innovation">
                {video.title}
              </CardTitle>
              <p className="text-muted-foreground">
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

