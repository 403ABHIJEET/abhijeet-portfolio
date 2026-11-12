import Poster from "@/components/Poster";
import PhoneMock from "@/components/BrowserMock";
import { profile, projects, skills, type Project } from "@/lib/data";

function ProjectBlock({ p, flip }: { p: Project; flip?: boolean }) {
  const isGraphic = p.id === "graphic";
  return (
    <article
      id={p.id}
      className="grid items-center gap-10 rounded-3xl border border-[#D5DEFA] bg-white p-6 shadow-md md:grid-cols-2 md:gap-14 md:p-10"
    >
      <div className={flip ? "md:order-2" : ""}>
        <div className="rounded-2xl bg-[#E3EAFF] p-8 md:p-12">
          {isGraphic ? <Poster className="mx-auto w-full max-w-[340px] shadow-xl" /> : <PhoneMock />}
        </div>
      </div>

      <div>
        <span className="inline-block rounded-full bg-[#3B4CBA] px-4 py-1 text-sm font-semibold text-white">
          {p.kind}, {p.year}
        </span>
        <h3 className="mt-4 text-4xl font-bold leading-tight text-[#14214F] md:text-5xl">{p.title}</h3>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-[#14214F]/80">{p.summary}</p>
        <p className="mt-3 text-sm font-medium text-[#14214F]/65">Role: {p.role}</p>

        <dl className="mt-6 grid gap-3">
          {p.points.map((pt) => (
            <div key={pt.heading} className="rounded-2xl border border-[#D5DEFA] bg-[#F3F6FF] p-4">
              <dt className="font-semibold text-[#14214F]">{pt.heading}</dt>
              <dd className="mt-1 text-[#14214F]/75">{pt.text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-6 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[#C3D0F7] bg-[#E3EAFF] px-4 py-1 text-sm font-medium text-[#14214F]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EEF3FF] text-[#14214F]">
      {/* Header */}
      <header className="sticky top-0 z-50 mx-auto max-w-6xl px-6 pt-4">
        <div className="flex items-center justify-between rounded-full border border-[#D5DEFA] bg-white px-6 py-3 shadow-md">
          <a href="#top" className="text-xl font-bold text-[#14214F]">{profile.name}</a>
          <nav className="flex gap-6 text-base font-semibold text-[#14214F]">
            <a href="#work" className="hover:text-[#3B4CBA]">Work</a>
            <a href="#about" className="hover:text-[#3B4CBA]">About</a>
            <a href="#contact" className="hover:text-[#3B4CBA]">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl space-y-8 px-6 py-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-[#D5DEFA] bg-white p-8 shadow-md md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#DCE5FF] md:h-96 md:w-96"
          />
          <div className="relative">
            <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-tight text-[#14214F]">
              <span className="block overflow-hidden"><span className="rise">I design brands,</span></span>
              <span className="block overflow-hidden"><span className="rise [animation-delay:120ms]">posters and the</span></span>
              <span className="block overflow-hidden"><span className="rise [animation-delay:240ms]">screens they live on.</span></span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <p className="max-w-md text-lg text-[#14214F]/80">
                Graphic designer based in {profile.location}. I also do UI/UX, from research to a working prototype.
              </p>
              <a
                href="#work"
                className="rounded-full bg-[#3B4CBA] px-7 py-3 font-semibold text-white transition hover:bg-[#2F3FA3]"
              >
                See my work
              </a>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" aria-label="Selected work" className="scroll-mt-24 space-y-8">
          <ProjectBlock p={projects[0]} />
          <ProjectBlock p={projects[1]} flip />
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-24 rounded-3xl border border-[#D5DEFA] bg-white p-8 shadow-md md:p-14"
        >
          <h2 className="text-4xl font-bold text-[#14214F] md:text-5xl">Design first, code when it helps.</h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-[#14214F]/80">
            I started with print and identity work, and learned interface design because good brands need to work on screens too.
            I can hand over a finished design or build it in Next.js myself.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D5DEFA] bg-[#F3F6FF] p-7">
              <h3 className="text-xl font-bold text-[#14214F]">Graphic design</h3>
              <ul className="mt-4 space-y-2 text-[#14214F]/80">
                {skills.design.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-[#D5DEFA] bg-[#F3F6FF] p-7">
              <h3 className="text-xl font-bold text-[#14214F]">UI/UX and front-end</h3>
              <ul className="mt-4 space-y-2 text-[#14214F]/80">
                {skills.product.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 rounded-3xl border border-[#D5DEFA] bg-white p-8 shadow-md md:p-16"
        >
          <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-extrabold leading-none text-[#14214F]">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-[#14214F]/80">You can contact me by email below.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-[#3B4CBA] px-8 py-4 text-xl font-bold text-white transition hover:bg-[#2F3FA3] md:text-3xl"
          >
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-[#14214F]/65">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </div>
  );
}