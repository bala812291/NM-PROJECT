import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <p className="text-primary text-lg mb-4">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            BALASIVA B
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mb-8">
            Aspiring Full Stack Developer | B.Tech IT Student
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Building scalable and efficient web applications with passion and precision
          </p>
          
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-glow transition-smooth group"
          >
            Get in Touch
            <ArrowDown className="ml-2 group-hover:translate-y-1 transition-smooth" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default Hero;
