import "./globals.css";

export const metadata = {
  title: "Pumpions",
  description:
    "They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership,",
  openGraph: {
    title: "Pumpions",
    description:
      "They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership,",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
