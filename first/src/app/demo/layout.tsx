// src/app/demo/layout.tsx
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h1>📦 Layout</h1>
      {children}
    </div>
  );
}
