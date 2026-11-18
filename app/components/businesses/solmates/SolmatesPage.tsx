import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu as MenuIcon } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const A = "/images/solmates/";

const menuItems = [
  {
    title: "Coffee",
    description: "Signature lattes and café classics",
    image: "coffee-cup.jpg",
    alt: "Butter-yellow Solmates coffee cup with the blue Solmates emblem",
  },
  {
    title: "Matcha",
    description: "Ceremonial-grade and creative blends",
    image: "menu-matcha.jpg",
    alt: "Solmates matcha drink",
  },
  {
    title: "Smoothies",
    description: "Nutrient-packed and refreshing",
    image: "smoothie.jpg",
    alt: "Solmates berry smoothie",
  },
];

function BrandLockup({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/businesses/cafe-food"
      aria-label="Solmates Café home"
      className={`flex shrink-0 items-center gap-3 sm:gap-4`}
    >
      <Image
        src={`${A}solmates-emblem-blue.png`}
        alt="Solmates emblem"
        width={96}
        height={96}
        priority
        className={`${footer ? "h-[62px] w-[62px] sm:h-[76px] sm:w-[76px]" : "h-[56px] w-[56px] sm:h-[76px] sm:w-[76px]"} object-contain`}
      />
      <span className="h-12 w-px bg-[#173e91]/55 sm:h-16" aria-hidden="true" />
      <span className="flex flex-col items-start">
        <Image
          src={`${A}solmates-script-blue.png`}
          alt="Solmates"
          width={250}
          height={62}
          priority
          className={`${footer ? "w-[155px] sm:w-[205px]" : "w-[136px] sm:w-[205px]"} h-auto object-contain`}
        />
        <span
  className={`mt-1 text-[9px] font-bold uppercase tracking-[0.12em] sm:text-[10px] text-[#173e91]`}
>
  Tropical State of Mind
</span>
      </span>
    </Link>
  );
}

function SolmatesHeader() {
  const links = [
    ["Home", "#home"],
    ["Our Story", "#story"],
    ["Menu", "#menu"],
    ["Experience", "#experience"],
    ["Visit Us", "#visit"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#173e91]/10 bg-[#ffdf59]">
      <div className="mx-auto flex min-h-[84px] max-w-[1440px] sm:min-h-[104px] items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-14">
        <BrandLockup />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Solmates navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="whitespace-nowrap text-[13px] font-semibold text-[#082b68] transition-colors hover:text-[#0b6b8d]"
            >
              {label}
            </a>
          ))}
          <a
            href="#visit"
            className="rounded-full bg-[#073b80] px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#052d63]"
          >
            Get in Touch
          </a>
        </nav>
        <details className="group relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-[#073b80] text-white [&::-webkit-details-marker]:hidden">
            <MenuIcon size={22} aria-label="Open navigation menu" />
          </summary>
          <nav className="absolute right-0 top-[calc(100%+12px)] z-50 min-w-56 rounded-xl border border-[#173e91]/10 bg-[#ffdf59] p-4 shadow-xl" aria-label="Mobile Solmates navigation">
            <div className="flex flex-col">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="border-b border-[#173e91]/10 py-3 text-sm font-semibold text-[#082b68]"
                >
                  {label}
                </a>
              ))}
              <a
                href="#visit"
                className="mt-4 rounded-full bg-[#073b80] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}

function SolmatesFooter() {
  return (
    <footer id="visit" className="bg-[#ffdf59] text-[#082b68]">
      <div className="mx-auto grid max-w-[1440px] gap-9 px-6 py-10 sm:px-10 md:grid-cols-[1.35fr_1fr_1fr] md:items-center lg:px-14">
        <div>
          <BrandLockup footer />
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <p className="col-span-2 mb-1 font-bold">Quick Links</p>
          <a href="#home" className="hover:underline">Home</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#story" className="hover:underline">Our Story</a>
          <a href="#visit" className="hover:underline">Visit Us</a>
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#visit" className="hover:underline">Get in Touch</a>
        </div>
        <div className="border-t border-[#173e91]/30 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <p className="mb-4 text-sm font-bold">Follow Us</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer" className="hover:opacity-70"><FaInstagram  size={23} /></a>
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer" className="hover:opacity-70"><FaFacebookF  size={23} /></a>
          </div>
          <p className="mt-5 text-[10px] text-[#173e91]/75">A ZMV Group Corp. business</p>
        </div>
      </div>
    </footer>
  );
}

export default function SolmatesPage() {
  return (
    <main className="overflow-hidden bg-[#fff5e5] text-[#082b68]">
      <SolmatesHeader />

      <section
        id="home"
        className="relative isolate min-h-[540px] overflow-hidden bg-[#07516d] text-white lg:min-h-[520px]"
      >
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_18%_45%,#08718a_0%,#064b68_48%,#07385e_100%)]" />
        <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[57%]">
          <Image
            src={`${A}hero-matcha.jpg`}
            alt="Solmates matcha drink against a tropical blue and sunshine-yellow setting"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 57vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064b68] via-[#064b68]/30 to-transparent lg:from-[#064b68]/70 lg:via-transparent" />
        </div>
        <div className="mx-auto flex min-h-[540px] max-w-[1440px] items-center px-6 py-16 sm:px-10 lg:min-h-[520px] lg:px-16">
          <div className="max-w-[610px]">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#ffdf59]">A wellness café</p>
            <h1 className="font-heading text-[clamp(3.25rem,7vw,5.8rem)] leading-[0.98] tracking-[-0.045em] text-[#fff8e9]">
              A Tropical
              <br />
              State of Mind.
            </h1>
            <div className="my-5 h-[7px] w-44 -rotate-2 rounded-full bg-[#ffdf59]" />
            <p className="max-w-[440px] text-base leading-7 text-white sm:text-lg">
              A wellness café for the modern Filipino lifestyle — where great coffee, healthy drinks, and good company come together.
            </p>
            <a
              href="#menu"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#ffdf59] px-6 py-3.5 text-sm font-bold text-[#082b68] transition-transform hover:-translate-y-0.5"
            >
              Explore Our Menu <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="relative bg-[#fff5e5]">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-16 lg:py-10">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#073b80]">Our Story</p>
            <h2 className="font-heading max-w-[530px] text-5xl italic leading-[0.98] tracking-[-0.04em] text-[#073b80] sm:text-6xl">
              Good Moments,
              <br />
              Shared Naturally.
            </h2>
            <p className="mt-5 max-w-[510px] text-[15px] leading-6 text-[#102b50] sm:text-base">
              Solmates is more than a café — it&apos;s a daily tropical escape in the city. Inspired by sunshine, tropical living, and genuine connection, we create a space where wellness, great flavors, and community come together.
            </p>
            <a href="#experience" className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#ffdf59] px-6 py-3 text-sm font-bold text-[#082b68] hover:bg-[#f5cf3f]">
              Read Our Story <ArrowRight size={17} />
            </a>
          </div>
          <div className="relative aspect-[1.72/1] overflow-hidden rounded-[26px]">
            <Image
              src={`${A}story-interior.jpg`}
              alt="Solmates café interior concept with sunshine-yellow walls, warm pendant lighting and natural seating"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#fff5e5] pb-12 pt-5">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#073b80]">Our Menu</p>
              <h2 className="font-heading text-5xl italic leading-none tracking-[-0.04em] text-[#073b80] sm:text-6xl">
                Feel-Good Creations.
              </h2>
              <div className="ml-auto mt-3 h-[7px] w-44 -rotate-2 rounded-full bg-[#ffdf59]" />
            </div>
            <p className="max-w-[380px] text-sm leading-6 text-[#102b50] sm:text-base">
              Specialty coffee, premium matcha, functional smoothies, and nourishing food — crafted for your everyday wellness.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-7">
            {menuItems.map((item) => (
              <article key={item.title} className="grid grid-cols-[minmax(120px,0.9fr)_1fr] items-center gap-3 sm:gap-5">
                <div className="relative aspect-square min-w-0">
                  <Image
                    src={`${A}${item.image}`}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 40vw, 22vw"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#073b80] sm:text-2xl">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#102b50] sm:text-sm">{item.description}</p>
                  <a href="#visit" aria-label={`Ask about ${item.title}`} className="mt-3 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#073b80] text-[#073b80] transition-colors hover:bg-[#073b80] hover:text-white">
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#073f79] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-9 px-6 py-12 sm:px-10 lg:grid-cols-[0.88fr_1.55fr] lg:items-center lg:px-16 lg:py-10">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.18em] text-white">The Solmates Experience</p>
            <h2 className="font-heading text-5xl italic leading-[0.98] tracking-[-0.04em] text-[#fff8e9] sm:text-6xl">
              A Little Escape
              <br />
              in the City.
            </h2>
            <div className="my-4 h-px w-16 bg-[#ffdf59]" />
            <p className="max-w-[360px] text-sm leading-6 text-white/90 sm:text-base">
              A vibrant, feel-good space designed for connection, productivity, and everyday wellness.
            </p>
            <a href="#visit" className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#ffdf59] px-6 py-3 text-sm font-bold text-[#082b68] hover:bg-[#f5cf3f]">
              View the Experience <ArrowRight size={17} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative row-span-2 min-h-[300px] overflow-hidden rounded-[24px]">
              <Image src={`${A}experience-counter.jpg`} alt="Solmates counter and café interior concept" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
            </div>
            <div className="relative min-h-[145px] overflow-hidden rounded-[24px]">
              <Image src={`${A}experience-seating.jpg`} alt="Solmates café seating concept" fill sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
            </div>
            <div className="relative min-h-[145px] overflow-hidden rounded-[24px]">
              <Image src={`${A}experience-storefront.jpg`} alt="Solmates storefront concept" fill sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <SolmatesFooter />
    </main>
  );
}
