// src/Components/EducationSection.jsx
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>

          {/* NSUT */}
          <div className="relative flex items-start mb-16">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-background p-1 rounded-full z-10 border-2 border-primary">
              <div className="p-2 rounded-full bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 bg-card rounded-lg shadow-xs card-hover md:ml-auto md:pl-12">
              <p className="text-sm text-muted-foreground mb-1">2021 – 2025</p>
              <h3 className="text-xl font-semibold mb-1">Netaji Subhas University of Technology, Dwarka, Delhi</h3>
              <h4 className="font-medium text-primary mb-2">Bachelor of Technology</h4>
              <h4 className="font-medium text-primary mb-2">Computer Science (Artificial Intelligence)</h4>
              <p className="text-muted-foreground text-sm">CGPA: 7.7 / 10</p>
              <p className="text-muted-foreground text-sm mt-2">
                Relevant Coursework: Data Structures & Algorithms, Object Oriented Programming, DBMS, Machine Learning
              </p>
            </div>
          </div>

          {/* Class XII */}
          <div className="relative flex items-start">
            <div className="md:absolute md:left-1/2 md:-translate-x-1/2 bg-background p-1 rounded-full z-10 border-2 border-primary">
              <div className="p-2 rounded-full bg-primary/10">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6 bg-card rounded-lg shadow-xs card-hover md:mr-auto md:pr-12">
              <p className="text-sm text-muted-foreground mb-1">2019 – 2020</p>
              <h3 className="text-xl font-semibold mb-1">DAV Public School, Kailash Hills, Delhi</h3>
              <h4 className="font-medium text-primary mb-2">Class XII – CBSE</h4>
              <h4 className="font-medium text-primary mb-2">Science</h4>
              <p className="text-muted-foreground text-sm">Percentage: 95.0%</p>
              <p className="text-muted-foreground text-sm mt-2">School Topper (Class XII Board Exams)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
