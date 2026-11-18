import type { Metadata } from "next";
import TradingPage from "../../components/businesses/trading/TradingPage";

export const metadata: Metadata = {
  title: "ZMV Trading | Trading, Importation & Distribution",
  description:
    "Explore ZMV Trading's business focus across product sourcing, importation, market development, distribution, and business partnerships.",
};

export default function TradingDistributionRoute() {
  return <TradingPage />;
}
