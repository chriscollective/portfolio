import { Button } from "./ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {t("hero_title")}
          </h1>
          <p className="text-3xl md:text-5xl text-muted-foreground mb-8  mx-auto">
            {t("hero_description")}
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/chriscollective"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/chris-du-978143273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:alex@example.com">
                <Mail className="size-4" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={scrollToContact}>
              {t("btn_getInTouch")}
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToAbout}>
              {t("btn_learnMore")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ArrowDown className="size-6" />
      </button>
    </section>
  );
}
