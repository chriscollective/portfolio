import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="size-4" />,
      href: "https://github.com/chriscollective",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="size-4" />,
      href: "https://www.linkedin.com/in/chris-du-978143273/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="size-4" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  const quickLinks = [
    { label: t("Home"), href: "#home" },
    { label: t("About"), href: "#about" },
    { label: t("Skills"), href: "#skills" },
    { label: t("Projects"), href: "#projects" },
    { label: t("Contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-4">Chris Du</h3>
            <p className="text-muted-foreground mb-4">
              {t("footer_description")}
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>justakiss918@gmail.com</p>
              <p>+886 986 511 703</p>
              <p>New Taipei City, TW</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Chris Du. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="size-4 mx-1 text-red-500" /> using React
            & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
