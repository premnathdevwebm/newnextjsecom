import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add product page",
  description: "Flamazon Add page",
};

export default function AddProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="m-auto min-w-[300px] max-w-7xl p-4">{children}</main>
      </body>
    </html>
  );
}
