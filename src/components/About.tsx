import { GraduationCap, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-foreground/80 mb-1">
                    <strong>Dr. Sivanthi Aditanar College of Engineering</strong>
                  </p>
                  <p className="text-muted-foreground">B.Tech in Information Technology</p>
                  <p className="text-muted-foreground">3rd Year</p>
                  <p className="text-muted-foreground">Tiruchendur</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-smooth animate-slide-in-right">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Code2 className="text-secondary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Highly motivated aspiring full-stack developer with hands-on experience 
                    from a Java Fullstack Internship at Wiztech Solution and Automation, Chennai. 
                    Focused on building scalable and efficient web applications.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-8 shadow-card animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              I am passionate about creating impactful digital solutions and constantly expanding 
              my skill set. With a strong foundation in software development and a drive to learn, 
              I aim to become a versatile developer capable of working across the full technology stack.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
