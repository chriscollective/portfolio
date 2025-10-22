import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Server } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useTranslation } from "react-i18next";

export function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      title: t("project1_title"),
      description: t("project1_description"),
      image: "./images/go-equipment.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://chriscollective.github.io/go-website/",
      githubUrl: "https://github.com/chriscollective/go-website",
    },
    {
      title: t("project2_title"),
      description: t("project2_description"),
      image: "./images/kyoto.jpg",
      technologies: ["HTML", "SCSS", "JavaScript"],
      liveUrl: "https://chriscollective.github.io/travel-japan/",
      githubUrl: "https://github.com/chriscollective/travel-japan",
    },
    {
      title: t("project3_title"),
      description: t("project3_description"),
      image: "./images/snakeGame.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://chriscollective.github.io/snake-game/",
      githubUrl: "https://github.com/chriscollective/snake-game",
    },
    {
      title: t("project4_title"),
      description: t("project4_description"),
      image: "./images/GPA.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://chriscollective.github.io/gap-calculator/",
      githubUrl: "https://github.com/chriscollective/gap-calculator",
    },
    {
      title: t("project5_title"),
      description: t("project5_description"),
      image: "./images/electricityApp.png",
      technologies: ["Python", "Streamlit", "GoogleSheets"],
      liveUrl: "https://optipower.streamlit.app/",
      githubUrl: "https://github.com/chriscollective/electricity-optimize-app",
    },
    {
      title: t("project6_title"),
      description: t("project6_description"),
      image: "./images/googleLogin.png",
      technologies: [
        "Node.js",
        "Express",
        "Passport",
        "Google OAuth",
        "MongoDB Atlas",
        "Render",
      ],
      serverUrl: "https://post-system-server.onrender.com",
      liveUrl: "https://post-system-client-176x.vercel.app/",
      githubUrl: "https://github.com/chriscollective/Post-system-client",
    },
    {
      title: t("project7_title"),
      description: t("project7_description"),
      image: "./images/pexels.png",
      technologies: [
        "React.js",
        "axios",
        "Pexels API",
        "useState",
        "useEffect",
      ],
      liveUrl: "https://chriscollective.github.io/pexel-photos/",
      githubUrl: "https://github.com/chriscollective/pexel-photos",
    },
    {
      title: t("project8_title"),
      description: t("project8_description"),
      image: "./images/LearningPage.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      serverUrl: "https://mern-server-qxsc.onrender.com",
      liveUrl: "https://mern-client-20dt.onrender.com",
      githubUrl: "https://github.com/chriscollective/MERN-CLIENT",
    },
    {
      title: t("project9_title"),
      description: t("project9_description"),
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDF8fHx8MTc1NzMwMjE3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Figma", "React", "Vite", "Tailwind"],
      liveUrl: "https://portfolio-opx6-sigma.vercel.app/",
      githubUrl: "https://github.com/chriscollective/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("projects_title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("projects_description")}
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-col space-y-2 mt-auto">
                        {project.serverUrl && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="w-full"
                            asChild
                          >
                            <a
                              href={project.serverUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Server className="size-3 mr-1" />
                              {t("btn_active_server")}
                            </a>
                          </Button>
                        )}
                        <div className="flex space-x-2">
                          <Button size="sm" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="size-3 mr-1" />
                              {t("btn_live_demo")}
                            </a>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="size-3 mr-1" />
                              {t("btn_github_code")}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Mobile navigation hint */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
                <div className="w-2 h-2 rounded-full bg-muted"></div>
              </div>
              <span>{t("projects_mobile_hint")}</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/chriscollective"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4 mr-2" />
                {t("btn_view_all")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
