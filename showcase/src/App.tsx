import React, { useState } from "react";
import TopBar from "./components/TopBar";
import SidebarNav from "./components/SidebarNav";
import FloatingMenu from "./components/FloatingMenu";
import HeroSection from "./sections/HeroSection";
import ButtonSection from "./sections/ButtonSection";
import CardSection from "./sections/CardSection";
import BadgeSection from "./sections/BadgeSection";
import InputSection from "./sections/InputSection";
import TabsSection from "./sections/TabsSection";
import SelectSection from "./sections/SelectSection";
import MenuSection from "./sections/MenuSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans" style={{ background: "var(--color-background)" }}>
      <TopBar onNavigate={scrollTo} />

      <div className="flex pt-14">
        {/* 사이드바 */}
        <aside className="hidden lg:block w-60 shrink-0 fixed left-0 top-14 bottom-0 overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-card)]">
          <SidebarNav active={activeSection} onNavigate={scrollTo} />
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 lg:ml-60 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-10 space-y-24">
            <HeroSection />
            <ButtonSection />
            <CardSection />
            <BadgeSection />
            <InputSection />
            <TabsSection />
            <SelectSection />
            <MenuSection />

            {/* 푸터 */}
            <footer
              className="py-10 border-t text-center text-sm"
              style={{ borderColor: "var(--color-border)", color: "var(--color-muted-foreground)" }}
            >
              <p className="font-semibold" style={{ color: "var(--color-foreground)" }}>@nekoi93/ui v1.0.0</p>
              <p className="mt-1">
                제작자{" "}
                <a
                  href="https://everlib.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                  style={{ color: "var(--color-accent)" }}
                >
                  Nekoi
                </a>
                {" · "}
                <a
                  href="https://www.npmjs.com/~nekoi93"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                  style={{ color: "var(--color-accent)" }}
                >
                  npmjs.com/~nekoi93
                </a>
                {" · "}MIT License
              </p>
            </footer>
          </div>
        </main>
      </div>

      <FloatingMenu />
    </div>
  );
}
