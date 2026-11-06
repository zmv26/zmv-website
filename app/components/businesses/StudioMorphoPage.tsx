"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Flower2,
  HeartPulse,
  Menu,
  MoveUpRight,
  Waves,
  Wind,
  X,
} from "lucide-react";

const navigation = [
  { label: "The Philosophy", href: "#philosophy" },
  { label: "Movement", href: "#movement" },
  { label: "Recovery", href: "#recovery" },
  { label: "Nectar", href: "#nectar" },
];

const classes = [
  {
    number: "01",
    name: "WINGFLOW",
    type: "Vinyasa Yoga",
    description:
      "A dynamic flow linking breath and movement to build strength, mobility, and mindfulness.",
  },
  {
    number: "02",
    name: "ASCEND",
    type: "Power Yoga",
    description:
      "An athletic yoga practice focused on endurance, balance, and full-body strength.",
  },
  {
    number: "03",
    name: "AXIS",
    type: "Mat Pilates",
    description:
      "Deep core activation, posture, stability, and controlled movement.",
  },
  {
    number: "04",
    name: "FLIGHT",
    type: "Cardio Sculpt",
    description:
      "Pilates-inspired movement, bodyweight strength, and low-impact cardio intervals.",
  },
  {
    number: "05",
    name: "FORGE",
    type: "Strength Flow",
    description:
      "A challenging blend of yoga and functional strength to build muscular endurance.",
  },
  {
    number: "06",
    name: "METAMORPH",
    type: "Full Body Sculpt",
    description:
      "A low-impact toning class using bodyweight, bands, and light dumbbells.",
  },
  {
    number: "07",
    name: "FLUTTER",
    type: "Pop Sculpt + Tone",
    description:
      "Music-driven sculpt with playful choreography and Pilates-inspired movement.",
  },
  {
    number: "08",
    name: "WINGFORM",
    type: "Barre Fusion",
    description:
      "Ballet-inspired movement blended with Pilates and yoga for a full-body burn.",
  },
  {
    number: "09",
    name: "COCOON",
    type: "Restorative Yoga",
    description:
      "Gentle stretches, props, and breathwork designed to help you slow down and reset.",
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a66b7d] sm:text-xs">
      {children}
    </p>
  );
}

export default function StudioMorphoPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f2f0] text-[#442c38] selection:bg-[#d9b5bd] selection:text-[#442c38]">
      {/* Navigation */}

      <div className="mx-auto max-w-[1400px] px-6 pt-4 sm:px-10">
        <Link href="/"
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a66b7d] transition-colors hover:text-[#573346]"
        >
        <span aria-hidden="true">←</span>
          Back to ZMV Group
        </Link>
      </div>

      <header className="relative z-30 border-b border-[#6a344b]/10 bg-[#fbf7f4]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link
  href="/"
  aria-label="Back to ZMV Group"
  className="flex shrink-0 flex-col items-center justify-center"
>
  <Image
    src="/images/studiomorpho/studiomorpho-logo.png"
    alt="StudioMorpho Wellness Studio"
    width={1130}
    height={384}
    priority
    className="h-auto w-[220px] object-contain sm:w-[260px]"
  />

  <span className="mt-2 block w-full whitespace-nowrap text-center text-[7px] uppercase tracking-[0.18em] text-[#a66b7d] sm:text-[8px]">
    Movement · Recovery · Nourishment
  </span>
</Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="StudioMorpho navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#654654] transition-colors hover:text-[#b27b8b]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.studiomorphoph.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#6a344b] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6a344b] transition-colors hover:bg-[#6a344b] hover:text-white"
            >
              Visit website <ArrowUpRight size={13} />
            </a>
          </nav>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center border border-[#6a344b]/20 text-[#6a344b] lg:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-[#6a344b]/10 bg-[#fbf7f4] px-5 py-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs font-semibold uppercase tracking-[0.16em] text-[#654654]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.studiomorphoph.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex w-fit items-center gap-2 bg-[#6a344b] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
              >
                Visit website <ArrowUpRight size={13} />
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative isolate flex min-h-[690px] items-end bg-[#4c2839] sm:min-h-[760px] lg:min-h-[790px]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/studiomorpho/hero-movement.jpg'), linear-gradient(120deg, #4c2839 0%, #875466 52%, #c99ca5 100%)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#321b2a]/85 via-[#462738]/55 to-[#462738]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#281722]/45 via-transparent to-[#281722]/10" />

        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-12 px-6 pb-16 pt-28 sm:px-10 sm:pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:pb-24">
          <div className="max-w-3xl text-white">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f1d8dc] sm:text-xs">
              <span className="h-px w-9 bg-[#e9bd85]" />
              A different kind of wellness
            </p>
            <h1 className="max-w-3xl font-serif text-[clamp(3.4rem,8vw,7.6rem)] leading-[0.88] tracking-[-0.055em]">
              Move with
              <br />
              <span className="italic text-[#f1c7c9]">intention.</span>
              <br />
              Recover with
              <br />
              <span className="italic text-[#e8bd86]">purpose.</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              A considered approach to movement, recovery, and nourishment.
              Discover the StudioMorpho experience, where every practice invites
              you to reconnect with yourself.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-3 bg-[#e7bd86] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.17em] text-[#442c38] transition-colors hover:bg-[#f0d3a8]"
              >
                Explore the experience <ArrowRight size={15} />
              </a>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                A ZMV Group Corp. venture
              </span>
            </div>
          </div>

          <div className="hidden justify-self-end pb-2 lg:block">
            <div className="max-w-[245px] border-l border-white/45 pl-6 text-white/85">
              <p className="font-serif text-3xl italic leading-tight">
                Find your rhythm.
                <br />
                Make space to reset.
              </p>
              <p className="mt-5 text-[9px] uppercase tracking-[0.23em] text-[#f1c7c9]">
                Movement · Recovery · Nourishment
              </p>
            </div>
          </div>
        </div>

        <a
          href="#philosophy"
          aria-label="Scroll to philosophy"
          className="absolute bottom-7 right-7 hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/75 sm:flex"
        >
          Scroll to discover <ArrowDown size={14} />
        </a>
      </section>

      {/* Philosophy */}
      <section
        id="philosophy"
        className="scroll-mt-20 bg-[#f8f2f0] px-6 py-24 sm:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>The StudioMorpho philosophy</Eyebrow>
            <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#573346] sm:text-6xl">
              Wellness is
              <br />
              <span className="italic text-[#a66b7d]">a practice,</span>
              <br />
              not a finish line.
            </h2>
          </div>

          <div className="max-w-2xl self-end">
            <p className="text-base leading-8 text-[#725966] sm:text-lg sm:leading-9">
              StudioMorpho brings together mindful movement, intentional
              recovery, and thoughtfully prepared nourishment in one connected
              wellness concept. From mat-based classes to contrast therapy and
              the Nectar wellness café, each experience is designed around
              making time for yourself.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-[#6a344b]/15 pt-6">
              {[
                ["01", "Move"],
                ["02", "Recover"],
                ["03", "Nourish"],
              ].map(([number, label]) => (
                <div key={number}>
                  <span className="block font-serif text-2xl italic text-[#b27b8b]">
                    {number}
                  </span>
                  <span className="mt-2 block text-[9px] font-bold uppercase tracking-[0.2em] text-[#654654] sm:text-[10px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Movement */}
      <section
        id="movement"
        className="scroll-mt-20 bg-[#ead9dc] px-6 py-24 sm:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <Eyebrow>01 / Movement</Eyebrow>
              <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#573346] sm:text-6xl">
                Find strength
                <br />
                in every
                <br />
                <span className="italic text-[#a66b7d]">movement.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#725966] sm:text-base sm:leading-8 lg:justify-self-end">
              Explore a considered mix of Mat Pilates, yoga, and sculpt
              classes. Each signature format has its own character, giving
              members different ways to build strength, mobility, balance,
              and body awareness.
            </p>
          </div>

          <div
            className="mt-12 min-h-[305px] bg-cover bg-center sm:min-h-[455px]"
            style={{
              backgroundImage:
                "url('/images/studiomorpho/movement-studio2.png'), linear-gradient(110deg, #8b5a6d, #c99da8)",
            }}
            role="img"
            aria-label="StudioMorpho movement studio"
          />

          <div className="mt-14 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((item) => (
              <article
                key={item.name}
                className="group border-t border-[#6a344b]/25 py-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-[#a66b7d]">
                    {item.number}
                  </span>
                  <MoveUpRight
                    size={16}
                    className="text-[#a66b7d] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <h3 className="mt-5 font-serif text-3xl tracking-[-0.025em] text-[#573346]">
                  {item.name}
                </h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#a66b7d]">
                  {item.type}
                </p>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#725966]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recovery */}
      <section
        id="recovery"
        className="scroll-mt-20 bg-[#442b3a] px-6 py-24 text-[#fbf4f0] sm:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Eyebrow>02 / Recovery</Eyebrow>
              <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl">
                The art of
                <br />
                <span className="italic text-[#e7bdc6]">balance.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8 lg:justify-self-end">
              Recovery is part of the experience. StudioMorpho introduces
              contrast therapy and dedicated recovery rituals alongside its
              movement offering.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            <article className="relative min-h-[390px] overflow-hidden bg-[#70475a]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/images/studiomorpho/cold-plunge.jpg'), linear-gradient(145deg, #9d667a, #422b3b)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21131d]/90 via-[#21131d]/15 to-transparent" />
              <div className="absolute bottom-0 p-7 sm:p-9">
                <Waves className="mb-5 text-[#e7bd86]" size={24} strokeWidth={1.4} />
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#e7bd86]">
                  Reset & recharge
                </p>
                <h3 className="mt-2 font-serif text-4xl">Cold Plunge</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  A guided cold-water immersion experience centered on
                  controlled breathing, focus, and a refreshing reset.
                </p>
              </div>
            </article>

            <article className="relative min-h-[390px] overflow-hidden bg-[#70475a]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/images/studiomorpho/sauna.jpg'), linear-gradient(145deg, #b17b68, #422b3b)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21131d]/90 via-[#21131d]/15 to-transparent" />
              <div className="absolute bottom-0 p-7 sm:p-9">
                <Wind className="mb-5 text-[#e7bd86]" size={24} strokeWidth={1.4} />
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#e7bd86]">
                  Unwind & restore
                </p>
                <h3 className="mt-2 font-serif text-4xl">Sauna</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  A heat-based wellness experience created for a slower moment
                  of relaxation and personal reset.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-5 grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-[1fr_1.2fr] sm:items-center">
            <div className="flex items-start gap-4">
              <HeartPulse
                className="mt-1 shrink-0 text-[#e7bd86]"
                size={22}
                strokeWidth={1.4}
              />
              <div>
                <h3 className="font-serif text-2xl">Red Light Mat</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">
                  Mat-based Pilates and yoga-inspired movement in an immersive
                  red-light environment.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-[16/9] min-h-[260px] overflow-hidden sm:min-h-[300px] lg:min-h-[340px]">
              <Image
                src="/images/studiomorpho/red-light-mat-pilates1.png"
                alt="StudioMorpho Red Light Mat Pilates"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-[10px] leading-5 text-white/45">
            Experiences and service availability are subject to final launch
            confirmation. Descriptions are based on the current StudioMorpho
            concept presentation.
          </p>
        </div>
      </section>

      {/* Nectar / Solmates Café feature */}
      
<section
  id="nectar"
  className="scroll-mt-20 bg-[#f8f2f0] px-6 py-24 sm:px-10 lg:py-32"
>
  <div className="mx-auto max-w-[1200px]">

    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">

      {/* LEFT: Nectar Content */}
      <div className="flex flex-col justify-center">

        <Eyebrow>03 / Nourishment</Eyebrow>

        <p className="mt-3 font-serif text-4xl italic text-[#a66b7d]">
          Introducing
        </p>

        <h2 className="mt-1 font-serif text-6xl tracking-[-0.055em] text-[#573346] sm:text-7xl">
          Nectar<span className="text-[#bd8b91]">.</span>
        </h2>

        <p className="mt-6 text-sm leading-8 text-[#725966] sm:text-base">
          Nectar is StudioMorpho&apos;s in-house wellness café, created
          in partnership with Solmates Café. The collaboration brings
          together StudioMorpho&apos;s wellness experience and Solmates Café&apos;s
          signature beverages.
        </p>

        <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-y border-[#6a344b]/15 py-7">

          <div>
            <Coffee size={20} className="mb-3 text-[#a66b7d]" strokeWidth={1.5} />
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#573346]">
              Specialty coffee
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#806a74]">
              Thoughtfully prepared coffee selections.
            </p>
          </div>

          <div>
            <Flower2 size={20} className="mb-3 text-[#a66b7d]" strokeWidth={1.5} />
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#573346]">
              Ceremonial matcha
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#806a74]">
              A dedicated matcha beverage selection.
            </p>
          </div>

          <div>
            <HeartPulse size={20} className="mb-3 text-[#a66b7d]" strokeWidth={1.5} />
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#573346]">
              Smoothies
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#806a74]">
              Fruit-forward and wellness-inspired blends.
            </p>
          </div>

          <div>
            <Waves size={20} className="mb-3 text-[#a66b7d]" strokeWidth={1.5} />
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#573346]">
              Recovery drinks
            </h3>
            <p className="mt-2 text-xs leading-6 text-[#806a74]">
              Beverages to complement the studio experience.
            </p>
          </div>

        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.18em] text-[#a66b7d]">
          StudioMorpho × Solmates Café
        </p>

      </div>

      {/* RIGHT: Nectar Featured Image */}
      <div className="relative mx-auto aspect-[1536/1024] w-full overflow-hidden">
        <Image
          src="/images/studiomorpho/solmates-cafe-mixed-berries.png"
          alt="Solmates Café Mixed Berries smoothie with vanilla and yogurt"
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain"
        />
      </div>

    </div>

  </div>
</section>


      {/* External StudioMorpho website CTA */}
      <section
        id="visit-studiomorpho"
        className="relative isolate overflow-hidden bg-[#ead9dc] px-6 py-24 text-center sm:px-10 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/images/studiomorpho/brand-texture.jpg'), linear-gradient(120deg, #ead9dc, #c89ca7)",
          }}
        />
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Discover the full experience</Eyebrow>
          <h2 className="font-serif text-5xl leading-[0.98] tracking-[-0.045em] text-[#573346] sm:text-7xl">
            Your wellness journey
            <br />
            <span className="italic text-[#a66b7d]">starts here.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#725966] sm:text-base">
            Explore StudioMorpho&apos;s classes, recovery experiences, and
            wellness offerings through our dedicated website.
          </p>

          <a
            href="https://www.studiomorphoph.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 bg-[#573346] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#a66b7d]"
          >
            Visit StudioMorpho Website
            <ArrowUpRight size={16} />
          </a>

          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8f6877]">
            A ZMV Group Corp. venture
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#281a24] px-6 py-10 text-white/70 sm:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="font-serif text-2xl italic text-white">
              studio morpho
            </Link>
            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/45">
              A ZMV Group Corp. venture
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.14em]">
            <Link href="/" className="transition-colors hover:text-[#e7bd86]">
              ZMV Group
            </Link>
            <a href="#philosophy" className="transition-colors hover:text-[#e7bd86]">
              Philosophy
            </a>
            <a href="#movement" className="transition-colors hover:text-[#e7bd86]">
              Movement
            </a>
            <a href="#recovery" className="transition-colors hover:text-[#e7bd86]">
              Recovery
            </a>
            <a href="#nectar" className="transition-colors hover:text-[#e7bd86]">
              Nectar
            </a>
          </div>

          <p className="text-[10px] text-white/40">
            © {new Date().getFullYear()} ZMV Group Corp.
          </p>
        </div>
      </footer>
    </main>
  );
}
