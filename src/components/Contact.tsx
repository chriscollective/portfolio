import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="size-5" />,
      label: t("contact_info_email"),
      value: "justakiss019@gmail.com",
    },
    {
      icon: <Phone className="size-5" />,
      label: t("contact_info_phone"),
      value: "0986511703",
    },
    {
      icon: <MapPin className="size-5" />,
      label: t("contact_info_location"),
      value: "New Taipei City, TW",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="size-5" />,
      label: "GitHub",
      href: "https://github.com",
    },
    {
      icon: <Linkedin className="size-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com",
    },
    {
      icon: <Twitter className="size-5" />,
      label: "Twitter",
      href: "https://twitter.com",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t("contact_title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("contact_description")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>{t("contact_form_title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contact_form_name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact_form_email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contact_form_subject")}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact_form_message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    {t("contact_form_submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t("contact_info_title")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-primary">{item.icon}</div>
                      <div>
                        <div className="font-medium">{item.label}</div>
                        {
                          <div className="text-muted-foreground">
                            {item.value}
                          </div>
                        }
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("contact_social_title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
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
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                <h3 className="font-semibold mb-2">{t("work_together")}</h3>
                <p className="text-muted-foreground">
                  {t("work_together_description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
