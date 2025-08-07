export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <h2>我是最外层的layout</h2>
      </body>
    </html>
  );
}
