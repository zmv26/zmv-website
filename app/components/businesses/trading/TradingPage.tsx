import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  Building2,
  Compass,
  Factory,
  Globe2,
  Handshake,
  Layers,
  Package,
  Search,
  ShoppingBag,
  Store,
  Truck,
} from "lucide-react";

import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const capabilities = [
  {
    number: "01",
    icon: Search,
    title: "Product Sourcing",
    description:
      "Explore product opportunities and connect with manufacturers, brand owners, and suppliers whose offers align with defined business requirements.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Importation & Procurement",
    description:
      "Coordinate sourcing and procurement considerations for local and international opportunities, with requirements reviewed for each product and market.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Market Development",
    description:
      "Assess category fit, positioning, customer needs, and possible routes to market before moving an opportunity forward.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Distribution Development",
    description:
      "Explore practical wholesale, retail, institutional, and other channel opportunities based on the product and commercial arrangement.",
  },
  {
    number: "05",
    icon: Layers,
    title: "Brand & Product Development",
    description:
      "Evaluate opportunities involving product adaptation, brand development, and private-label concepts where there is a clear commercial fit.",
  },
];

const categories = [
  {
    icon: Package,
    title: "Beauty & Personal Care",
    description:
      "Personal care, skincare, beauty, and everyday grooming categories.",
    tone: "bg-[#f5e9d8]",
    iconTone: "text-[#8a633c]",
  },
  {
    icon: Box,
    title: "Food & Beverage",
    description:
      "Packaged food, beverage concepts, and specialty consumer products.",
    tone: "bg-[#f5edcf]",
    iconTone: "text-[#987521]",
  },
  {
    icon: ShoppingBag,
    title: "Lifestyle & Consumer Goods",
    description:
      "Useful products designed for everyday living, work, and leisure.",
    tone: "bg-[#e8edf4]",
    iconTone: "text-[#244568]",
  },
  {
    icon: Layers,
    title: "Wellness & Everyday Essentials",
    description:
      "Selected wellness-related and household categories for further evaluation.",
    tone: "bg-[#e7eee8]",
    iconTone: "text-[#45694f]",
  },
];

const partnerTypes = [
  {
    icon: Factory,
    title: "Manufacturers & Brand Owners",
    description:
      "For companies looking to explore market opportunities and potential commercial representation.",
  },
  {
    icon: Globe2,
    title: "International Suppliers",
    description:
      "For sourcing partners interested in presenting products, capabilities, and supply requirements.",
  },
  {
    icon: Store,
    title: "Retailers & Wholesale Buyers",
    description:
      "For businesses evaluating product availability, wholesale arrangements, or category opportunities.",
  },
  {
    icon: Building2,
    title: "Corporate & Institutional Buyers",
    description:
      "For organizations with defined procurement needs and product requirements.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand the opportunity",
    description:
      "We start with the product, intended market, requirements, and the commercial objective.",
  },
  {
    number: "02",
    title: "Review sourcing and fit",
    description:
      "We review supplier information, product details, category fit, and relevant considerations.",
  },
  {
    number: "03",
    title: "Evaluate the route to market",
    description:
      "We consider potential channels, operational requirements, and the structure of a possible arrangement.",
  },
  {
    number: "04",
    title: "Agree on next steps",
    description:
      "Where there is alignment, the parties discuss scope, responsibilities, availability, and commercial terms.",
  },
];

const faqs = [
  {
    question: "Does ZMV Trading have a public product catalog?",
    answer:
      "The website does not currently represent a live inventory catalog. Product availability, specifications, pricing, and commercial terms are confirmed individually for each inquiry.",
  },
  {
    question: "Can manufacturers and suppliers introduce their products?",
    answer:
      "Yes. Suppliers and manufacturers may contact ZMV Trading with their company profile, product information, country of origin, and proposed terms for consideration.",
  },
  {
    question: "Does ZMV Trading offer distribution or representation?",
    answer:
      "Potential distribution and representation opportunities are reviewed case by case. Territory, exclusivity, regulatory requirements, responsibilities, and commercial terms must be evaluated and agreed before any commitment.",
  },
  {
    question: "Which product categories are being explored?",
    answer:
      "Areas of interest include beauty and personal care, food and beverage, lifestyle and consumer goods, and selected wellness and everyday essentials. These are areas of focus, not a statement of current stock or active brand representation.",
  },
];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#a77d31] sm:text-xs">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="font-heading mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-[#0b2d5b] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function TradingPage() {
  return (
    <>
      <Navbar />

      <main id="top" className="overflow-hidden bg-[#fffdf8]">
        {/* HERO */}
        <section className="relative isolate bg-[#082b52] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 78% 22%, rgba(217,177,99,.55) 0, transparent 27%), radial-gradient(circle at 8% 92%, rgba(73,129,166,.5) 0, transparent 32%), linear-gradient(115deg, transparent 40%, rgba(255,255,255,.06) 40.2%, transparent 40.5%)",
            }}
          />
          <div className="mx-auto grid min-h-[610px] max-w-[1500px] items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-24">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8c77e] sm:text-xs">
                <span className="h-px w-9 bg-[#c99b48]" />
                ZMV Trading
              </p>

              <h1 className="font-heading mt-7 text-5xl font-medium leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Bringing products
                <span className="block italic text-[#e8c77e]">
                  closer to opportunity.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-blue-100/90 sm:text-lg">
                A trading and distribution business focused on product
                sourcing, importation, market development, and building
                purposeful business partnerships.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:info@zmvgroup.com?subject=ZMV%20Trading%20Business%20Inquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm bg-[#c99b48] px-6 py-3 text-sm font-semibold text-[#082b52] transition-colors hover:bg-[#e1bb70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#082b52]"
                >
                  Discuss a Business Opportunity
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-sm border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#e8c77e] hover:text-[#e8c77e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Explore Our Capabilities
                  <ArrowRight size={17} aria-hidden="true" />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-100/75 sm:text-xs">
                <span>Trading</span>
                <span>Importation</span>
                <span>Distribution</span>
                <span>Brand Development</span>
              </div>
            </div>

            {/* Conceptual sourcing-to-market diagram, not a claim of existing logistics infrastructure. */}
            <div className="relative mx-auto w-full max-w-[550px]">
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-full border border-[#e8c77e]/20"
              />
              <div className="relative overflow-hidden rounded-sm border border-white/15 bg-[#103b67]/90 p-6 shadow-2xl shadow-black/20 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8c77e]">
                      Our business approach
                    </p>
                    <h2 className="font-heading mt-2 text-2xl text-white sm:text-3xl">
                      From source to market
                    </h2>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8c77e]/50 text-[#e8c77e]">
                    <Globe2 size={22} />
                  </span>
                </div>

                <div className="mt-7 space-y-3">
                  {[
                    {
                      icon: Search,
                      step: "01",
                      title: "Source",
                      detail: "Identify products and supplier opportunities",
                    },
                    {
                      icon: Package,
                      step: "02",
                      title: "Evaluate",
                      detail: "Review product, requirements, and market fit",
                    },
                    {
                      icon: Truck,
                      step: "03",
                      title: "Bring to market",
                      detail: "Explore suitable commercial and channel pathways",
                    },
                    {
                      icon: Handshake,
                      step: "04",
                      title: "Build partnerships",
                      detail: "Agree on scope and practical next steps",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.step}
                        className="flex items-center gap-4 border border-white/10 bg-white/[0.045] p-4"
                      >
                        <span className="text-xs font-semibold tracking-wider text-[#e8c77e]">
                          {item.step}
                        </span>
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#e8c77e] text-[#082b52]">
                          <Icon size={20} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-blue-100/70 sm:text-sm">
                            {item.detail}
                          </p>
                        </div>
                        {index < 3 ? (
                          <ArrowUpRight
                            size={17}
                            className="shrink-0 text-[#e8c77e]/70"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-[10px] leading-5 text-blue-100/55">
                  A conceptual overview of how ZMV Trading evaluates and
                  develops business opportunities. Specific services and
                  arrangements are subject to review and agreement.
                </p>
              </div>
              <div className="absolute -bottom-5 -right-4 -z-10 h-28 w-28 bg-[#c99b48]/70" />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-[#fffdf8] py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-14">
            <SectionHeading
              eyebrow="About ZMV Trading"
              title="Commercial thinking. Practical connections."
            />
            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-[#203a59] sm:text-xl sm:leading-9">
                ZMV Trading is the trading and distribution arm of ZMV Group
                Corp., focused on connecting product opportunities with
                sourcing, importation, and routes to market.
              </p>
              <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                We take a considered approach to business development—starting
                with an understanding of the product, the people behind it,
                the intended market, and the requirements of a potential
                commercial arrangement. Our aim is to build relationships
                grounded in clarity, alignment, and long-term opportunity.
              </p>
              <div className="mt-8 h-px w-full bg-[#d9d5ca]" />
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {[
                  ["01", "Product-led", "Start with a clear product opportunity."],
                  ["02", "Market-aware", "Consider customer and channel fit."],
                  ["03", "Relationship-focused", "Build on transparent expectations."],
                ].map(([number, title, description]) => (
                  <div key={number}>
                    <p className="text-xs font-bold tracking-[0.18em] text-[#a77d31]">
                      {number}
                    </p>
                    <h3 className="mt-2 font-semibold text-[#0b2d5b]">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="scroll-mt-20 bg-[#f3f1eb] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
            <SectionHeading
              eyebrow="What We Do"
              title="Capabilities built around opportunity."
              description="A connected set of business capabilities designed to help evaluate products, coordinate sourcing, and explore the right commercial path."
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return (
                  <article
                    key={capability.number}
                    className="group flex min-h-[260px] flex-col border border-[#dedbd2] bg-[#fffdf8] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#c99b48] hover:shadow-lg hover:shadow-[#0b2d5b]/5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center bg-[#0b2d5b] text-[#e8c77e] transition-colors group-hover:bg-[#c99b48] group-hover:text-[#0b2d5b]">
                        <Icon size={22} strokeWidth={1.7} />
                      </span>
                      <span className="text-xs font-semibold tracking-[0.18em] text-[#b18b20]">
                        {capability.number}
                      </span>
                    </div>
                    <h3 className="font-heading mt-8 text-2xl font-semibold text-[#0b2d5b]">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {capability.description}
                    </p>
                  </article>
                );
              })}
              <div className="flex min-h-[260px] flex-col justify-between bg-[#0b2d5b] p-7 text-white">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8c77e]">
                    Our focus
                  </p>
                  <h3 className="font-heading mt-4 text-3xl leading-tight">
                    The right product.
                    <span className="block italic text-[#e8c77e]">
                      The right opportunity.
                    </span>
                  </h3>
                </div>
                <a
                  href="mailto:info@zmvgroup.com?subject=ZMV%20Trading%20Capabilities"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#e8c77e] hover:text-white"
                >
                  Talk to our team <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="bg-[#fffdf8] py-20 sm:py-24">
          <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Areas of Interest"
                title="Product categories we are exploring."
              />
              <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Our interests span selected consumer categories where product
                quality, supplier alignment, and market relevance can create
                meaningful opportunities.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <article
                    key={category.title}
                    className="overflow-hidden border border-[#e5e1d8] bg-white"
                  >
                    <div
                      className={`flex h-40 items-center justify-center ${category.tone}`}
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-current/15 bg-white/65">
                        <Icon
                          size={34}
                          strokeWidth={1.35}
                          className={category.iconTone}
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[10px] font-bold tracking-[0.18em] text-[#b18b20]">
                        CATEGORY 0{index + 1}
                      </p>
                      <h3 className="font-heading mt-3 text-xl font-semibold leading-snug text-[#0b2d5b]">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {category.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 border-l-2 border-[#c99b48] bg-[#f6f2e8] px-5 py-4">
              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                <strong className="text-[#0b2d5b]">A note on our portfolio:</strong>{" "}
                These are product categories of interest, not a live product
                catalog or a representation of currently available inventory.
                Product availability and representation are confirmed
                individually.
              </p>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="bg-[#e9edf1] py-20 sm:py-24">
          <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
            <SectionHeading
              eyebrow="Who We Work With"
              title="Built around the right partnerships."
              description="We welcome conversations with businesses and organizations that have a clear product, sourcing, procurement, or market opportunity to discuss."
              centered
            />

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {partnerTypes.map((partner) => {
                const Icon = partner.icon;
                return (
                  <article
                    key={partner.title}
                    className="border border-white/80 bg-white/80 p-7"
                  >
                    <span className="flex h-12 w-12 items-center justify-center bg-[#0b2d5b] text-[#e8c77e]">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <h3 className="font-heading mt-6 text-xl font-semibold leading-snug text-[#0b2d5b]">
                      {partner.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {partner.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#fffdf8] py-20 sm:py-24">
          <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <SectionEyebrow>How We Approach Opportunities</SectionEyebrow>
                <h2 className="font-heading mt-3 text-3xl font-semibold leading-[1.12] text-[#0b2d5b] sm:text-4xl lg:text-5xl">
                  Clear steps.
                  <span className="block italic">Considered decisions.</span>
                </h2>
                <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Every opportunity is different. We begin by understanding
                  what is being offered or required, then assess whether there
                  is a practical basis for further discussion.
                </p>
                <a
                  href="mailto:info@zmvgroup.com?subject=ZMV%20Trading%20Opportunity"
                  className="mt-8 inline-flex items-center gap-3 border-b border-[#b18b20] pb-2 text-sm font-semibold text-[#0b2d5b] transition-colors hover:text-[#a77d31]"
                >
                  Start a conversation <ArrowRight size={17} />
                </a>
              </div>

              <div className="border-y border-[#dcd8ce]">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`grid gap-4 py-6 sm:grid-cols-[70px_1fr] sm:gap-6 ${
                      index < processSteps.length - 1
                        ? "border-b border-[#dcd8ce]"
                        : ""
                    }`}
                  >
                    <p className="font-heading text-3xl italic text-[#b18b20]">
                      {step.number}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0b2d5b]">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENCY / FAQ */}
        <section className="bg-[#f3f1eb] py-20 sm:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-6 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-14">
            <div>
              <SectionEyebrow>Working With ZMV Trading</SectionEyebrow>
              <h2 className="font-heading mt-3 text-3xl font-semibold leading-tight text-[#0b2d5b] sm:text-4xl">
                Clear information builds better business relationships.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                We believe expectations should be clear from the beginning.
                Product availability, scope, responsibilities, and commercial
                terms are discussed and confirmed before an arrangement moves
                forward.
              </p>
            </div>

            <div className="divide-y divide-[#d9d5ca] border-y border-[#d9d5ca]">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-sm font-semibold text-[#0b2d5b] marker:hidden sm:text-base">
                    <span>{faq.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center border border-[#b18b20] text-[#0b2d5b] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pt-4 pr-10 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#082b52] py-20 text-white sm:py-24">
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-[#e8c77e]/20"
          />
          <div
            aria-hidden="true"
            className="absolute -right-6 -top-16 h-64 w-64 rounded-full border border-[#e8c77e]/20"
          />
          <div className="relative mx-auto flex max-w-[1500px] flex-col justify-between gap-9 px-6 sm:px-8 lg:flex-row lg:items-end lg:px-14">
            <div className="max-w-3xl">
              <SectionEyebrow>Let&apos;s Connect</SectionEyebrow>
              <h2 className="font-heading mt-4 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
                Have a product or business opportunity?
                <span className="block italic text-[#e8c77e]">
                  Let&apos;s explore our opportunities.
                </span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-blue-100/80 sm:text-base sm:leading-8">
                Share your product, sourcing, procurement, or partnership
                inquiry with ZMV Trading. Our team can review the information
                and discuss appropriate next steps.
              </p>
            </div>
            <a
              href="mailto:info@zmvgroup.com?subject=ZMV%20Trading%20Business%20Inquiry"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-sm bg-[#c99b48] px-7 py-4 text-sm font-semibold text-[#082b52] transition-colors hover:bg-[#e1bb70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Send a Business Inquiry
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
