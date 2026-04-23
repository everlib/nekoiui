import React, { useState } from "react";
import {
  Plus, X, MessageSquare, Share2, Bookmark, Download,
  Bell, Settings, LogOut, User, CreditCard, Shield,
  Moon, Sun, Package, ExternalLink, ChevronRight,
} from "lucide-react";

type Panel = null | "profile" | "notifications" | "settings";

const notis = [
  { id: 1, title: "새 버전 출시", time: "방금 전", read: false },
  { id: 2, title: "PR 리뷰 요청", time: "1시간 전", read: false },
  { id: 3, title: "이슈 종료됨", time: "어제", read: true },
];

export default function FloatingMenu() {
  const [fabOpen, setFabOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [notiList, setNotiList] = useState(notis);
  const unread = notiList.filter((n) => !n.read).length;

  const togglePanel = (p: Panel) => setPanel((prev) => (prev === p ? null : p));

  const fabActions = [
    { icon: MessageSquare, label: "피드백", color: "var(--color-accent)" },
    { icon: Share2, label: "공유", color: "var(--color-success)" },
    { icon: Bookmark, label: "저장", color: "var(--color-warning)" },
    { icon: Download, label: "다운로드", color: "var(--color-primary)" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* 패널 */}
      {panel && (
        <div
          className="nk-float w-72 rounded-2xl overflow-hidden"
          style={{ boxShadow: "var(--shadow-overlay)" }}
        >
          {/* 프로필 패널 */}
          {panel === "profile" && (
            <>
              <div
                className="px-4 py-4 border-b"
                style={{ borderColor: "var(--color-border)", background: "oklch(0.285 0.045 255 / 0.04)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>내 계정</span>
                  <button onClick={() => setPanel(null)}><X className="size-4" style={{ color: "var(--color-muted-foreground)" }} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="size-11 rounded-xl flex items-center justify-center font-black text-base"
                    style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
                  >N</div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "var(--color-foreground)" }}>Nekoi</p>
                    <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>nekoi@everlib.pro</p>
                    <a href="https://www.npmjs.com/~nekoi93" target="_blank" rel="noopener noreferrer"
                      className="text-[11px] flex items-center gap-1 mt-0.5" style={{ color: "var(--color-accent)" }}>
                      <Package className="size-2.5" />npmjs.com/~nekoi93
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-2 space-y-0.5">
                {[{ icon: User, label: "프로필 설정" }, { icon: CreditCard, label: "결제 관리" }, { icon: Shield, label: "보안 및 인증" }]
                  .map(({ icon: Icon, label }) => (
                    <button key={label} className="nk-menu-item w-full text-left">
                      <Icon className="size-4" style={{ color: "var(--color-muted-foreground)" }} />{label}
                      <ChevronRight className="ml-auto size-3" style={{ color: "var(--color-muted-foreground)" }} />
                    </button>
                  ))}
                <div className="border-t my-1" style={{ borderColor: "var(--color-border)" }} />
                <div className="nk-menu-item justify-between">
                  <div className="flex items-center gap-2">
                    {darkMode ? <Moon className="size-4" style={{ color: "var(--color-muted-foreground)" }} /> : <Sun className="size-4" style={{ color: "var(--color-muted-foreground)" }} />}
                    <span>다크 모드</span>
                  </div>
                  <button onClick={() => setDarkMode((v) => !v)}
                    className="relative w-9 h-5 rounded-full transition-colors"
                    style={{ background: darkMode ? "var(--color-accent)" : "var(--color-muted)" }}>
                    <span className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform"
                      style={{ transform: darkMode ? "translateX(16px)" : "translateX(2px)" }} />
                  </button>
                </div>
                <div className="border-t my-1" style={{ borderColor: "var(--color-border)" }} />
                <button className="nk-menu-item w-full text-left" style={{ color: "var(--color-destructive)" }}>
                  <LogOut className="size-4" />로그아웃
                </button>
              </div>
            </>
          )}

          {/* 알림 패널 */}
          {panel === "notifications" && (
            <>
              <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
                <span className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                  알림 {unread > 0 && <span style={{ color: "var(--color-accent)" }}>({unread})</span>}
                </span>
                <div className="flex items-center gap-2">
                  {unread > 0 && (
                    <button onClick={() => setNotiList((p) => p.map((n) => ({ ...n, read: true })))}
                      className="text-xs" style={{ color: "var(--color-accent)" }}>모두 읽음</button>
                  )}
                  <button onClick={() => setPanel(null)}><X className="size-4" style={{ color: "var(--color-muted-foreground)" }} /></button>
                </div>
              </div>
              <div className="divide-y" style={{ divideColor: "var(--color-border)" }}>
                {notiList.map((n) => (
                  <div key={n.id} className="px-4 py-3 flex items-start gap-2.5"
                    style={{ background: n.read ? "transparent" : "oklch(0.530 0.180 255 / 0.04)" }}>
                    <div className="mt-1 shrink-0">
                      {n.read
                        ? <div className="size-2 rounded-full" style={{ background: "var(--color-muted)" }} />
                        : <div className="size-2 rounded-full" style={{ background: "var(--color-accent)" }} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{n.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-muted-foreground)" }}>{n.time}</p>
                    </div>
                    <button onClick={() => setNotiList((p) => p.filter((x) => x.id !== n.id))}>
                      <X className="size-3" style={{ color: "var(--color-muted-foreground)" }} />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* 설정 패널 */}
          {panel === "settings" && (
            <>
              <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: "var(--color-border)" }}>
                <span className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>설정</span>
                <button onClick={() => setPanel(null)}><X className="size-4" style={{ color: "var(--color-muted-foreground)" }} /></button>
              </div>
              <div className="p-2 space-y-0.5">
                {[
                  { icon: Bell, label: "알림 설정" },
                  { icon: Shield, label: "개인정보 보호" },
                  { icon: Package, label: "패키지 정보" },
                ].map(({ icon: Icon, label }) => (
                  <button key={label} className="nk-menu-item w-full text-left">
                    <Icon className="size-4" style={{ color: "var(--color-muted-foreground)" }} />{label}
                    <ChevronRight className="ml-auto size-3" style={{ color: "var(--color-muted-foreground)" }} />
                  </button>
                ))}
                <div className="border-t my-1" style={{ borderColor: "var(--color-border)" }} />
                <a href="https://everlib.pro/" target="_blank" rel="noopener noreferrer"
                  className="nk-menu-item w-full text-left">
                  <ExternalLink className="size-4" style={{ color: "var(--color-muted-foreground)" }} />everlib.pro
                </a>
              </div>
            </>
          )}
        </div>
      )}

      {/* 도킹 바 */}
      <div
        className="flex items-center gap-1 p-1.5 rounded-2xl nk-glass"
        style={{ boxShadow: "var(--shadow-overlay)" }}
      >
        {/* 프로필 */}
        <button
          onClick={() => { togglePanel("profile"); setFabOpen(false); }}
          className="relative size-9 rounded-xl flex items-center justify-center nk-btn-3d border transition-colors"
          style={{
            background: panel === "profile" ? "var(--color-primary)" : "var(--color-card)",
            borderColor: panel === "profile" ? "var(--color-primary)" : "var(--color-border)",
          }}
        >
          <User className="size-4" style={{ color: panel === "profile" ? "var(--color-primary-foreground)" : "var(--color-foreground)" }} />
        </button>

        {/* 알림 */}
        <button
          onClick={() => { togglePanel("notifications"); setFabOpen(false); }}
          className="relative size-9 rounded-xl flex items-center justify-center nk-btn-3d border transition-colors"
          style={{
            background: panel === "notifications" ? "var(--color-primary)" : "var(--color-card)",
            borderColor: panel === "notifications" ? "var(--color-primary)" : "var(--color-border)",
          }}
        >
          <Bell className="size-4" style={{ color: panel === "notifications" ? "var(--color-primary-foreground)" : "var(--color-foreground)" }} />
          {unread > 0 && (
            <span className="absolute top-1 right-1 size-2 rounded-full" style={{ background: "var(--color-destructive)" }} />
          )}
        </button>

        {/* 설정 */}
        <button
          onClick={() => { togglePanel("settings"); setFabOpen(false); }}
          className="relative size-9 rounded-xl flex items-center justify-center nk-btn-3d border transition-colors"
          style={{
            background: panel === "settings" ? "var(--color-primary)" : "var(--color-card)",
            borderColor: panel === "settings" ? "var(--color-primary)" : "var(--color-border)",
          }}
        >
          <Settings className="size-4" style={{ color: panel === "settings" ? "var(--color-primary-foreground)" : "var(--color-foreground)" }} />
        </button>

        <div className="w-px h-6 mx-1" style={{ background: "var(--color-border)" }} />

        {/* FAB */}
        <div className="relative">
          {fabOpen && (
            <div className="absolute bottom-12 right-0 flex flex-col items-end gap-2">
              {fabActions.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded-lg nk-card"
                    style={{ color: "var(--color-foreground)", whiteSpace: "nowrap" }}
                  >
                    {label}
                  </span>
                  <button
                    className="size-9 rounded-xl flex items-center justify-center nk-btn-3d border"
                    style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
                  >
                    <Icon className="size-4" style={{ color }} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => { setFabOpen((v) => !v); setPanel(null); }}
            className="size-9 rounded-xl flex items-center justify-center nk-btn-3d border transition-all"
            style={{
              background: fabOpen ? "var(--color-primary)" : "var(--color-card)",
              borderColor: fabOpen ? "var(--color-primary)" : "var(--color-border)",
              transform: fabOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <Plus className="size-4" style={{ color: fabOpen ? "var(--color-primary-foreground)" : "var(--color-foreground)" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
