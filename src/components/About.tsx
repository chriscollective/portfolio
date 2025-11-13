import { Card, CardContent } from "./ui/card";
import { Code, Palette, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();
  const highlights = [
    {
      icon: <Code className="size-8 text-primary" />,
      title: "Clean Code",
      description: t("highlight"),
    },
    {
      icon: <Palette className="size-8 text-primary" />,
      title: "Codex/Claude",
      description: t("highlight2"),
    },
    {
      icon: <Rocket className="size-8 text-primary" />,
      title: "Performance",
      description: t("highlight3"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("about_title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("about_description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                {t("about_description2")}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {t("about_description3")}
              </p>
              <p className="text-lg leading-relaxed">
                {t("about_description4")}
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                <div className="text-8xl">
                  <img src="./images/coffee.png" alt="coffee" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
