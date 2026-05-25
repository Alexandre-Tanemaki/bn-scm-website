import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B&N SCM — Supply Chain Management | Import, Vente & Location de Véhicules",
  description:
    "B&N Supply Chain Management, votre partenaire de confiance pour l'import, la vente et la location de véhicules au Gabon. Des véhicules de qualité aux meilleurs prix.",
  keywords: "B&N SCM, Supply Chain Management, import véhicules, vente voiture, location voiture, Gabon, Libreville",
  openGraph: {
    title: "B&N SCM — Import, Vente & Location de Véhicules",
    description: "Votre centrale d'achat spécialisée dans les véhicules au Gabon",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
