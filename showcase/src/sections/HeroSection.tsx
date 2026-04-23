import React from "react";
import { Package, ExternalLink, Terminal } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-4">
      <div
        className="rounded-2xl p-8 border"
        style={{
          background: "oklch(0.285 0.045 255 / 0.04)",
          borderColor: "oklch(0.285 0.045 255 / 0.15)",
        }}
      >
        <div className="flex items-start gap-4 mb-6">
          <div
            className="size-14 rounded-2xl flex items-center justify-center text-2xl font-black shrink-0"
            style={{
              background: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
              boxShadow: "0 4px 0 oklch(0.145 0.012 255 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.15)",
            }}
          >
            N
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>
                @nekoi93/ui
              </h1>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-semibold border"
                style={{
                  background: "oklch(0.285 0.045 255 / 0.10)",
                  color: "var(--color-primary)",
                  borderColor: "oklch(0.285 0.045 255 / 0.25)",
                }}
              >
                v1.0.0
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
              White Flat Modern Glassmorphism 디자인 시스템 — 3D 조명 버튼, 일관된 쉐도우 깊이,
              플랫 화이트 기반 메뉴 시스템. Radix UI + Tailwind CSS v4 기반.
            </p>
          </div>
        </div>

        {/* 설치 커맨드 */}
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-xl border mb-4"
          style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          <Terminal className="size-4 shrink-0" style={{ color: "var(--color-muted-foreground)" }} />
          <code className="text-sm font-mono flex-1" style={{ color: "var(--color-foreground)" }}>
            npm install @nekoi93/ui
          </code>
        </div>

        {/* 메타 정보 */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl border"
          style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          {[
            { label: "제작자", value: "Nekoi" },
            { label: "이메일", value: "nekoi@everlib.pro" },
            { label: "라이선스", value: "MIT" },
            { label: "버전", value: "1.0.0" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[11px] font-medium uppercase tracking-wide mb-1" style={{ color: "var(--color-muted-foreground)" }}>
                {label}
              </p>
              <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>{value}</p>
            </div>
          ))}
        </div>

        {/* 링크 */}
        <div className="flex items-center gap-3 mt-4">
          <a
            href="https://www.npmjs.com/~nekoi93"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold nk-btn-3d border"
            style={{ background: "var(--color-card)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }}
          >
            <Package className="size-3.5" />
            npm 패키지
            <ExternalLink className="size-3" />
          </a>
          <a
            href="https://everlib.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold nk-btn-3d border"
            style={{ background: "var(--color-primary)", borderColor: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
          >
            <ExternalLink className="size-3.5" />
            everlib.pro
          </a>
        </div>
      </div>
    </section>
  );
}
