
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const sections = [
    {
      title: "HTML Basics",
      description: "Learn the fundamental building blocks of web pages",
      icon: "📝",
      path: "/html",
      color: "bg-pink"
    },
    {
      title: "CSS Basics",
      description: "Style your web pages and make them beautiful",
      icon: "🎨",
      path: "/css",
      color: "bg-orange"
    },
    {
      title: "JavaScript Basics",
      description: "Add interactivity to your websites",
      icon: "⚡",
      path: "/javascript",
      color: "bg-pink"
    },
    {
      title: "React Basics",
      description: "Build modern web applications with components",
      icon: "⚛️",
      path: "/react-basics",
      color: "bg-orange"
    },
    {
      title: "React Intermediate",
      description: "Take your React skills to the next level",
      icon: "🚀",
      path: "/react-intermediate",
      color: "bg-pink"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <header className="bg-gradient-to-r from-pink to-orange py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Learn Web Development from Zero to Hero</h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            A step-by-step journey from complete beginner to building your own React applications.
            No prior experience required!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/html">
              <Button size="lg" className="bg-white text-zinc-800 hover:bg-white/90">
                Start Learning
              </Button>
            </Link>
            <Link to="/resources">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                View Resources
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Learning Journey</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Link to={section.path} key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                  <div className={`${section.color} h-2`}></div>
                  <CardContent className="pt-6">
                    <div className="mb-4 text-4xl">{section.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                    <p className="text-gray-600">{section.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Learn With Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="bg-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Beginner Friendly</h3>
              <p className="text-gray-600">Designed specifically for absolute beginners with no coding experience.</p>
            </div>
            
            <div>
              <div className="bg-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">Practice with real exercises after each concept to strengthen your skills.</p>
            </div>
            
            <div>
              <div className="bg-pink/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛤️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Clear Progression</h3>
              <p className="text-gray-600">Step-by-step curriculum that builds your knowledge systematically.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-4 bg-pink/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-lg mb-8">
            Start with HTML basics and work your way up to building React applications!
          </p>
          <Link to="/html">
            <Button size="lg" className="btn-primary">
              Start Learning Now
            </Button>
          </Link>
        </div>
      </section>
      
      <footer className="bg-zinc-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-pink to-orange flex items-center justify-center">
                  <span className="font-bold text-white">WD</span>
                </div>
                <span className="text-xl font-bold">WebDev Beginner</span>
              </div>
              <p className="text-white/70 mt-2">Learn web development from scratch.</p>
            </div>
            
            <div className="flex gap-6">
              <Link to="/html" className="text-white/80 hover:text-white">HTML</Link>
              <Link to="/css" className="text-white/80 hover:text-white">CSS</Link>
              <Link to="/javascript" className="text-white/80 hover:text-white">JavaScript</Link>
              <Link to="/react-basics" className="text-white/80 hover:text-white">React</Link>
              <Link to="/resources" className="text-white/80 hover:text-white">Resources</Link>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} WebDev Beginner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
