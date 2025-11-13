import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, TrendingUp, Users, FileText, BarChart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useTranslation } from "react-i18next";

export function LatestProject() {
  const { t } = useTranslation();

  const projectData = {
    title: t("latest_project_title"),
    subtitle: t("latest_project_subtitle"),
    description: t("latest_project_description"),
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://mmquiz.vercel.app/",
    githubUrl: "https://github.com/chriscollective/MedicalMediumQuiz",
    features: [
      {
        icon: <FileText className="size-5" />,
        title: t("latest_feature_1_title"),
        description: t("latest_feature_1_desc"),
      },
      {
        icon: <TrendingUp className="size-5" />,
        title: t("latest_feature_2_title"),
        description: t("latest_feature_2_desc"),
      },
      {
        icon: <BarChart className="size-5" />,
        title: t("latest_feature_3_title"),
        description: t("latest_feature_3_desc"),
      },
      {
        icon: <Users className="size-5" />,
        title: t("latest_feature_4_title"),
        description: t("latest_feature_4_desc"),
      },
    ],
    stats: [
      { label: t("latest_stat_1_label"), value: "129", icon: <FileText className="size-4" /> },
      { label: t("latest_stat_2_label"), value: "174", icon: <Users className="size-4" /> },
      { label: t("latest_stat_3_label"), value: "237", icon: <TrendingUp className="size-4" /> },
    ],
    screenshots: [
      { src: "./images/homepage.png", alt: t("latest_screenshot_1") },
      { src: "./images/resultpage.png", alt: t("latest_screenshot_6") },
      { src: "./images/ranking.png", alt: t("latest_screenshot_2") },
      { src: "./images/questionBank.png", alt: t("latest_screenshot_3") },
      { src: "./images/adminBoard.png", alt: t("latest_screenshot_4") },
      { src: "./images/analysis.png", alt: t("latest_screenshot_5") },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-[90rem] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {t("latest_project_badge")}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {projectData.title}
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto">
              {projectData.subtitle}
            </p>
          </div>

          {/* Main Content */}
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {/* Left: Image Carousel */}
              <div className="relative bg-muted/30 p-10 md:p-12 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full max-w-lg"
                >
                  <CarouselContent>
                    {projectData.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex items-center">
                          <ImageWithFallback
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>

              {/* Right: Content */}
              <div className="pl-[2.5rem] pr-[3rem] py-[2.5rem] md:pl-[3.5rem] md:pr-[5rem] md:py-[3.5rem] flex flex-col justify-center">
                {/* Description */}
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {projectData.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-base md:text-lg font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                    {t("latest_tech_stack")}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {projectData.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-4 py-2 text-base hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between gap-5 mb-8 p-5 rounded-lg bg-gradient-to-r from-muted/30 to-muted/50 border border-border/50">
                  {projectData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex-1 text-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="text-primary group-hover:scale-110 transition-transform w-5 h-5">
                          {stat.icon}
                        </div>
                        <div className="text-4xl md:text-5xl font-bold text-foreground">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h3 className="text-base md:text-lg font-semibold mb-5 text-muted-foreground uppercase tracking-wide">
                    {t("latest_key_features")}
                  </h3>
                  <div className="space-y-4">
                    {projectData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                      >
                        <div className="text-primary mt-1 group-hover:scale-110 transition-transform duration-300 w-6 h-6">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-base md:text-lg mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-sm md:text-base text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild className="flex-1 min-w-[160px] h-14 text-lg">
                    <a
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <ExternalLink className="size-5 mr-2 group-hover:scale-110 transition-transform" />
                      {t("btn_live_demo")}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 min-w-[160px] h-14 text-lg"
                  >
                    <a
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Github className="size-5 mr-2 group-hover:rotate-12 transition-transform" />
                      {t("btn_github_code")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
