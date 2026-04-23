import React, { useState, useRef, useEffect } from "react";
import {
  Search, Bell, Settings, LogOut, User, CreditCard,
  Shield, Moon, Sun, ChevronDown, Package, ExternalLink,
  X, Check, Trash2,
} from "lucide-react";

interface Props {
  onNavigate: (id: string) => void;
}

const notifications = [
  { id: 1, title: "새 버전 출시", desc: "v1.1.0이 배포되었습니다.", time: "방금 전", read: false },
  { id: 2, title: "PR 리뷰 요청", desc: "버튼 컴포넌트 개선 PR이 열렸습니다.", time: "1시간 전", read: false },
  { id: 3, title: "이슈 종료", desc: "#42 다크모드 이슈가 해결되었습니다.", time: "어제", read: true },
];

export default function TopBar({ onNavigate }: Props) {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notiList, setNotiList] = useState(notifications);
  const [searchValue, setSearchValue] = useState("");
  const profileRef = useRef<HTMLDivElement>(null);
  const notiRef = useRef<HTMLDivElement>(null);

  const unread = notiList.filter((n) => !n.read).length;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) setProfileOpen(false);
      if (notiRef.current && !notiRef.current.contains(e.target as Node)) setNotiOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const markAllRead = () => setNotiList((prev) => prev.map((n) => ({ ...n, read: true })));
  const deleteNoti = (id: number) => setNotiList((prev) => prev.filter((n) => n.id !== id));

  const navItems = [
    { id: "buttons", label: "버튼" },
    { id: "cards", label: "카드" },
    { id: "badges", label: "배지" },
    { id: "inputs", label: "인풋" },
    { id: "tabs", label: "탭" },
    { id: "menus", label: "메뉴" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-4 gap-3 border-b"
      style={{
        background: "var(--glass-bg)",
        backdropFilter: "blur(18px) saturate(180%)",
        WebkitBackdropFilter: "blur(18px) saturate(180%)",
        borderColor: "var(--color-border)",
        boxShadow: "0 1px 3px oklch(0.145 0.012 255 / 0.06)",
      }}
    >
      {/* 브랜드 */}
      <button
        onClick={() => onNavigate("hero")}
        className="flex items-center gap-2 shrink-0 mr-2"
      >
        <div
          className="size-7 rounded-lg flex items-center justify-center text-[11px] font-black"
          style={{
            background: "var(--color-primary)",
            color: "var(--color-primary-foreground)",
            boxShadow: "0 2px 0 oklch(0.145 0.012 255 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.15)",
          }}
        >
          N
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight" style={{ color: "var(--color-foreground)" }}>
            Nekoi_UI
          </span>
          <span
            className="px-1.5 py-0.5 rounded text-[10px] font-semibold border"
            style={{
              background: "oklch(0.285 0.045 255 / 0.08)",
              color: "var(--color-primary)",
              borderColor: "oklch(0.285 0.045 255 / 0.20)",
            }}
          >
            v1.0.0
          </span>
        </div>
      </button>

      {/* 수평 내비 */}
      <nav className="hidden md:flex items-center gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors nk-menu-item"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* 검색 */}
      <div className="flex-1 max-w-xs relative hidden sm:block">
        <Search
          className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5"
          style={{ color: "var(--color-muted-foreground)" }}
        />
        <input
          type="text"
          placeholder="컴포넌트 검색..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full pl-8 pr-3 py-1.5 text-sm rounded-lg border outline-none transition-all"
          style={{
            background: "var(--color-input)",
            borderColor: "var(--color-border)",
            color: "var(--color-foreground)",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--color-ring)";
            e.currentTarget.style.boxShadow = "0 0 0 3px oklch(0.530 0.180 255 / 0.15)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--color-border)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      <div className="flex items-center gap-1 ml-auto">
        {/* npm 링크 */}
        <a
          href="https://www.npmjs.com/~nekoi93"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border nk-btn-3d transition-colors"
          style={{
            background: "var(--color-card)",
            color: "var(--color-foreground)",
            borderColor: "var(--color-border)",
          }}
        >
          <Package className="size-3" />
          npm
          <ExternalLink className="size-2.5" />
        </a>

        {/* 알림 */}
        <div className="relative" ref={notiRef}>
          <button
            onClick={() => { setNotiOpen((v) => !v); setProfileOpen(false); }}
            className="relative size-9 rounded-lg flex items-center justify-center border nk-btn-3d"
            style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
          >
            <Bell className="size-4" style={{ color: "var(--color-foreground)" }} />
            {unread > 0 && (
              <span
                className="absolute top-1.5 right-1.5 size-2 rounded-full"
                style={{ background: "var(--color-destructive)" }}
              />
            )}
          </button>

          {notiOpen && (
            <div
              className="absolute right-0 top-11 w-80 rounded-xl border overflow-hidden nk-float z-50"
            >
              <div
                className="flex items-center justify-between px-4 py-3 border-b"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="text-sm font-semibold" style={{ color: "var(--color-foreground)" }}>
                  알림 {unread > 0 && <span style={{ color: "var(--color-accent)" }}>({unread})</span>}
                </span>
                {unread > 0 && (
                  <button
                    onClick={markAllRead}
                    className="text-xs font-medium"
                    style={{ color: "var(--color-accent)" }}
                  >
                    모두 읽음
                  </button>
                )}
              </div>
              <div className="divide-y" style={{ divideColor: "var(--color-border)" }}>
                {notiList.length === 0 ? (
                  <p className="py-8 text-center text-sm" style={{ color: "var(--color-muted-foreground)" }}>
                    알림이 없습니다
                  </p>
                ) : (
                  notiList.map((n) => (
                    <div
                      key={n.id}
                      className="flex items-start gap-3 px-4 py-3 group"
                      style={{ background: n.read ? "transparent" : "oklch(0.530 0.180 255 / 0.04)" }}
                    >
                      <div className="mt-0.5 shrink-0">
                        {n.read
                          ? <Check className="size-3.5" style={{ color: "var(--color-muted-foreground)" }} />
                          : <div className="size-2 rounded-full mt-1" style={{ background: "var(--color-accent)" }} />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{n.title}</p>
                        <p className="text-xs mt-0.5 truncate" style={{ color: "var(--color-muted-foreground)" }}>{n.desc}</p>
                        <p className="text-[11px] mt-1" style={{ color: "var(--color-muted-foreground)" }}>{n.time}</p>
                      </div>
                      <button
                        onClick={() => deleteNoti(n.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 rounded transition-opacity"
                        style={{ color: "var(--color-muted-foreground)" }}
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* 프로필 */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => { setProfileOpen((v) => !v); setNotiOpen(false); }}
            className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl border nk-btn-3d"
            style={{ background: "var(--color-card)", borderColor: "var(--color-border)" }}
          >
            <div
              className="size-7 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
            >
              N
            </div>
            <span className="hidden sm:block text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
              nekoi93
            </span>
            <ChevronDown
              className="size-3 transition-transform"
              style={{
                color: "var(--color-muted-foreground)",
                transform: profileOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 top-11 w-72 rounded-xl border overflow-hidden nk-float z-50">
              {/* 프로필 헤더 */}
              <div
                className="px-4 py-4 border-b"
                style={{ borderColor: "var(--color-border)", background: "oklch(0.285 0.045 255 / 0.04)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="size-10 rounded-xl flex items-center justify-center text-base font-black"
                    style={{
                      background: "var(--color-primary)",
                      color: "var(--color-primary-foreground)",
                      boxShadow: "0 2px 0 oklch(0.145 0.012 255 / 0.25), inset 0 1px 0 oklch(1 0 0 / 0.15)",
                    }}
                  >
                    N
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "var(--color-foreground)" }}>Nekoi</p>
                    <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>nekoi@everlib.pro</p>
                    <a
                      href="https://www.npmjs.com/~nekoi93"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] flex items-center gap-1 mt-0.5"
                      style={{ color: "var(--color-accent)" }}
                    >
                      <Package className="size-2.5" />
                      npmjs.com/~nekoi93
                    </a>
                  </div>
                </div>
              </div>

              {/* 메뉴 항목 */}
              <div className="p-2 space-y-0.5">
                {[
                  { icon: User, label: "프로필 설정" },
                  { icon: CreditCard, label: "결제 관리" },
                  { icon: Shield, label: "보안 및 인증" },
                ].map(({ icon: Icon, label }) => (
                  <button
                    key={label}
                    className="nk-menu-item w-full text-left"
                  >
                    <Icon className="size-4 shrink-0" style={{ color: "var(--color-muted-foreground)" }} />
                    {label}
                  </button>
                ))}

                <div
                  className="my-1 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                />

                {/* 다크모드 토글 */}
                <div className="nk-menu-item justify-between">
                  <div className="flex items-center gap-2">
                    {darkMode
                      ? <Moon className="size-4" style={{ color: "var(--color-muted-foreground)" }} />
                      : <Sun className="size-4" style={{ color: "var(--color-muted-foreground)" }} />
                    }
                    <span>다크 모드</span>
                  </div>
                  <button
                    onClick={() => setDarkMode((v) => !v)}
                    className="relative w-9 h-5 rounded-full transition-colors shrink-0"
                    style={{
                      background: darkMode ? "var(--color-accent)" : "var(--color-muted)",
                    }}
                  >
                    <span
                      className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform"
                      style={{ transform: darkMode ? "translateX(16px)" : "translateX(2px)" }}
                    />
                  </button>
                </div>

                <div
                  className="my-1 border-t"
                  style={{ borderColor: "var(--color-border)" }}
                />

                <button
                  className="nk-menu-item w-full text-left"
                  style={{ color: "var(--color-destructive)" }}
                >
                  <LogOut className="size-4 shrink-0" />
                  로그아웃
                </button>
              </div>

              {/* 패키지 정보 */}
              <div
                className="px-4 py-2.5 border-t text-center"
                style={{ borderColor: "var(--color-border)", background: "var(--color-muted)" }}
              >
                <p className="text-[11px]" style={{ color: "var(--color-muted-foreground)" }}>
                  @nekoi93/ui v1.0.0 · MIT License
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
