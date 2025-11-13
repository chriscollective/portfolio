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
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Badge className="mb-4 text-sm px-4 py-1.5" variant="default">
              {t("latest_project_badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {projectData.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {projectData.subtitle}
            </p>
          </div>

          {/* Main Content */}
          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Left: Image Carousel */}
              <div className="relative bg-muted/30 p-8 flex flex-col justify-center min-h-full">
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
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projectData.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                    {t("latest_tech_stack")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between gap-4 mb-6 p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/50 border border-border/50">
                  {projectData.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex-1 text-center group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <div className="text-primary group-hover:scale-110 transition-transform">
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-bold text-foreground">
                          {stat.value}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                    {t("latest_key_features")}
                  </h3>
                  <div className="space-y-3">
                    {projectData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                      >
                        <div className="text-primary mt-0.5 group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild className="flex-1 min-w-[140px]">
                    <a
                      href={projectData.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <ExternalLink className="size-4 mr-2 group-hover:scale-110 transition-transform" />
                      {t("btn_live_demo")}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1 min-w-[140px]"
                  >
                    <a
                      href={projectData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Github className="size-4 mr-2 group-hover:rotate-12 transition-transform" />
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
