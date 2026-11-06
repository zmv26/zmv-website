
import type { Metadata } from "next";
import StudioMorphoPage from "@/app/components/businesses/StudioMorphoPage";

export const metadata: Metadata = {
  title: "StudioMorpho | Movement, Recovery & Nourishment",
  description:
    "Discover StudioMorpho, a wellness concept bringing together Mat Pilates, yoga, sculpt, contrast therapy, recovery, and Nectar wellness café.",
  alternates: {
    canonical: "/businesses/fitness-wellness",
  },
  openGraph: {
    title: "StudioMorpho | A ZMV Group Corp. Venture",
    description:
      "Move with intention. Recover with purpose. Explore the StudioMorpho wellness experience.",
    type: "website",
  },
};

export default function FitnessWellnessPage() {
  return <StudioMorphoPage />;
}
