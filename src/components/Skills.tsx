import { Card } from "@/components/ui/card";
import { Code2, Database, Wrench, Layout } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-primary" size={32} />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Code2 className="text-secondary" size={32} />,
      skills: ["Java", "Spring Boot", "Node.js", "REST APIs"],
    },
    {
      title: "Database",
      icon: <Database className="text-accent" size={32} />,
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="text-primary" size={32} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Maven"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 shadow-card hover:shadow-glow transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-lg mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
