import type { Metadata } from "next";
import SolmatesPage from "@/app/components/businesses/solmates/SolmatesPage";

export const metadata: Metadata = {
  title: "Solmates Café | A Tropical State of Mind",
  description:
    "A wellness café for the modern Filipino lifestyle — where great coffee, healthy drinks, and good company come together.",
  openGraph: {
    title: "Solmates Café | A Tropical State of Mind",
    description:
      "Good moments, shared naturally. Discover the Solmates café experience.",
    images: ["/images/solmates/hero-matcha.jpg"],
  },
};

export default function SolmatesRoute() {
  return <SolmatesPage />;
}
