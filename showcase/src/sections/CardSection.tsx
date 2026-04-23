import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "@nekoi93/ui";
import { TrendingUp, Users, ShoppingCart } from "lucide-react";

export default function CardSection() {
  return (
    <section id="cards" className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>카드</h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
          플랫 화이트 기반 카드 — 글래스, 플로트, 기본 세 가지 표면 스타일
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {/* 기본 카드 */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <TrendingUp className="size-5" style={{ color: "var(--color-accent)" }} />
              <Badge variant="secondary">월간</Badge>
            </div>
            <CardTitle className="text-base">총 매출</CardTitle>
            <CardDescription>전월 대비 +12.4% 증가</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>₩12,847,000</p>
          </CardContent>
        </Card>

        {/* 글래스 카드 */}
        <div
          className="rounded-xl p-5 nk-glass"
          style={{ border: "1px solid var(--glass-border)" }}
        >
          <div className="flex items-center justify-between mb-3">
            <Users className="size-5" style={{ color: "var(--color-accent)" }} />
            <Badge>활성</Badge>
          </div>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--color-muted-foreground)" }}>활성 사용자</p>
          <p className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>3,241명</p>
          <p className="text-xs mt-2" style={{ color: "var(--color-muted-foreground)" }}>오늘 신규 +48명</p>
        </div>

        {/* 플로트 카드 */}
        <div className="rounded-xl p-5 nk-float">
          <div className="flex items-center justify-between mb-3">
            <ShoppingCart className="size-5" style={{ color: "var(--color-success)" }} />
            <Badge variant="outline">오늘</Badge>
          </div>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--color-muted-foreground)" }}>주문 건수</p>
          <p className="text-2xl font-bold" style={{ color: "var(--color-foreground)" }}>184건</p>
          <div className="mt-3 h-1.5 rounded-full" style={{ background: "var(--color-muted)" }}>
            <div className="h-full rounded-full" style={{ width: "68%", background: "var(--color-success)" }} />
          </div>
          <p className="text-xs mt-1" style={{ color: "var(--color-muted-foreground)" }}>목표 68% 달성</p>
        </div>
      </div>

      {/* 상세 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>프로젝트 요약</CardTitle>
          <CardDescription>@nekoi93/ui 라이브러리 개발 현황</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "컴포넌트", value: "24개", color: "var(--color-accent)" },
              { label: "유틸리티", value: "8개", color: "var(--color-success)" },
              { label: "버전", value: "v1.0.0", color: "var(--color-primary)" },
            ].map(({ label, value, color }) => (
              <div key={label} className="text-center p-3 rounded-lg" style={{ background: "var(--color-muted)" }}>
                <p className="text-lg font-bold" style={{ color }}>{value}</p>
                <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>{label}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-between">
          <p className="text-xs" style={{ color: "var(--color-muted-foreground)" }}>MIT License · nekoi@everlib.pro</p>
          <Button size="sm" variant="outline">자세히 보기</Button>
        </CardFooter>
      </Card>
    </section>
  );
}
