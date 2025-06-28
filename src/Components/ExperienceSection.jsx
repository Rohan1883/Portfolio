import { Briefcase } from "lucide-react";

// You can fetch this data from a CMS or a local JSON file
const experienceData = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Srijan Technologies(A Material Plus Company)",
    duration: "April 2024 - Present",
    description: [
      "Developed backend microservices for an e-commerce platform using Spring Boot.",
      "Explored and integrated third-party tools like Coveo AI and Contentstack.",
      "Participated in agile ceremonies, including daily stand-ups, sprint planning, and retrospectives.",
    ],
  },
  // Add more experience items here
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* The vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>

          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="relative mb-12 flex flex-col md:flex-row items-start"
            >
              {/* Timeline Dot and Icon */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-background p-1 rounded-full z-10 border-2 border-primary">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className={`w-full md:w-1/2 p-6 bg-card rounded-lg shadow-xs card-hover ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                }`}
              >
                <h3 className="text-xl font-semibold mb-1">{item.role}</h3>
                <p className="text-primary font-medium mb-2">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.duration}
                </p>
                <ul className={`list-disc list-inside space-y-1 text-muted-foreground ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};