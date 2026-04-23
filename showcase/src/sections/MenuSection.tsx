import React, { useState } from "react";
import { Badge, Button, Separator } from "@nekoi93/ui";
import {
  Home, BarChart2, Users, Settings, Bell, CreditCard,
  Shield, HelpCircle, ChevronRight, TrendingUp, Package,
  User, LogOut, Edit, Trash2, Copy, ExternalLink, Download,
  Sun, Moon,
} from "lucide-react";

/* ── 수평 탑 내비 ── */
const topNavItems = ["홈", "분석", "사용자", "설정"];
const topNavContent: Record<string, React.ReactNode> = {
  홈: (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {[
        { icon: TrendingUp, label: "매출", value: "₩12.8M", color: "var(--color-accent)" },
        { icon: Users, label: "사용자", value: "3,241명", color: "var(--color-success)" },
        { icon: Package, label: "패키지", value: "v1.0.0", color: "var(--color-primary)" },
        { icon: Bell, label: "알림", value: "2건", color: "var(--color-warning)" },
      ].map(({ icon: Icon, label, value, color }) => (
        <div key={label} className="p-3 rounded-xl" style={{ background: "var(--color-muted)" }}>
          <Icon className="size-4 mb-1" style={{ color }} />
          <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{label}</p>
          <p className="font-bold text-sm" style={{ color: "var(--color-foreground)" }}>{value}</p>
        </div>
      ))}
    </div>
  ),
  분석: (
    <div className="mt-4 space-y-2">
      <p className="text-sm font-medium mb-2" style={{ color: "var(--color-foreground)" }}>주간 다운로드</p>
      {["npm 다운로드", "GitHub Stars", "이슈", "PR"].map((label, i) => {
        const vals = [84, 62, 23, 40];
        return (
          <div key={label} className="flex items-center gap-3">
            <span className="text-xs w-24 shrink-0" style={{ color: "var(--color-muted-foreground)" }}>{label}</span>
            <div className="flex-1 h-2 rounded-full" style={{ background: "var(--color-muted)" }}>
              <div className="h-full rounded-full" style={{ width: `${vals[i]}%`, background: "var(--color-accent)" }} />
            </div>
            <span className="text-xs w-7 text-right" style={{ color: "var(--color-muted-foreground)" }}>{vals[i]}</span>
          </div>
        );
      })}
    </div>
  ),
  사용자: (
    <div className="mt-4 space-y-2">
      {[
        { name: "김민준", role: "관리자", active: true },
        { name: "이서연", role: "개발자", active: true },
        { name: "박도현", role: "디자이너", active: false },
      ].map(({ name, role, active }) => (
        <div key={name} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: "var(--color-muted)" }}>
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}>{name[0]}</div>
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{name}</p>
              <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{role}</p>
            </div>
          </div>
          <Badge variant={active ? "default" : "secondary"}>{active ? "활성" : "휴가"}</Badge>
        </div>
      ))}
    </div>
  ),
  설정: (
    <div className="mt-4 space-y-2">
      {[
        { label: "이메일 알림", enabled: true },
        { label: "자동 업데이트", enabled: false },
        { label: "사용 통계 공유", enabled: true },
      ].map(({ label, enabled: init }) => {
        const [on, setOn] = useState(init);
        return (
          <div key={label} className="flex items-center justify-between px-3 py-2.5 rounded-lg" style={{ background: "var(--color-muted)" }}>
            <span className="text-sm" style={{ color: "var(--color-foreground)" }}>{label}</span>
            <button onClick={() => setOn((v) => !v)}
              className="relative w-9 h-5 rounded-full transition-colors"
              style={{ background: on ? "var(--color-accent)" : "var(--color-muted-foreground)" }}>
              <span className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform"
                style={{ transform: on ? "translateX(16px)" : "translateX(2px)" }} />
            </button>
          </div>
        );
      })}
    </div>
  ),
};

/* ── 수직 설정 메뉴 ── */
const settingsMenu = [
  { id: "general", icon: Settings, label: "일반" },
  { id: "notifications", icon: Bell, label: "알림" },
  { id: "billing", icon: CreditCard, label: "결제" },
  { id: "security", icon: Shield, label: "보안" },
  { id: "help", icon: HelpCircle, label: "도움말" },
];
const settingsContent: Record<string, React.ReactNode> = {
  general: (
    <div className="space-y-3">
      <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>일반 설정</p>
      {[{ label: "표시 이름", placeholder: "Nekoi" }, { label: "이메일", placeholder: "nekoi@everlib.pro" }].map(({ label, placeholder }) => (
        <div key={label} className="space-y-1">
          <label className="text-xs font-medium" style={{ color: "var(--color-muted-foreground)" }}>{label}</label>
          <input className="w-full px-3 py-2 text-sm rounded-lg border outline-none"
            placeholder={placeholder}
            style={{ background: "var(--color-input)", borderColor: "var(--color-border)", color: "var(--color-foreground)" }} />
        </div>
      ))}
      <Button size="sm">저장</Button>
    </div>
  ),
  notifications: (
    <div className="space-y-3">
      <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>알림 설정</p>
      {[
        { label: "이메일 알림", desc: "새 버전 출시 알림", init: true },
        { label: "푸시 알림", desc: "브라우저 푸시 알림", init: false },
        { label: "주간 리포트", desc: "매주 월요일 리포트", init: true },
      ].map(({ label, desc, init }) => {
        const [on, setOn] = useState(init);
        return (
          <div key={label} className="flex items-center justify-between py-2 border-b" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-sm" style={{ color: "var(--color-foreground)" }}>{label}</p>
              <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{desc}</p>
            </div>
            <button onClick={() => setOn((v) => !v)}
              className="relative w-9 h-5 rounded-full transition-colors"
              style={{ background: on ? "var(--color-accent)" : "var(--color-muted-foreground)" }}>
              <span className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform"
                style={{ transform: on ? "translateX(16px)" : "translateX(2px)" }} />
            </button>
          </div>
        );
      })}
    </div>
  ),
  billing: (
    <div className="space-y-3">
      <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>결제 관리</p>
      <div className="p-3 rounded-xl border" style={{ borderColor: "var(--color-border)", background: "var(--color-muted)" }}>
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>현재 플랜</p>
          <Badge>오픈소스 · 무료</Badge>
        </div>
        <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>MIT License — 상업적 사용 가능</p>
      </div>
      <Button size="sm" variant="outline">사용 내역 조회</Button>
    </div>
  ),
  security: (
    <div className="space-y-3">
      <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>보안 설정</p>
      {[
        { label: "2단계 인증", enabled: false },
        { label: "로그인 알림", enabled: true },
      ].map(({ label, enabled: init }) => {
        const [on, setOn] = useState(init);
        return (
          <div key={label} className="flex items-center justify-between py-2 border-b" style={{ borderColor: "var(--color-border)" }}>
            <span className="text-sm" style={{ color: "var(--color-foreground)" }}>{label}</span>
            <button onClick={() => setOn((v) => !v)}
              className="relative w-9 h-5 rounded-full transition-colors"
              style={{ background: on ? "var(--color-accent)" : "var(--color-muted-foreground)" }}>
              <span className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform"
                style={{ transform: on ? "translateX(16px)" : "translateX(2px)" }} />
            </button>
          </div>
        );
      })}
      <Button size="sm" variant="destructive">세션 전체 종료</Button>
    </div>
  ),
  help: (
    <div className="space-y-2">
      <p className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>도움말 및 문서</p>
      {[
        { label: "npm 패키지", href: "https://www.npmjs.com/~nekoi93" },
        { label: "GitHub 이슈", href: "https://github.com/nekoi93/nekoi-ui/issues" },
        { label: "everlib.pro", href: "https://everlib.pro/" },
      ].map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
          className="nk-menu-item w-full">
          <ExternalLink className="size-4" style={{ color: "var(--color-muted-foreground)" }} />
          {label}
          <ChevronRight className="ml-auto size-3" style={{ color: "var(--color-muted-foreground)" }} />
        </a>
      ))}
    </div>
  ),
};

/* ── 글래스 드롭다운 ── */
function GlassDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const items = [
    { icon: Edit, label: "편집", desc: "컴포넌트 수정" },
    { icon: Copy, label: "복사", desc: "코드 복사" },
    { icon: Download, label: "내보내기", desc: "파일 다운로드" },
    { icon: Trash2, label: "삭제", desc: "항목 제거", danger: true },
  ];
  return (
    <div className="flex items-start gap-6">
      <div className="relative">
        <Button onClick={() => setOpen((v) => !v)} variant="outline">
          {selected ?? "메뉴 열기"}
          <ChevronRight className={`size-3 transition-transform ${open ? "rotate-90" : ""}`} />
        </Button>
        {open && (
          <div className="absolute left-0 top-11 w-52 nk-glass rounded-xl p-1.5 z-10">
            {items.map(({ icon: Icon, label, desc, danger }) => (
              <button
                key={label}
                onClick={() => { setSelected(label); setOpen(false); }}
                className="nk-menu-item w-full text-left"
                style={danger ? { color: "var(--color-destructive)" } : {}}
              >
                <Icon className="size-4 shrink-0" />
                <div>
                  <p className="text-sm font-medium leading-none">{label}</p>
                  <p className="text-xs mt-0.5 opacity-70">{desc}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      {selected && (
        <div className="nk-card p-4 rounded-xl flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--color-muted-foreground)" }}>선택됨</p>
          <p className="text-sm font-bold" style={{ color: "var(--color-foreground)" }}>{selected}</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-muted-foreground)" }}>{items.find((i) => i.label === selected)?.desc}</p>
        </div>
      )}
    </div>
  );
}

/* ── 플로팅 메뉴 미리보기 ── */
function FloatingPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-end justify-end h-28 relative">
      <div className="absolute bottom-0 right-0 flex flex-col items-end gap-2">
        {open && (
          <div className="flex flex-col items-end gap-1.5">
            {[
              { icon: User, label: "프로필" },
              { icon: Bell, label: "알림" },
              { icon: Settings, label: "설정" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-xs px-2 py-1 rounded-lg nk-card" style={{ color: "var(--color-foreground)" }}>{label}</span>
                <div className="size-8 rounded-lg flex items-center justify-center nk-btn-3d border"
                  style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}>
                  <Icon className="size-3.5" style={{ color: "var(--color-foreground)" }} />
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => setOpen((v) => !v)}
          className="size-10 rounded-xl nk-btn-3d border flex items-center justify-center transition-all"
          style={{
            background: open ? "var(--color-primary)" : "var(--color-card)",
            borderColor: open ? "var(--color-primary)" : "var(--color-border)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <ExternalLink className="size-4" style={{ color: open ? "var(--color-primary-foreground)" : "var(--color-foreground)" }} />
        </button>
      </div>
    </div>
  );
}

/* ── 메인 컴포넌트 ── */
export default function MenuSection() {
  const [topNav, setTopNav] = useState("홈");
  const [settingsNav, setSettingsNav] = useState("general");
  const [pillNav, setPillNav] = useState("전체");

  return (
    <section id="menus" className="space-y-8">
      <div className="mb-2">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>메뉴</h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
          수평 탑 내비, 수직 설정 메뉴, 글래스 드롭다운, 플로팅 도킹 바
        </p>
      </div>

      {/* 1. 수평 탑 내비 */}
      <div className="nk-card overflow-hidden">
        <div
          className="flex items-center gap-1 px-4 border-b"
          style={{ borderColor: "var(--color-border)" }}
        >
          {topNavItems.map((item) => (
            <button
              key={item}
              onClick={() => setTopNav(item)}
              className="relative px-4 py-3 text-sm font-medium transition-colors"
              style={{
                color: topNav === item ? "var(--color-accent)" : "var(--color-muted-foreground)",
              }}
            >
              {item}
              {topNav === item && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: "var(--color-accent)" }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="px-5 pb-5">{topNavContent[topNav]}</div>
      </div>

      {/* 2. Pill 내비 */}
      <div className="nk-card p-5">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-muted-foreground)" }}>
          Pill 내비
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {["전체", "컴포넌트", "훅", "유틸", "타입"].map((item) => (
            <button
              key={item}
              onClick={() => setPillNav(item)}
              className="px-3.5 py-1.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: pillNav === item ? "var(--color-primary)" : "var(--color-muted)",
                color: pillNav === item ? "var(--color-primary-foreground)" : "var(--color-muted-foreground)",
                boxShadow: pillNav === item ? "var(--shadow-btn), var(--light-top)" : "none",
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-xl" style={{ background: "var(--color-muted)" }}>
          <p className="text-xs font-medium" style={{ color: "var(--color-muted-foreground)" }}>
            선택됨: <span style={{ color: "var(--color-foreground)" }}>{pillNav}</span>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--color-muted-foreground)" }}>
            {pillNav === "전체" && "@nekoi93/ui의 모든 내보내기 항목 — 컴포넌트 24개, 훅 2개, 유틸 1개"}
            {pillNav === "컴포넌트" && "Button, Card, Badge, Input, Tabs, Select, Dialog, Dropdown... 총 24개"}
            {pillNav === "훅" && "useToast, useIsMobile — 2개의 유틸리티 훅"}
            {pillNav === "유틸" && "cn() — clsx + tailwind-merge 기반 클래스 병합 유틸"}
            {pillNav === "타입" && "각 컴포넌트의 Props 타입이 .d.ts로 자동 내보내기됩니다"}
          </p>
        </div>
      </div>

      {/* 3. 수직 설정 메뉴 */}
      <div className="nk-card overflow-hidden">
        <div className="flex">
          <div
            className="w-36 shrink-0 border-r p-2 space-y-0.5"
            style={{ borderColor: "var(--color-border)", background: "var(--color-muted)" }}
          >
            {settingsMenu.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setSettingsNav(id)}
                className="nk-menu-item w-full text-left text-xs"
                data-active={settingsNav === id}
              >
                <Icon className="size-3.5 shrink-0" />
                {label}
              </button>
            ))}
          </div>
          <div className="flex-1 p-5">
            {settingsContent[settingsNav]}
          </div>
        </div>
      </div>

      {/* 4. 글래스 드롭다운 */}
      <div className="nk-card p-5">
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-muted-foreground)" }}>
          글래스 드롭다운
        </p>
        <GlassDropdown />
      </div>

      {/* 5. 플로팅 도킹 바 미리보기 */}
      <div className="nk-card p-5">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-muted-foreground)" }}>
          플로팅 도킹 바 (화면 우하단에 실제 렌더링됨)
        </p>
        <p className="text-xs mb-4" style={{ color: "var(--color-muted-foreground)" }}>
          화면 우하단의 도킹 바를 클릭해 프로필 레이어, 알림, 설정 패널, FAB 액션을 확인하세요.
        </p>
        <FloatingPreview />
      </div>
    </section>
  );
}
