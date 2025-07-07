// src/app/demo/template.tsx
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ border: "2px dashed green", padding: "10px" }}>
      <h1>🧩 Template</h1>
      {children}
    </div>
  );
}
