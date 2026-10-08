const reasons = [
  {
    number: "01",
    title: "Engineering depth",
    text: "Our technology decisions are grounded in practical engineering and real-world implementation.",
  },
  {
    number: "02",
    title: "Business understanding",
    text: "We build technology around business objectives rather than adding complexity for its own sake.",
  },
  {
    number: "03",
    title: "Long-term thinking",
    text: "Our systems are designed with maintainability, scalability and future growth in mind.",
  },
  {
    number: "04",
    title: "End-to-end delivery",
    text: "From product thinking and interface design to development, infrastructure and deployment.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#080808] px-6 py-32 text-white md:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr]">

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D99A4E]">
              Why us
            </p>

            <h2 className="mt-8 max-w-xl text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.065em]">
              Built to deliver.
              <span className="block text-white/25">
                Designed to last.
              </span>
            </h2>
          </div>

          <div className="border-t border-white/10">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="grid gap-6 border-b border-white/10 py-9 md:grid-cols-[70px_1fr]"
              >

                <span className="font-mono text-xs text-white/25">
                  {reason.number}
                </span>

                <div>
                  <h3 className="text-2xl font-medium">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                    {reason.text}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}