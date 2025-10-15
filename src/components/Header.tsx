import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");
  const { t } = useTranslation();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (theme === "dark" || (!theme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = isEnglish ? "zh" : "en";
    i18n.changeLanguage(newLang);
    setIsEnglish(!isEnglish);
  };

  const navItems = [
    { label: t("Home"), href: "#home" },
    { label: t("About"), href: "#about" },
    { label: t("Skills"), href: "#skills" },
    { label: t("Projects"), href: "#projects" },
    { label: t("Contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">Portfolio</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4"
            >
              {isDark ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>

            {/* 🌍 語言切換 - 風格三：現代漸變滑塊 */}
            <button
              onClick={toggleLanguage}
              className="relative ml-2 "
              style={{
                width: "80px",
                height: "36px",
                borderRadius: "18px",
                background: " rgba(219, 217, 217, 0.58)", //按鈕邊框顏色
                padding: "2px",
                transition: "transform 0.3s",
                outline: "none",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                className="relative flex items-center justify-between"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "16px",
                  backgroundColor: isDark
                    ? "rgba(17, 24, 39, 1)"
                    : "rgba(255, 255, 255, 0.6)", //按鈕底部的顏色
                  padding: "0 4px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "32px",
                    height: "28px",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(to right, rgba(230, 231, 233, 1), rgba(58, 120, 253, 1))",
                    transform: isEnglish ? "translateX(40px)" : "translateX(0)",
                    transition: "transform 0.3s ease-out",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "6px",
                    color: !isEnglish
                      ? "white"
                      : isDark
                      ? "rgb(156, 163, 175)"
                      : "rgb(75, 85, 99)",
                    transition: "color 0.3s",
                  }}
                >
                  中
                </span>
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginRight: "6px",
                    color: isEnglish
                      ? "white"
                      : isDark
                      ? "rgb(156, 163, 175)"
                      : "rgb(75, 85, 99)",
                    transition: "color 0.3s",
                  }}
                >
                  EN
                </span>
              </div>
            </button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile 語言切換 */}
            <button
              onClick={toggleLanguage}
              className="relative "
              style={{
                width: "64px",
                height: "32px",
                borderRadius: "16px",
                background:
                  "linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))",
                padding: "2px",
                transition: "transform 0.3s",
                outline: "none",
                border: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div
                className="relative flex items-center justify-between"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  backgroundColor: isDark ? "rgb(17, 24, 39)" : "white",
                  padding: "0 2px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "24px",
                    height: "24px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))",
                    transform: isEnglish ? "translateX(32px)" : "translateX(0)",
                    transition: "transform 0.3s ease-out",
                  }}
                />
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "4px",
                    color: !isEnglish
                      ? "white"
                      : isDark
                      ? "rgb(156, 163, 175)"
                      : "rgb(75, 85, 99)",
                    transition: "color 0.3s",
                  }}
                >
                  中
                </span>
                <span
                  style={{
                    position: "relative",
                    zIndex: 10,
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginRight: "4px",
                    color: isEnglish
                      ? "white"
                      : isDark
                      ? "rgb(156, 163, 175)"
                      : "rgb(75, 85, 99)",
                    transition: "color 0.3s",
                  }}
                >
                  EN
                </span>
              </div>
            </button>

            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
