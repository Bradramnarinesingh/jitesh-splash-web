import Layout from "@/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog post data
const blogPosts = [
  {
    id: "1",
    title: "Essential Swimming Techniques for Beginners",
    excerpt: "Learning to swim can be a thrilling yet challenging experience. Here are some fundamental techniques that every beginner should master.",
    date: "May 3, 2025",
    author: "Jitesh Wadhwa",
    imageUrl: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: `
      <p>Swimming is not just a recreational activity but a crucial life skill that everyone should acquire. As a swimming instructor with years of experience, I've developed effective methods to teach beginners how to swim confidently and safely.</p>
      
      <h3>The Fundamental Techniques</h3>
      
      <p>Before diving into specific strokes, beginners should focus on these essential skills:</p>
      
      <ul>
        <li><strong>Water Comfort:</strong> Getting comfortable in water is the first step. Practice putting your face in the water and blowing bubbles to overcome any initial fear.</li>
        <li><strong>Floating:</strong> Learning to float on your back and stomach builds water confidence and helps understand buoyancy.</li>
        <li><strong>Breath Control:</strong> Proper breathing technique is crucial for all swimming styles. Practice rhythmic breathing by turning your head to the side while maintaining a horizontal body position.</li>
        <li><strong>Kicking:</strong> A strong kick provides propulsion and helps maintain body position. Practice with a kickboard to isolate and develop this skill.</li>
      </ul>
      
      <h3>Starting with the Front Crawl</h3>
      
      <p>Once you've mastered the basics, the front crawl (freestyle) is typically the first stroke taught because of its efficiency and natural movement pattern:</p>
      
      <ol>
        <li>Start in a horizontal position with your face in the water</li>
        <li>Alternate arm movements in a windmill pattern</li>
        <li>Keep your body as straight as possible</li>
        <li>Maintain a steady flutter kick</li>
        <li>Turn your head to breathe every 2-3 strokes</li>
      </ol>
      
      <p>Remember, consistency is key. Regular practice, even for short periods, will help build muscle memory and confidence in the water.</p>
      
      <h3>Safety First</h3>
      
      <p>Always swim in designated areas with lifeguard supervision until you're confident in your abilities. Consider taking formal lessons with a certified instructor to ensure proper technique and safety awareness.</p>
      
      <p>With patience, practice, and proper guidance, anyone can learn to swim regardless of age. The joy and benefits of swimming will last a lifetime!</p>
    `
  }
];

const BlogListPage = () => {
  return (
    <Layout>
      <section className="py-20 lg:py-24 relative overflow-hidden">
        {/* Modern background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-ocean-50/20 to-white -z-10"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-multiply -z-10"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-40 right-0 w-64 h-64 bg-gradient-to-bl from-ocean-200/30 to-ocean-300/10 rounded-full blur-3xl opacity-70 animate-float-slow -z-10"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-ocean-300/20 to-ocean-100/20 rounded-full blur-3xl opacity-60 animate-float -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-3">
              <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-gradient-to-r from-ocean-50 to-ocean-100/80 rounded-full shadow-sm">
                <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 inline-block"></span>
                Our Blog
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-900 mb-4">Swimming Tips & <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">Insights</span></h2>
            <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-ocean-300 mx-auto mb-6"></div>
            <p className="text-ocean-700 max-w-2xl mx-auto">
              Stay updated with my latest swimming tips, techniques, and success stories
            </p>
          </div>
          
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-ocean-600 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-ocean-900 mb-2">{post.title}</h3>
                  <p className="text-ocean-700 mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-ocean-600 font-medium hover:text-ocean-800 transition-colors">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional placeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-white/80 text-center">
                <h3 className="text-xl font-semibold text-ocean-800 mb-3">More Articles Coming Soon!</h3>
                <p className="text-ocean-700 mb-5">
                  We're working on more helpful content. Stay tuned for updates on swimming techniques and tips!
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Blog Post Page component
const BlogPost = () => {
  const { id } = useParams();
  // Find the blog post with the matching ID, or use the first post as a fallback
  const post = blogPosts.find(post => post.id === id) || blogPosts[0];

  return (
    <Layout>
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-ocean-50/10 to-white -z-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-[300px] md:h-[400px] relative">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/70 via-ocean-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block bg-ocean-500 text-white text-sm px-3 py-1 rounded-full mb-3">{post.date}</span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">{post.title}</h1>
                <p className="text-ocean-100 mt-2">By {post.author}</p>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="prose prose-ocean max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link to="/blog">
                  <Button variant="outline" className="border-ocean-200 text-ocean-700 hover:text-ocean-900 hover:bg-ocean-50">
                    ← Back to Blog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Main component that conditionally renders list or post
const Blog = () => {
  const { id } = useParams();
  return id ? <BlogPost /> : <BlogListPage />;
};

export default Blog; 