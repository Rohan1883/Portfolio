import { useState } from "react";
import { cn } from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";

// We can now REMOVE the 'level' property from our data
const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  // { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "SpringBoot", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Figma", category: "tools" },
  // { name: "VS Code", category: "tools" },
  { name: "CI/CD (Github Actions)", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I specialize in a variety of technologies across the stack, enabling me to build robust and scalable applications.
        </p>

        {/* Category filter buttons remain the same */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-card/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- NEW SKILL DISPLAY --- */}
        {/* We replace the progress bars with these clean cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-4 rounded-lg shadow-sm flex items-center justify-center card-hover"
            >
              <h3 className="font-medium text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};