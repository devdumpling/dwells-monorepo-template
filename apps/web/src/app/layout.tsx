import "../styles/globals.css";

export const metadata = {
  title: "Intervu",
  description: "A better way to interview",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
