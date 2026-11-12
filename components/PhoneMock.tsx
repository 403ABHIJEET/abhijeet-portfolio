// UI/UX showpiece, built with Tailwind. Replace with Figma exports when ready.
export default function PhoneMock() {
  return (
    <div
      className="mx-auto w-[270px] rounded-[40px] bg-ink p-3 shadow-2xl"
      role="img"
      aria-label="Fern app home screen showing today's plant care tasks"
    >
      <div className="flex h-[520px] flex-col rounded-[30px] bg-chalk p-5">
        <p className="text-xs text-ink/60">Thursday</p>
        <h4 className="mt-1 font-display text-2xl font-bold leading-tight">3 plants need you today</h4>

        <div className="mt-5 rounded-2xl bg-cobalt p-4 text-chalk">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-lilac text-xl">🌿</div>
            <div>
              <p className="font-semibold leading-tight">Monstera</p>
              <p className="text-xs text-chalk/80">Water, about 300 ml</p>
            </div>
          </div>
          <div className="mt-4 rounded-full bg-chalk py-2 text-center text-sm font-semibold text-cobalt">Mark as done</div>
        </div>

        <div className="mt-3 space-y-2">
          {[["Snake plant", "Rotate toward light"], ["Pothos", "Check soil"]].map(([n, t]) => (
            <div key={n} className="flex items-center justify-between rounded-xl bg-white px-3 py-3">
              <div>
                <p className="text-sm font-semibold">{n}</p>
                <p className="text-xs text-ink/60">{t}</p>
              </div>
              <span className="h-5 w-5 rounded-full border-2 border-ink/20" />
            </div>
          ))}
        </div>

        <div className="mt-auto flex justify-around rounded-full bg-ink py-3 text-xs text-chalk">
          <span className="font-semibold text-tangerine">Today</span><span>Plants</span><span>Learn</span>
        </div>
      </div>
    </div>
  );
}
