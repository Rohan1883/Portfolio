import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation"; // <-- IMPORT THE LIBRARY

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content with Typing Animation */}
          <div className="space-y-6 text-center md:text-left">

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight opacity-0 animate-fade-in">
              Hi, I'm <span className="text-primary">Rohan Mishra</span>
            </h1>

            {/* The Typing Animation Sub-headline */}
            <div className="text-2xl md:text-3xl font-semibold opacity-0 animate-fade-in-delay-1 h-16 md:h-10">
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-gradient">
                <TypeAnimation
                  // The sequence of strings to type
                  sequence={[
                    "Software Engineer",
                    1500, // Wait 1.5s
                    "Full-Stack Developer",
                    1500, // Wait 1.5s
                    "Tech Enthusiast",
                    1500, // Wait 1.5s
                    "Problem Solver",
                    1500, // Wait 1.5s
                  ]}
                  wrapper="span"    // The HTML tag to wrap the text in
                  speed={50}        // The typing speed
                  repeat={Infinity} // Makes the animation loop forever
                />
              </span>
            </div>
            
            {/* Paragraph (remains the same) */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
              A Tech enthusiast who brings logic, creativity, and purpose to every line of code. From AI-powered systems to user-first applications, I love building solutions that solve real problems.
            </p>

            <div className="pt-6 flex justify-center md:justify-start opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right Column: Image (remains the same) */}
          <div className="relative group mx-auto w-fit opacity-0 animate-fade-in-delay-4">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/50 to-secondary/30 rounded-full blur-xl transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300 z-0"></div>
            <img
              src="/profile-photo.jpg"
              alt="Rohan Mishra"
              className="relative w-full max-w-sm rounded-full shadow-xl"
              loading="lazy"
            />
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};