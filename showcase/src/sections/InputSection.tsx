import React, { useState } from "react";
import { Input, Label, Textarea, Button } from "@nekoi93/ui";
import { Search, Eye, EyeOff, Mail } from "lucide-react";

export default function InputSection() {
  const [showPw, setShowPw] = useState(false);

  return (
    <section id="inputs" className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>인풋</h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
          inner-shadow로 depth를 표현하는 입력 필드
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="nk-card p-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-muted-foreground)" }}>기본 입력</p>
          <div className="space-y-1.5">
            <Label htmlFor="name">이름</Label>
            <Input id="name" placeholder="홍길동" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">이메일</Label>
            <div className="relative">
              <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4" style={{ color: "var(--color-muted-foreground)" }} />
              <Input id="email" type="email" placeholder="nekoi@everlib.pro" className="pl-8" />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="search">검색</Label>
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4" style={{ color: "var(--color-muted-foreground)" }} />
              <Input id="search" placeholder="컴포넌트 검색..." className="pl-8" />
            </div>
          </div>
        </div>

        <div className="nk-card p-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-muted-foreground)" }}>비밀번호 / 텍스트에리어</p>
          <div className="space-y-1.5">
            <Label htmlFor="pw">비밀번호</Label>
            <div className="relative">
              <Input id="pw" type={showPw ? "text" : "password"} placeholder="••••••••" className="pr-10" />
              <button
                onClick={() => setShowPw((v) => !v)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="disabled">비활성화</Label>
            <Input id="disabled" placeholder="비활성화된 필드" disabled />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="memo">메모</Label>
            <Textarea id="memo" placeholder="내용을 입력하세요..." rows={3} />
          </div>
        </div>
      </div>

      {/* 회원가입 폼 예시 */}
      <div className="nk-card p-6">
        <p className="text-sm font-semibold mb-4" style={{ color: "var(--color-foreground)" }}>회원가입 폼 예시</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <div className="space-y-1.5">
            <Label>이름</Label>
            <Input placeholder="홍길동" />
          </div>
          <div className="space-y-1.5">
            <Label>사용자명</Label>
            <Input placeholder="nekoi93" />
          </div>
          <div className="space-y-1.5">
            <Label>이메일</Label>
            <Input type="email" placeholder="nekoi@everlib.pro" />
          </div>
          <div className="space-y-1.5">
            <Label>비밀번호</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>
        <Button className="w-full">계정 만들기</Button>
      </div>
    </section>
  );
}
