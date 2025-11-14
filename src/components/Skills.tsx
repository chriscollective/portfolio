import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Sass", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "MongoDB", "RESTful APIs"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Streamlit", "VS Code", "Render", "Vercel"],
    },
    {
      title: "AI Tools",
      skills: ["Figma", "ChatGPT", "Claude", "Codex"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("skills_title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("skills_description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1+</div>
              <div className="text-muted-foreground">
                {t("years_experience")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">
                {t("projects_completed")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-muted-foreground">{t("hours_coding")}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">
                {t("satisfied_clients")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
