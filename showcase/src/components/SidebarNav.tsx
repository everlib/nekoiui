import React from "react";
import {
  MousePointerClick, LayoutDashboard, Tag, TextCursorInput,
  Layers, List, ChevronRight, Zap, Package, ExternalLink,
} from "lucide-react";

interface Props {
  active: string;
  onNavigate: (id: string) => void;
}

const sections = [
  {
    group: "시작하기",
    items: [
      { id: "hero", label: "소개", icon: Package },
    ],
  },
  {
    group: "컴포넌트",
    items: [
      { id: "buttons", label: "버튼", icon: MousePointerClick },
      { id: "cards", label: "카드", icon: LayoutDashboard },
      { id: "badges", label: "배지", icon: Tag },
      { id: "inputs", label: "인풋", icon: TextCursorInput },
      { id: "tabs", label: "탭", icon: Layers },
      { id: "selects", label: "셀렉트", icon: ChevronRight },
      { id: "menus", label: "메뉴", icon: List },
    ],
  },
  {
    group: "유틸리티",
    items: [
      { id: "floating", label: "플로팅 메뉴", icon: Zap },
    ],
  },
];

export default function SidebarNav({ active, onNavigate }: Props) {
  return (
    <nav className="p-4 space-y-6">
      {sections.map((group) => (
        <div key={group.group}>
          <p
            className="text-[11px] font-semibold uppercase tracking-widest mb-2 px-2"
            style={{ color: "var(--color-muted-foreground)" }}
          >
            {group.group}
          </p>
          <ul className="space-y-0.5">
            {group.items.map(({ id, label, icon: Icon }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="nk-menu-item w-full text-left"
                    data-active={isActive}
                  >
                    <Icon className="size-4 shrink-0" />
                    {label}
                    {isActive && (
                      <ChevronRight
                        className="ml-auto size-3"
                        style={{ color: "var(--color-accent)" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div
        className="pt-4 border-t"
        style={{ borderColor: "var(--color-border)" }}
      >
        <a
          href="https://www.npmjs.com/~nekoi93"
          target="_blank"
          rel="noopener noreferrer"
          className="nk-menu-item w-full text-left text-xs"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <Package className="size-3.5 shrink-0" />
          npmjs.com/~nekoi93
          <ExternalLink className="ml-auto size-3" />
        </a>
        <a
          href="https://everlib.pro/"
          target="_blank"
          rel="noopener noreferrer"
          className="nk-menu-item w-full text-left text-xs"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          <ExternalLink className="size-3.5 shrink-0" />
          everlib.pro
        </a>
      </div>
    </nav>
  );
}
