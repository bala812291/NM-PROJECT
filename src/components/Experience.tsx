import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <Card className="p-8 shadow-card hover:shadow-glow transition-smooth animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="text-primary" size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Java Fullstack Internship</h3>
                <p className="text-xl text-foreground/80 mb-4">
                  Wiztech Solution and Automation
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span>Chennai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>June 2024 - August 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "MySQL", "React", "REST APIs", "Git"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">
                  Key Responsibilities:
                </h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Developed and maintained full-stack web applications using Java 
                      Spring Boot and React
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Designed and implemented RESTful APIs for seamless frontend-backend 
                      communication
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Worked with MySQL databases for efficient data storage and retrieval
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Collaborated with team members using Git for version control and 
                      code management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Participated in code reviews and implemented best practices for 
                      scalable application development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
