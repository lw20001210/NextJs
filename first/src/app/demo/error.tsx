// src/app/demo/error.tsx
"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div style={{ color: "red" }}>
      <h2>❌ 页面出错了（error.tsx）</h2>
      <p>{error.message}</p>
    </div>
  );
}
