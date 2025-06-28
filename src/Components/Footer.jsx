import { ArrowUp, Github, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

// You can reuse the navItems from your Navbar or define them here
const footerNavItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-card border-t border-border">
      <div className="container mx-auto">
        {/* Main grid for the footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">Rohan Portfolio</h3>
            <p className="text-muted-foreground">
              A passionate developer building modern, responsive, and user-friendly web applications.
            </p>
          </div>

          {/* Column 2: Sitemap / Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerNavItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:rohankr1808@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  rohankr1808@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">New Delhi, India</span>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a href="https://github.com/rohan1883" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rohankr1883" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/rohankr1808/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Rohan Mishra. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
             <p className="text-sm text-muted-foreground">Made with React & Tailwind CSS</p>
            <a
              href="#hero"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};