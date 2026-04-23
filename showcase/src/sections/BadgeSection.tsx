import React from "react";
import { Badge } from "@nekoi93/ui";

export default function BadgeSection() {
  return (
    <section id="badges" className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>배지</h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
          의미론적 상태와 카테고리를 표현하는 pill 형태 배지
        </p>
      </div>
      <div className="nk-card p-5 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-muted-foreground)" }}>
            기본 변형
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">기본</Badge>
            <Badge variant="secondary">보조</Badge>
            <Badge variant="outline">아웃라인</Badge>
            <Badge variant="destructive">위험</Badge>
          </div>
        </div>
        <div className="border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--color-muted-foreground)" }}>
            상태 표시 활용 예시
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">출시됨</Badge>
            <Badge variant="secondary">베타</Badge>
            <Badge variant="outline">실험적</Badge>
            <Badge variant="destructive">지원 종료</Badge>
            <Badge variant="secondary">신규</Badge>
            <Badge variant="default">안정</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
