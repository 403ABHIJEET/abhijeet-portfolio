import Poster from "@/components/Poster";
import PhoneMock from "@/components/PhoneMock";
import { profile, projects, skills, type Project } from "@/lib/data";

function ProjectBlock({ p, flip }: { p: Project; flip?: boolean }) {
  const isGraphic = p.id === "graphic";
  return (
    <article id={p.id} className="grid items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      <div className={flip ? "md:order-2" : ""}>
        <div className={`rounded-3xl p-8 md:p-12 ${isGraphic ? "bg-lilac" : "bg-tangerine"}`}>
          {isGraphic ? <Poster className="mx-auto w-full max-w-[340px] shadow-xl" /> : <PhoneMock />}
        </div>
      </div>

      <div>
        <p className="font-medium text-cobalt">{p.kind}, {p.year}</p>
        <h3 className="mt-2 font-display text-4xl font-bold leading-tight md:text-5xl">{p.title}</h3>
        <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink/80">{p.summary}</p>
        <p className="mt-4 text-sm text-ink/60">Role: {p.role}</p>

        <dl className="mt-8 space-y-5 border-l-4 border-ink pl-5">
          {p.points.map((pt) => (
            <div key={pt.heading}>
              <dt className="font-display font-semibold">{pt.heading}</dt>
              <dd className="text-ink/75">{pt.text}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <li key={t} className="rounded-full border-2 border-ink px-4 py-1 text-sm font-medium">{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#top" className="font-display text-xl font-bold">{profile.name}</a>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#work" className="hover:text-cobalt">Work</a>
          <a href="#about" className="hover:text-cobalt">About</a>
          <a href="#contact" className="hover:text-cobalt">Contact</a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="relative py-16 md:py-28">
          <h1 className="font-display text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-tight">
            <span className="block overflow-hidden"><span className="rise">I design brands,</span></span>
            <span className="block overflow-hidden"><span className="rise [animation-delay:120ms]">posters and the</span></span>
            <span className="block overflow-hidden"><span className="rise [animation-delay:240ms]">screens they live on.</span></span>
          </h1>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <p className="max-w-md text-lg text-ink/75">
              Graphic designer based in {profile.location}. I also do UI/UX, from research to a working prototype.
            </p>
            <a href="#work" className="rounded-full bg-cobalt px-7 py-3 font-semibold text-chalk transition hover:bg-ink">
              See my work
            </a>
          </div>
          <div aria-hidden className="pointer-events-none absolute -right-10 top-10 -z-10 h-56 w-56 rounded-full bg-tangerine/90 md:h-80 md:w-80" />
        </section>

        {/* Work */}
        <section id="work" aria-label="Selected work">
          <ProjectBlock p={projects[0]} />
          <ProjectBlock p={projects[1]} flip />
        </section>

        {/* About */}
        <section id="about" className="my-16 rounded-3xl bg-ink p-8 text-chalk md:p-16">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Design first, code when it helps.</h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-chalk/80">
            I started with print and identity work, and learned interface design because good brands need to work on screens too.
            I can hand over a finished design or build it in Next.js myself.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-lilac">Graphic design</h3>
              <ul className="mt-3 space-y-1">{skills.design.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-tangerine">UI/UX and front-end</h3>
              <ul className="mt-3 space-y-1">{skills.product.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-32">
          <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] font-extrabold leading-none">Have a project in mind?</h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block border-b-4 border-cobalt font-display text-2xl font-bold hover:text-cobalt md:text-4xl"
          >
            {profile.email}
          </a>
          <ul className="mt-8 flex gap-6 font-medium">
            {profile.links.map((l) => (
              <li key={l.label}><a href={l.href} className="underline underline-offset-4 hover:text-cobalt">{l.label}</a></li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-sm text-ink/60">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
