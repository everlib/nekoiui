import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent, Badge, Button } from "@nekoi93/ui";
import { TrendingUp, Users, Package, Settings } from "lucide-react";

export default function TabsSection() {
  return (
    <section id="tabs" className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>탭</h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
          플랫 underline 스타일 탭 — 각 탭 클릭 시 상세 콘텐츠 렌더링
        </p>
      </div>

      <div className="nk-card p-6">
        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="users">사용자</TabsTrigger>
            <TabsTrigger value="settings">설정</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, label: "월 매출", value: "₩12.8M", sub: "+12.4%" },
                { icon: Users, label: "활성 사용자", value: "3,241", sub: "+48 오늘" },
                { icon: Package, label: "배포 패키지", value: "v1.0.0", sub: "최신" },
              ].map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="p-4 rounded-xl" style={{ background: "var(--color-muted)" }}>
                  <Icon className="size-4 mb-2" style={{ color: "var(--color-accent)" }} />
                  <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{label}</p>
                  <p className="text-lg font-bold" style={{ color: "var(--color-foreground)" }}>{value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-success)" }}>{sub}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="space-y-3">
              <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>주간 트래픽</p>
              {["월", "화", "수", "목", "금", "토", "일"].map((day, i) => {
                const widths = [72, 88, 55, 94, 80, 42, 30];
                return (
                  <div key={day} className="flex items-center gap-3">
                    <span className="w-4 text-xs text-right" style={{ color: "var(--color-muted-foreground)" }}>{day}</span>
                    <div className="flex-1 h-2.5 rounded-full" style={{ background: "var(--color-muted)" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${widths[i]}%`, background: "var(--color-accent)" }}
                      />
                    </div>
                    <span className="text-xs w-8 text-right" style={{ color: "var(--color-muted-foreground)" }}>{widths[i]}%</span>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="users">
            <div className="space-y-2">
              {[
                { name: "김민준", role: "관리자", status: "활성" },
                { name: "이서연", role: "개발자", status: "활성" },
                { name: "박도현", role: "디자이너", status: "휴가" },
                { name: "최지아", role: "기획자", status: "활성" },
              ].map(({ name, role, status }) => (
                <div
                  key={name}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                  style={{ background: "var(--color-muted)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="size-7 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{ background: "var(--color-primary)", color: "var(--color-primary-foreground)" }}
                    >
                      {name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{name}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{role}</p>
                    </div>
                  </div>
                  <Badge variant={status === "활성" ? "default" : "secondary"}>{status}</Badge>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-3">
              {[
                { label: "이메일 알림", desc: "새 업데이트 시 이메일 수신", enabled: true },
                { label: "자동 업데이트", desc: "마이너 버전 자동 업데이트", enabled: false },
                { label: "사용량 통계 수집", desc: "익명 사용 데이터 공유", enabled: true },
              ].map(({ label, desc, enabled: initEnabled }) => {
                const [on, setOn] = React.useState(initEnabled);
                return (
                  <div key={label} className="flex items-center justify-between p-3 rounded-lg" style={{ background: "var(--color-muted)" }}>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>{label}</p>
                      <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{desc}</p>
                    </div>
                    <button
                      onClick={() => setOn((v) => !v)}
                      className="relative w-9 h-5 rounded-full transition-colors shrink-0"
                      style={{ background: on ? "var(--color-accent)" : "var(--color-muted-foreground)" }}
                    >
                      <span
                        className="absolute top-0.5 size-4 rounded-full bg-white shadow-sm transition-transform"
                        style={{ transform: on ? "translateX(16px)" : "translateX(2px)" }}
                      />
                    </button>
                  </div>
                );
              })}
              <Button className="mt-2" size="sm">변경 사항 저장</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
