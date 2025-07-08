// src/app/demo/page.tsx
import { JSX, Suspense } from "react";
import { notFound } from "next/navigation";

function Content() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(<h2>✅ 页面加载成功！</h2>), 2000);
  }) as unknown as JSX.Element;
}

export default function Page() {
  // 组件内抛错，同级的error.tsx会捕获
  // throw new Error("我是故意抛出的错误");
  // 假设总是触发not-found界面
  notFound();
  return (
    <div>
      <h1>Demo Page</h1>
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Content />
      </Suspense> */}
      {/* 没渲染出来前会默认加载同层级的loading.tsx文件 */}
      <Content />
    </div>
  );
}
