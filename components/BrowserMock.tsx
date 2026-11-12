// Browser mockup showcasing the Pranj Legal Associates website.
// Replace with a real screenshot (next/image) when ready.
export default function BrowserMock() {
  const nav = ["Home", "About Us", "Services", "Our Approach", "Contact Us"];
  const services = [
    "Divorce & Family Matters",
    "Civil Cases & Property Disputes",
    "Criminal Matters & Bail",
  ];

  return (
    <div
      className="mx-auto w-full max-w-[440px] overflow-hidden rounded-xl bg-[#faf7f0] shadow-2xl ring-1 ring-black/10"
      role="img"
      aria-label="Pranj Legal Associates website homepage showing the hero section, consultation buttons and practice areas"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 bg-[#e8e6e1] px-3 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[9px] text-[#0f1f3d]/60">
          legal-advise-pearl.vercel.app
        </div>
      </div>

      {/* Site nav */}
      <div className="flex items-center justify-between bg-[#0f1f3d] px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-[#c9a24b]/20 text-[10px] text-[#c9a24b]">⚖</span>
          <span className="text-[9px] font-bold tracking-wider text-[#faf7f0]">PRANJ LEGAL</span>
        </div>
        <div className="flex gap-2.5 text-[8px] text-[#faf7f0]/80">
          {nav.map((n, i) => (
            <span key={n} className={i === 0 ? "font-semibold text-[#c9a24b]" : ""}>{n}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="px-5 pb-4 pt-5">
        <p className="text-[8px] font-semibold uppercase tracking-widest text-[#c9a24b]">
          Welcome to Pranj Legal Associates
        </p>
        <h4 className="mt-1.5 font-display text-[26px] font-bold leading-[1.1] text-[#0f1f3d]">
          Your Rights, <span className="italic text-[#c9a24b]">Our Priority.</span>
        </h4>
        <p className="mt-2 max-w-[300px] text-[9px] leading-relaxed text-[#0f1f3d]/70">
          Trusted legal guidance for individuals, families and businesses.
        </p>

        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-[#c9a24b] px-3 py-1.5 text-[9px] font-semibold text-[#0f1f3d]">
            Explore Our Services →
          </span>
          <span className="rounded-full border border-[#0f1f3d]/30 px-3 py-1.5 text-[9px] font-semibold text-[#0f1f3d]">
            Get in Touch
          </span>
        </div>

        <div className="mt-3 flex gap-3 text-[8px] text-[#0f1f3d]/70">
          <span>✓ Clear next steps</span>
          <span>✓ Client-focused guidance</span>
          <span>✓ Professional care</span>
        </div>
      </div>

      {/* Practice areas */}
      <div className="bg-white px-5 py-4">
        <p className="text-[8px] font-semibold uppercase tracking-widest text-[#0f1f3d]/50">Legal Services</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {services.map((s) => (
            <div key={s} className="rounded-lg border border-[#0f1f3d]/10 bg-[#faf7f0] p-2.5">
              <span className="text-[11px] text-[#c9a24b]">⚖</span>
              <p className="mt-1 text-[9px] font-semibold leading-tight text-[#0f1f3d]">{s}</p>
              <p className="mt-1 text-[8px] text-[#c9a24b]">Enquire →</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}