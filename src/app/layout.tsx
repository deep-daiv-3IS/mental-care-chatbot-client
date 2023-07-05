export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' style={{ height: '100%', backgroundColor: 'aliceblue' }}>
      <body style={{ height: '100%' }}>{children}</body>
    </html>
  );
}
