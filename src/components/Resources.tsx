import { BookOpen, Play, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
  const blogPosts = [
    {
      title: "How to Extend Battery Life: A Complete Guide",
      excerpt: "Learn the best practices for maximizing battery lifespan and reducing electronic waste in your daily life.",
      category: "Battery Care",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      date: "Dec 15, 2023"
    },
    {
      title: "Case Study: E-bike Fleet Powered by Repurposed Batteries",
      excerpt: "Discover how our partner organization revolutionized their delivery system with sustainable battery technology.",
      category: "Case Study",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop",
      date: "Dec 10, 2023"
    },
    {
      title: "The Science Behind Battery Repurposing",
      excerpt: "Deep dive into the technical processes that transform discarded batteries into powerful energy solutions.",
      category: "Technology",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      date: "Dec 5, 2023"
    }
  ];

  const videos = [
    {
      title: "Team Visit to Makerspace Innovation Hub",
      description: "Behind-the-scenes look at our collaboration with local makerspaces",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      duration: "3:45"
    },
    {
      title: "Battery Recycling Process Explained",
      description: "Step-by-step walkthrough of our sustainable recycling methodology",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
      duration: "6:20"
    }
  ];

  const guides = [
    {
      title: "Battery Safety Guidelines",
      description: "Essential safety practices for handling and disposing of batteries",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Sustainability Impact Report 2023",
      description: "Comprehensive analysis of our environmental and social impact",
      icon: BookOpen,
      downloadUrl: "#"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-innovation mb-4">
            Knowledge & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with our latest research, case studies, and educational content 
            about sustainable battery technology and circular economy practices.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-innovation mb-8">
            Latest Blog Posts
          </h3>
          
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
                    <Button variant="ghost" size="sm" className="text-sustainability hover:bg-sustainability/10">
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
          <h3 className="text-2xl font-heading font-semibold text-innovation mb-8">
            Educational Videos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                <div className="relative">
                  <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }} />
                  <div className="absolute inset-0 bg-innovation/20 flex items-center justify-center">
                    <Button size="lg" className="rounded-full bg-sustainability hover:bg-sustainability-light">
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

        {/* Downloadable Guides */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-innovation mb-8">
            Downloadable Guides
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sustainability/10 rounded-lg flex items-center justify-center">
                      <guide.icon className="w-6 h-6 text-sustainability" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-heading font-semibold text-innovation mb-2">
                        {guide.title}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {guide.description}
                      </p>
                      
                      <Button className="bg-sustainability hover:bg-sustainability-light">
                        Download PDF
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;