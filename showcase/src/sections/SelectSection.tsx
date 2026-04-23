import React from "react";
import {
  Select, SelectTrigger, SelectContent, SelectItem,
  SelectValue, SelectGroup, SelectLabel, Label,
} from "@nekoi93/ui";

export default function SelectSection() {
  return (
    <section id="selects" className="space-y-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold" style={{ color: "var(--color-foreground)" }}>셀렉트</h2>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted-foreground)" }}>
          글래스 드롭다운 셀렉트 컴포넌트
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="nk-card p-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-muted-foreground)" }}>기본 선택</p>
          <div className="space-y-1.5">
            <Label>프레임워크</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="프레임워크 선택..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue">Vue</SelectItem>
                <SelectItem value="svelte">Svelte</SelectItem>
                <SelectItem value="solid">SolidJS</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>빌드 도구</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="빌드 도구 선택..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vite">Vite</SelectItem>
                <SelectItem value="webpack">Webpack</SelectItem>
                <SelectItem value="rollup">Rollup</SelectItem>
                <SelectItem value="tsup">tsup</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="nk-card p-5 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-muted-foreground)" }}>그룹 선택</p>
          <div className="space-y-1.5">
            <Label>라이브러리</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="라이브러리 선택..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>UI 라이브러리</SelectLabel>
                  <SelectItem value="nekoi">@nekoi93/ui</SelectItem>
                  <SelectItem value="shadcn">shadcn/ui</SelectItem>
                  <SelectItem value="radix">Radix UI</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>상태 관리</SelectLabel>
                  <SelectItem value="zustand">Zustand</SelectItem>
                  <SelectItem value="jotai">Jotai</SelectItem>
                  <SelectItem value="redux">Redux Toolkit</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>버전</Label>
            <Select defaultValue="v1">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="v1">v1.0.0 (현재)</SelectItem>
                <SelectItem value="v09" disabled>v0.9.0</SelectItem>
                <SelectItem value="v08" disabled>v0.8.0</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
