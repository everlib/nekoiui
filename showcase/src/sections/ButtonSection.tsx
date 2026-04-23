import React from "react";
import { Button } from "@nekoi93/ui";
import { Download, Send, Trash2, Plus, Loader2 } from "lucide-react";

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>{title}</h2>
      <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>{desc}</p>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="nk-card p-5">
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--color-muted-foreground)" }}>
        {label}
      </p>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

export default function ButtonSection() {
  return (
    <section id="buttons" className="space-y-4">
      <SectionTitle
        title="버튼"
        desc="3D 조명 효과와 일관된 쉐도우 깊이를 가진 버튼 시스템"
      />
      <div className="grid gap-4">
        <Group label="변형 (Variant)">
          <Button variant="default">기본</Button>
          <Button variant="secondary">보조</Button>
          <Button variant="outline">아웃라인</Button>
          <Button variant="ghost">고스트</Button>
          <Button variant="destructive">삭제</Button>
          <Button variant="link">링크</Button>
        </Group>
        <Group label="크기 (Size)">
          <Button size="sm">소형</Button>
          <Button size="default">기본</Button>
          <Button size="lg">대형</Button>
          <Button size="icon"><Plus className="size-4" /></Button>
        </Group>
        <Group label="아이콘 포함">
          <Button><Download className="size-4" />다운로드</Button>
          <Button variant="secondary"><Send className="size-4" />전송</Button>
          <Button variant="outline"><Plus className="size-4" />추가</Button>
          <Button variant="destructive"><Trash2 className="size-4" />삭제</Button>
        </Group>
        <Group label="상태">
          <Button disabled>비활성화</Button>
          <Button>
            <Loader2 className="size-4 animate-spin" />
            로딩 중...
          </Button>
        </Group>
      </div>
    </section>
  );
}
