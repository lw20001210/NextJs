// src/app/demo/page.tsx
import { JSX, Suspense } from "react";

function Content() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(<h2>✅ 页面加载成功！</h2>), 2000);
  }) as unknown as JSX.Element;
}
// throw new Error("我是故意抛出的错误");
export default function Page() {
  return (
    <div>
      <h1>Demo Page</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Content />
      </Suspense>
    </div>
  );
}
